const $ = require("jquery")

// two values for a specific variable to use for comparisons
class ClimateVariable {
	constructor (variable_name,reference,value) {
		this.variable_name=variable_name
		this.reference=reference
		this.value=value
	}
}

// a cause is a trigger that can be set off by different variables
class Cause {
	constructor (variable_name,operator,threshold) {
		this.variable_name=variable_name
		this.operator=operator
		this.threshold=threshold
		switch(variable_name) {
		case "mean_windspeed": this.image="image/wind.svg"
		case "mean_temperature": this.image="image/temp.svg"
		case "daily_precip": this.image="image/rain.svg"
		default: console.log("no svg for "+variable_name)
		}
	}

	isActive(variable) {
		if (variable.variable_name==this.variable_name) {			
			switch (this.operator) {
			case "increase":
				if (variable.reference<variable.value)
					return true
				return false
				break;
			case "decrease":
				if (variable.reference>variable.value)
					return true
				return false
				break;
			case "less-than":
				if (variable.value<this.threshold)
					return true
				return false
				break;
			case "greater-than":
				if (variable.value>this.threshold)
					return true
				return false
				break;
			}
		}
		return false
	}

}

class Impact {
	constructor (type,description,references) {
		this.type=type
		this.description=description
		this.references=references
	}
}

class Adaptation {
	constructor (description,examples) {
		this.description=description
		this.examples=examples		
	}
}

// operators:
//
//   increase
//   decrease
//   less-than
//   greater-than
//   ...

class Trend {
	constructor (cause,impacts,adaptations,sector,subsector,trend,priority) {
		this.cause=cause		
		this.impacts=impacts
		this.adaptations=adaptations

		// metadata
		this.sector=sector
		this.subsector=subsector
		this.trend=trend
		this.priority=priority
	}

}

class AdaptationFinder {
	constructor (trends) {
		this.trends = trends
		this.variables = []
		this.variable_names = [
			"daily_precip",
			"mean_temp",
			"max_temp",
			"min_temp",
			"mean_windspeed",
			"max_windspeed",
			"min_windspeed"
		]
	}

	addVariable(variable_name,yearly_data,reference_year,value_year) {
		let y = 0
		let ref,val
		for (let d of yearly_data) {
			if (d.year==reference_year) ref=d.avg
			if (d.year==value_year) val=d.avg
		}

		if (ref!=undefined && val!=undefined) {
			this.variables.push(new ClimateVariable(variable_name,ref,val))
		}		
	}

	async loadVariables(table,zones,reference_year,value_year) {
		this.variables = []
		for (let variable_name of this.variable_names) {		
			await $.getJSON(
				"/api/future",
				{
					table: table,
					zones: zones,
					data_type: variable_name
				},
				(data,status) => {
					console.log("loaded "+variable_name)
					this.addVariable(variable_name,data,reference_year,value_year)
				})
		}		
	}
	
	calcActiveTrends() {
		let active_trends = []
		for (let trend of this.trends) {
			for (let variable of this.variables) {
				if (trend.cause.isActive(variable)) {
					console.log(variable.variable_name+" is "+cause.operator)
					active_trends.push(trend)
				}
			}
		}
		return active_trends
	}
}

const the_trends = [
	new Trend(new Cause("mean_windspeed", "increase", 0),
				[new Impact("Sector",
							"Increased wind speed leads to decreased cycling. More people use public transport networks.",
							["https://dx.doi.org/10.1186/1476-069x-11-12"]),
				 new Impact("Health and Wellbeing",
							"More people get sick, as contact increases.",
							["https://dx.doi.org/10.1186/1476-069x-11-12"])],
				[new Adaptation("This is an adaptation",["Example 1","Example 2"])],
				"Transport",
				"Active Transport",
				"Rising",
				"High"),
	new Trend(new Cause("daily_precip", "increase", 0),
				[new Impact("Sector",
							"Increased precipitation leads to decreased cycling.",
							["https://dx.doi.org/10.1186/1476-069x-11-12",
							 "https://doi.org/10.1016/j.amepre.2006.08.027"])],
				[new Adaptation("Another adaption",["Example 1","Example 2"])],
				"Transport",
				"Active Transport",
				"Rising",
				"High")
	]

 				 
export { AdaptationFinder, the_trends }
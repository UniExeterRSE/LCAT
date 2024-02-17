// Development before 2024 Copyright (C) Then Try This and University of Exeter
// Development from 2024 Copyright (C) University of Exeter

//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the Common Good Public License Beta 1.0 as
// published at http://www.cgpl.org
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// Common Good Public License Beta 1.0 for more details.

import React, { useEffect, useState } from "react";
import LoadingOverlay from "react-loading-overlay";
import StaticAdaptation from "./StaticAdaptation";
import { pathways } from "../ClimateImpactSummaryData";
import { adaptationBodyKeys, CCCAdaptationThemes, IPCCCategories } from "./AdaptationCategories";

import adaptationData from "../../kumu/parsed/adaptation_data.json";

function StaticAdaptations(props) {
    const [selectedBody, setSelectedBody] = useState("CCC");
    const [filterState, setFilterState] = useState("No filter applied");

    // Get the correct key based on the selectedBody
    const selectedKey = adaptationBodyKeys[selectedBody];
    const adaptationCategories = selectedBody === "CCC" ? CCCAdaptationThemes : IPCCCategories;

    // Reset filterState if selectedBody changes
    useEffect(() => {
        setFilterState("No filter applied");
    }, [selectedBody]);

    // Filter adaptation list based on selectedBody (i.e. CCC or IPCC) and filterState
    const filteredAdaptations = adaptationData.filter((adaptation) => {
        const hazardName = props.selectedHazardName.toLowerCase();
        const layers = adaptation.attributes.layer.map((layer) => layer.toLowerCase());
        const bodyData = adaptation.attributes[selectedKey];

        if (filterState === "No filter applied") {
            return layers.some((layer) => layer.includes(hazardName + " in full"));
        } else {
            return layers.some((layer) => layer.includes(hazardName + " in full")) && bodyData.includes(filterState);
        }
    });

    if (!adaptationData) {
        return <div>Loading...</div>;
    }

    return (
        <LoadingOverlay active={props.loading} spinner text={"Loading adaptations"}>
            <h1>Adaptations</h1>
            <p>
                You are viewing {" "}
                <strong className="text-emphasis">{filteredAdaptations.length} climate adaptations </strong> for&nbsp;
                <select
                    value={props.selectedHazardName}
                    onChange={(e) => {
                        props.hazardCallback(e.target.value);
                    }}
                >
                    {pathways.map((pathway) => (
                        <option value={pathway.name} key={pathway.id}>
                            {pathway.name}
                        </option>
                    ))}
                </select>
            </p>
            <p>
                These adaptations can be filtered by the{"  "}
                <select
                    value={selectedBody}
                    onChange={(e) => {
                        setSelectedBody(e.target.value);
                    }}
                >
                    <option value="CCC">Climate Change Committee</option>
                    <option value="IPCC">Intergovernmental Panel on Climate Change</option>
                </select>
                {" adaptation "}
                {selectedBody === "CCC" ? "themes: " : "activity types: "}
                <select
                    value={filterState}
                    onChange={(e) => {
                        setFilterState(e.target.value);
                    }}
                >
                    <option value="No filter applied">No filter applied</option>
                    {adaptationCategories.map((category, index) => (
                        <option value={category} key={index}>
                            {category}
                        </option>
                    ))}
                </select>
            </p>

            <div>
                {filteredAdaptations.length ? (
                    filteredAdaptations.map((adaptation) => {
                        return <StaticAdaptation key={adaptation._id} adaptation={adaptation.attributes} />;
                    })
                ) : (
                    <h3>No adaptations found</h3>
                )}
            </div>
            <p className="note">
                Data source: The adaptation data is based on published scientific literature and reports. You can see
                the references used by expanding each adaptation.
            </p>
        </LoadingOverlay>
    );
}

export default StaticAdaptations;


// -*- mode: rjsx;  -*-
// Copyright (C) 2021 Then Try This
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

// move around the network tagging nodes to indicate their current state,
// starting with a climate prediction (and other variables eventually)

class NetworkState {
    constructor(value) {
        this.validStates = ["deactivated",
                            "uncertain",
                            "increase",
                            "decrease",
                            "nochange",
                            "unknown"];
        this.uncertaintyCause=false;
        this.set(value);
    }

    set(value) {
        if (this.validStates.includes(value)) {
            this.value=value;
        } else {
            console.log("invalid state setting: "+value);
        }
    }

    apply(edge) {
        if (this.value=="unknown") {
            /*if (edge.type=="-") {
                this.set("decrease");
                return;
            }
            if (edge.type=="+") {
                this.set("increase");
                return;
            }*/
            this.set("unknown");
            return;
        } else {

            if (edge.type=="-") {
                if (this.value==="increase") {
                    this.value="decrease";
                } else {       
                    if (this.value==="decrease") {
                        this.value="increase";
                    }
                }
                // no change if disabled, uncertain etc                
            }

            if (edge.type!="+" && edge.type!="-") {
                console.log(edge.type);
            }
            
        }
    }

    isOppositeTo = (other) => (
        (this.value==="increase" && other.value==="decrease") ||
        (this.value==="decrease" && other.value==="increase")
    )

    isDifferentTo = (other) => (
        (this.value!=other.value)
    )
    
    composite = (other) => {
        if (this.isOppositeTo(other)) return "uncertain";
        if (this.value===other.value) return this.value;
        if (this.value==="uncertain" || other.value==="uncertain") return "uncertain";
        if (this.value==="unknown") return other.value;
        if (other.value==="unknown") return this.value;
        if (this.value==="deactivated") return other.value;
        if (other.value==="deactivated") return this.value;
        return this.value;
    }
    
    asText() {
        if (this.uncertaintyCause && this.value==="uncertain") {
            return "UNCERTAINTY CAUSE";
        }        
        if (this.value==="deactivated") return "Deactivated";
        if (this.value==="uncertain") return "Uncertain";
        if (this.value==="increase") return "Increases";
        if (this.value==="decrease") return "Decreases";
        if (this.value==="unknown") return "Unknown";
        console.log(this.value);
        return "Error";
    }
}

export { NetworkState }

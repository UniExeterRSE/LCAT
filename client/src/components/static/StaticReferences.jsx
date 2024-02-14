// Copyright (C) 2022 Then Try This
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the Common Good Public License Beta 1.0 as
// published at http://www.cgpl.org
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// Common Good Public License Beta 1.0 for more details.

import React, { useState } from "react";

import adaptationRefs from "../../kumu/parsed/adaptation_references.json";
import "./StaticReferences.css";

// function baseURL(url) {
//     let domain = new URL(url);
//     return domain.hostname;
// }

function ArticleReference(props) {
    return (
        <ul className="reference-container">
            <li>
                <a href={props.a.URL} className="reference-title" target="_blank">
                    {props.a.title}
                </a>{" "}
                ({props.a.Reference_Type})
            </li>
            <li>
                <b>Authors: </b>
                {props.a.authors}
            </li>
            <li>
                <b>Journal/Issue: </b>
                {props.a.journal} {props.a.issue} {props.a.date}
            </li>
        </ul>
    );
}

function WebPageReference(props) {
    return (
        <ul className="reference-container">
            <li>
                <a href={props.a.URL} className="reference-title" target="_blank">
                    {props.a.title}
                </a>{" "}
                ({props.a.Reference_Type})
            </li>
            <li>
                <b>Source: </b>
                {/* {baseURL(props.a.DOI)} */}
            </li>
        </ul>
    );
}

function ReportReference(props) {
    return (
        <ul className="reference-container">
            <li>
                <a href={props.a.URL} className="reference-title" target="_blank">
                    {props.a.title}
                </a>{" "}
                ({props.a.Reference_Type})
            </li>
            <li>
                <b>Source: </b>
                {/* {baseURL(props.a.DOI)} */}
            </li>
        </ul>
    );
}

function BookSectionReference(props) {
    return (
        <ul className="reference-container">
            <li>
                <a href={props.a.URL} className="reference-title" target="_blank">
                    {props.a.title}
                </a>{" "}
                ({props.a.Reference_Type})
            </li>
        </ul>
    );
}

function StaticReferences(props) {
    const filteredRefs = adaptationRefs.filter(ref => props.referenceIds.map(str => parseInt(str)).includes(ref.Reference_ID));

    if (filteredRefs.length > 0) {
        return (
            <div>
                <b>References:</b>
                {filteredRefs.map((r) => {
                    if (r.Reference_Type === "Journal Article") return <ArticleReference key={r.Reference_ID} a={r} />;
                    if (r.Reference_Type === "Journal article ") return <ArticleReference key={r.Reference_ID} a={r} />;
                    if (r.Reference_Type === "Conference Proceedings") return <ArticleReference key={r.Reference_ID} a={r} />;
                    if (r.Reference_Type === "Book") return <ArticleReference key={r.Reference_ID} a={r} />;
                    if (r.Reference_Type === "Web Page") return <WebPageReference key={r.Reference_ID} a={r} />;
                    if (r.Reference_Type === "Web page") return <WebPageReference key={r.Reference_ID} a={r} />;
                    if (r.Reference_Type === "Report") return <ReportReference key={r.Reference_ID} a={r} />;
                    if (r.Reference_Type === "Book Section") return <BookSectionReference key={r.Reference_ID} a={r} />;
                    return <p>{r.Reference_Type}: not understood</p>;
                })}
            </div>
        );
    } else {
        return (<div>
            <p>no refs found </p>
            </div>);
    }
}

export default StaticReferences;

import React from "react";

export default function Synonyms(props) {
    if (props.synonyms) {
    return (
        <div>
        <ul className="Synonyms">
            {props.synonyms.map(function (synonyms,index){
        <li key={index}>
            {synonyms}
        </li>
            })}
        </ul>
        </div>
    );
    } else {
        return null;
    }
}


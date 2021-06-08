import React from "react";
import Phonetic from "./Phonetic";
import Meaning from "./Meaning";
import "./Results.css"


export default function Results(props) {
  if (props.content) {
    return (
        <section>
      <div className="Results">
        <h2>{props.content.word}</h2>
        {props.content.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <Phonetic phonetic={phonetic} />
            </div>
          );
        })}
        {props.content.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
      </section>
    );
  } else {
    return null;
  }
}
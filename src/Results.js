import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
export default function Results (props){
console.log (props.content)
if (props.content) {
    return (
        <div>
    <h2> {props.content.word}</h2>
    {props.content.phonetics.map(function (phonetic, index){
return(
    <div key={index}>
        <Phonetic phonetic={phonetic} />
        </div>
)


    })}
    {props.content.meanings.map(function(meaning,index){
     return (
        <div key={index}>
        <Meaning meaning={meaning} />
        </div>
        )


    } )}
        </div>
    )
} else {
    return null;
}

}
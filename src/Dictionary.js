import React,{useState} from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css"
export default function Dictionary() {
let [Keyword, setKeyword] = useState("");
let [Content, setContent] = useState(null);
function handleSubmit(event){
    event.preventDefault();
   
}


function updateChange (event){
setKeyword(event.target.value);

function handleResponse(response){
    setContent(response.data[0]);}
    
//https://dictionaryapi.dev/
let url=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${Keyword}`;
axios.get(url).then(handleResponse);
}
    return (
    <div className="Dictionary">
        <section>
    <form onSubmit={handleSubmit}> 
    <input type= "Search" onChange={updateChange}/>
    </form>
    </section>
    <div className="instruction">
    <p className= "instructions"><strong>👉 Enter word and press #, e.g "sunset#"</strong>
     </p>
    </div>
    <section>
    <Results content={Content} />
    </section>
   
    </div>
);

    }
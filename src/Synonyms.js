import React from "react";

export default function Synonyms(props) {
    if (props.synonyms) {
    return (
     
     
     <div className="Synonyms">
  
      <div>
            {props.synonyms.map(function (synonym,index){
                
        <div key={index}>
            {synonym}
        </div>
        
            })}
            </div>
       </div>
    
    );
    } else {
        
            return(null);
    
       
    }
}


import React from 'react';
import "./Weather.css";
import axios from 'axios';

export default function Weather(){
return (
    <div> 
  <h1>
  <i className="fas fa-cloud">⛈️</i>
   20°C/F
   </h1>
  <span>WindSpeed:10km/h:</span>
  <span>Humidity: 3%</span>
  
  <p>
<span>Date:Tuesday 10 May 2021 </span>
<span> Time: 21:00 hrs</span>
  </p>
  <form>
      <input type="text" placeholder= "Enter a City"/>
      <input type="Submit"  value ="Search"/>
  </form>
  <br/>
  <footer>
      This app is developed by Radika Kumar
  </footer>


 </div>
);


}
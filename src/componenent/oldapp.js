import logo from './logo.svg';
import './App.css';
import React from "react";
import {Component} from "react";
//import affiche from "./componenent/affiche.js";

const person = [
{
fullName:'Ness',
bio:'My Bio',
profession: 'SEA',
imgSrc:'https://cdn.pixabay.com/photo/2016/06/25/13/00/purse-1478852_960_720.jpg',
}]

let time=1000
//setInterval(affiche, time); <button onClick={affiche}>Show The Person</button>
class App extends React.Component {
  render() {

    return (
    
      <div className="App">
             
        
        <input type ='number' name="time">Set the time</input>
      </div>


    );
  }
}
 
export default App;



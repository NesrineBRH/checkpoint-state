import React from "react"
import {Component} from "react";
import {useState} from "react";
const [show,setShow]=useState(true)
class affichage extends React.Component {
    
    constructor (props)
    {
        super(props)
this.person ={
fullName:'Ness',
bio:'My Bio',
profession: 'SEA',
imgSrc:'https://cdn.pixabay.com/photo/2016/06/25/13/00/purse-1478852_960_720.jpg',
       }
    }

        
    render() {
          
      return (
      
        <div className="App">
            {show? this.person:null}
             <button onClick={()=>setShow(true)}>Show The Person</button>  
             <button onClick={()=>setShow(false)}>Hide The Person</button> 
        </div> 
  
      );
    }
  }
  export default affichage;
   
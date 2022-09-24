import React from "react"
import style from "./style.css"
class App extends React.Component {    
state=    {
person :{
fullName:'Nesrine BEN RHAIEM',
bio:'It s better to be a lonely lion than a popular sheep',
profession: 'SEA Junior',
imgSrc:'https://cdn.pixabay.com/photo/2016/06/25/13/00/purse-1478852_960_720.jpg',
       },
  isShow:false,
  i:100000,  
    };
    handleClick=() => {this.setState({ isShow: !this.state.isShow})};
    change=e => {
      console.log(e.target.value)
      this.setState({i:e.target.value})          
      };

    componentDidMount() {
      setInterval(() => {
        this.handleClick();
      }, this.state.i);
    }
    render() {
         
      return (        
        <div> 
             
          <div className="bouton">
          <button onClick={this.handleClick}>{" "}
              {this.state.isShow ? "hide profile" : "show profile"}{" "}</button><br/>   
              </div>  
              <div className="time">
                <label>Time Delay in milliseconds</label><br/>
              <input id ="laps" type="number" name="time"  value={this.state.i}onChange={this.change}></input>
                </div>   
                <div className="Myprofile">
          {this.state.isShow ? <h1>{this.state.person.fullName}</h1> :null }
          {this.state.isShow ? <h2>{this.state.person.profession}</h2> :null }
          {this.state.isShow ? <p>{this.state.person.bio}</p> :null }
          {this.state.isShow ? <img src={this.state.person.imgSrc}/> :null }
            
          </div>                                    
        </div>   

      );
    }
  }
  export default App;
   
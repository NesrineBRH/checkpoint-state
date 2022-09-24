import React from "react"
class App extends React.Component {    
state=    {
person :{
fullName:'Ness',
bio:'My Bio',
profession: 'SEA',
imgSrc:'https://cdn.pixabay.com/photo/2016/06/25/13/00/purse-1478852_960_720.jpg',
       },
  isShow:false,
  i:0,       
    };
    handleClick=() => {this.setState({ isShow: !this.state.isShow})};
    render() {
         
      return (
        <div> 
          {this.state.isShow ? <h1>insert person</h1> :null }  
            <button onClick={this.handleClick}>{" "}
              {this.state.isShow ? "hide profile" : "show profile"}{" "}</button>     
                                                  
        </div>   

      );
    }
  }
  export default App;
   
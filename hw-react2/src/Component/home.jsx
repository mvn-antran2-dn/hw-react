import React, {Component} from "react";
import Timer from "./Timer";

class Home extends Component{
  render(){
    return(
      <>
      <h2 className="Home">Home</h2>
      <ul className="CountdownList">
          <Timer />
          <Timer />
          <Timer />
      </ul>
      </>
    )
  };
}

export default Home;

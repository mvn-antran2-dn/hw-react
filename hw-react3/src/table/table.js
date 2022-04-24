import React, { Component } from "react";
import Item from "./item";

class TableSubmit extends Component{
render(){
   const { arrUser, handleOnDelete } = this.props;
  return(<>
    <table className="tb-submit">
    <thead>
      <tr>
        <th>No</th>
        <th>ID</th>
        <th>Email</th>
        <th>Country</th>
        <th>Gender</th>
        <th>Info</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <Item  arrUser={arrUser} 
            DeleteItem={(item) => handleOnDelete(item)}/>
    </tbody>
    </table></>
    );
  }
}

export default TableSubmit;

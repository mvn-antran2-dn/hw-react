import React from "react";
import Item from "./item";

const TableSubmit = (props) =>{
  const { arrUser, handleOnDeleteBtn } = props;
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
      <Item arrUser={arrUser} 
            deleteItem={(item) => handleOnDeleteBtn(item)}/>
    </tbody>
    </table></>
  );
}

export default TableSubmit;

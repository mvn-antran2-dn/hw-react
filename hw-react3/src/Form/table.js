import React, { Component } from "react";

class TableSubmit extends Component{
render(){
   const { arrUser, handleDeleteUser } = this.props;
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
          {arrUser.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.id}</td>
              <td>{item.email}</td>
              <td>{item.country}</td>
              <td>{item.gender == 0 ? `Male` : `FeMale`}</td>
              <td>{item.info}</td>
              <td>
                <button className="btn-delete" onClick={() => { handleDeleteUser(item) }}> <i className="fa-solid fa-trash" /></button>
              </td>
            </tr>
          ))}
        </tbody>
    </table></>
    );
  }
}

export default TableSubmit;

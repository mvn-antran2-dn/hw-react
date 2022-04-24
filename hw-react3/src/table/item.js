import React, { Component } from "react";

class Item extends Component{
render(){
   const { arrUser, DeleteItem } = this.props;
  return(<>
          {arrUser.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.id}</td>
              <td>{item.email}</td>
              <td>{item.country}</td>
              <td>{item.gender == 0 ? `Male` : `FeMale`}</td>
              <td>{item.info}</td>
              <td>
                <button className="btn-delete" onClick={() => { DeleteItem(item) }}> <i className="fa-solid fa-trash" /></button>
              </td>
            </tr>
          ))}
          </>
    );
  }
}

export default Item;

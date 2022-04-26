import React from "react";

const Item = (props) => {
  const { arrUser, deleteItem } = props;
  // console.log(props);
  return(
  <>
    {arrUser.map((item, index) => (
      <tr key={item.id}>
        <td>{index + 1}</td>
        <td>{item.id}</td>
        <td>{item.email}</td>
        <td>{item.country}</td>
        <td>{item.gender == 0 ? `Male` : `FeMale`}</td>
        <td>{item.info}</td>
        <td>
          <button className="btn-delete" onClick={() => deleteItem(item)}> <i className="fa-solid fa-trash" /></button>
        </td>
      </tr>
    ))}
    </>
  );
}

export default Item;

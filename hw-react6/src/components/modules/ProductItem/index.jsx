import React from 'react'
import { useHistory } from "react-router-dom";

export default function ProductDetail({product}) {
  let history = useHistory();
  return (
   <>
   <div className="product-item">
      <h2 className="product-catalog">{product.category}</h2>
      <a href="">
        <img className="product-img" src={product.image} alt="" />
      </a>
      <h3 className="product-title">
        {product.title}
      </h3>
      <div className="product-bottom">
      <span>$ {product.price}</span>
      <button onClick={()=> history.push(`/product/${product.id}`)} className="btn btn-show">Show more</button>
      </div>
   </div>
   </>
  )
}

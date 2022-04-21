import React, { Component } from 'react';

class ProductItem extends Component{
  render(){
    return(<>
      <li className = "product-item col-3">
        <div className = "product-img">
            <a href = {this.props.href} className = "product-img-default">
              <img 
                src = {this.props.src}
                alt = {this.props.name}
              />
            </a>
            <div className = "product-img-badge d-flex ">
                <span className = "product-sale">{this.props.span1}</span>
                <span className = "product-new">{this.props.span2}</span>
            </div>
            <div className = "img-total-action d-flex flex-jc-center">
                <button className = "btn btn-add-to-wish"><i className="fa-solid fa-heart" aria-hidden = "true"></i></button>
                <button className = "btn btn-add-to-cart"><i className="fa-solid fa-cart-shopping" aria-hidden = "true"></i></button>
                <button className = "btn btn-add-to-compare"><i className="fa-solid fa-shuffle" aria-hidden = "true"></i></button>
                <button className = "btn btn-quick-view"><i className="fa-solid fa-eye" aria-hidden = "true"></i></button>
            </div>
        </div>
        <div className="product-info">
            <a href = "." className = "product-name">{this.props.name}</a>
            <p className = "product-price">{this.props.prime} - <span>€7.1</span></p> 
        </div>
    </li>
    </>);
  }
}

export default ProductItem;

import React, { Component } from 'react';
import ProductItem from "./ProductimageComponent";

class ProductList extends Component{
	render(){
		return(<>
			<section className = "section-product">
					<div className = "container">
							<ul className = "product-tab-list row d-flex flex-jc-center">
									<li className="product-tab-item  ">
											<a href=".">New Arrivals</a>
									</li>
									<li className="product-tab-item active ">
											<a href=".">Best Sellers</a>
									</li>
									<li className="product-tab-item  ">
											<a href=".">Sale Items</a>
									</li>
							</ul>
							<ul className = "product-list row x">
								<ProductItem 
									href = "https://flone.reactdemo.hasthemes.com/product/57"
									src = "https://flone.reactdemo.hasthemes.com/assets/img/product/books/1.jpg"
									span1 = "-10%"
									span2 = "New"
									name = "Lorem ipsum book one"
									prime = "€4.95"
								/>
								<ProductItem 
									href = "https://flone.reactdemo.hasthemes.com/product/57"
									src = "https://flone.reactdemo.hasthemes.com/assets/img/product/books/2.jpg"
									span1 = "-20%"
									span2 = "New"
									name = "Lorem ipsum book two"
									prime = "€4.95"
								/>
								<ProductItem 
									href = "https://flone.reactdemo.hasthemes.com/product/57"
									src = "https://flone.reactdemo.hasthemes.com/assets/img/product/books/3.jpg"
									span1 = "-30%"
									span2 = "New"
									name = "Lorem ipsum book tree"
									prime = "€4.95"
								/>
								<ProductItem 
									href = "https://flone.reactdemo.hasthemes.com/product/57"
									src = "https://flone.reactdemo.hasthemes.com/assets/img/product/books/4.jpg"
									span1 = "-40%"
									span2 = "New"
									name = "Lorem ipsum book four"
									prime = "€4.95"
								/>
								<ProductItem 
									href = "https://flone.reactdemo.hasthemes.com/product/57"
									src = "https://flone.reactdemo.hasthemes.com/assets/img/product/books/5.jpg"
									span1 = "-50%"
									span2 = "New"
									name = "Lorem ipsum book five"
									prime = "€4.95"
								/>
								<ProductItem 
									href = "https://flone.reactdemo.hasthemes.com/product/57"
									src = "https://flone.reactdemo.hasthemes.com/assets/img/product/books/6.jpg"
									span1 = "-60%"
									span2 = "New"
									name = "Lorem ipsum book six"
									prime = "€4.95"
								/>
								<ProductItem 
									href = "https://flone.reactdemo.hasthemes.com/product/57"
									src = "https://flone.reactdemo.hasthemes.com/assets/img/product/books/7.jpg"
									span1 = "-70%"
									span2 = "New"
									name = "Lorem ipsum book seven"
									prime = "€4.95"
								/>
								<ProductItem 
									href = "https://flone.reactdemo.hasthemes.com/product/57"
									src = "https://flone.reactdemo.hasthemes.com/assets/img/product/books/8.jpg"
									span1 = "-80%"
									span2 = "New"
									name = "Lorem ipsum book eight"
									prime = "€4.95"
								/>                  
							</ul>
							<div className = "product-view-more">
									<a href = "https://flone.reactdemo.hasthemes.com/shop-grid-standard">VIEW MORE PRODUCTS</a>
							</div>
					</div>
			</section>
		</>
	);
	}
}

export default ProductList;

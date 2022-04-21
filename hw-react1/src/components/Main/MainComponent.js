import React, { Component } from 'react';
import SlideShow from "./SliderComponent";
import BannerFirst from "./BannerFirstComponent";
import BannerText from "./BannerTextComponent";
import ProductList from "./ProductComponent";
import BannerSecond from "./BannerSecondComponent";
import Deal from "./DealComponent";
import Blog from "./BlogComponent";

class Main extends Component{
  render(){
    return (<>
      <main className = "page-main">
          <SlideShow />
          <BannerFirst />
          <ProductList />
          <BannerSecond />
          <Deal />
          <BannerText />
          <Blog />
      </main>
      </>
    )
  } 
}

export default Main;

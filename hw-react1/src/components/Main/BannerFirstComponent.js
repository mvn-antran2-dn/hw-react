import React, { Component } from 'react';

class BannerFirst extends Component{
  render(){
    return(<>
      <section className  =  "section-banner banner-img-first d-flex flex-jc-center">
          <div className  =  "container">
              <ul className  =  "banner-first-list row d-flex ">
                  <li className  =  "banner-item banner-first col-5">
                      <a href  =  "https://flone.reactdemo.hasthemes.com/shop-grid-standard" className  =  "banner-img"><img src = "https://flone.reactdemo.hasthemes.com/assets/img/banner/banner34.jpg" alt = "" /></a>
                  </li>
                  <li className  =  "banner-item banner-first col-5">
                      <a href  =  "https://flone.reactdemo.hasthemes.com/shop-grid-standard" className  =  "banner-img"><img src = "https://flone.reactdemo.hasthemes.com/assets/img/banner/banner35.jpg" alt = "" /></a>
                  </li>
              </ul>
          </div>
      </section>
      </>
    );
  }
}

export default BannerFirst;

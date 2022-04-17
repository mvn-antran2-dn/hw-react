import React, { Component } from 'react';

class BannerSecond extends Component{
  render(){
    return(<>
      <section className = "section-banner banner-img-second">
        <div className = "container">
            <ul className = "banner-list row d-flex">
                <li className = "banner-item banner-second col-4">
                    <div className = "banner-img">
                        <a href = "https://flone.reactdemo.hasthemes.com/shop-grid-standard"><img src = "	https://flone.reactdemo.hasthemes.com/assets/img/banner/banner-38.png" alt="" /></a>
                    </div>
                    <div className = "banner-info">
                        <p className = "banner-name">Historical</p>
                        <p className = "banner-price">Starting at <span>$99.00</span></p>
                    </div>
                    <div className = "banner-next-shop">
                        <a href = "https://flone.reactdemo.hasthemes.com/shop-grid-standard"><i className = "fa-solid fa-circle-arrow-right"></i></a>
                    </div>
                </li>
                <li className = "banner-item banner-second col-4">
                    <div className = "banner-img">
                        <a href = "https://flone.reactdemo.hasthemes.com/shop-grid-standard"><img src = "https://flone.reactdemo.hasthemes.com/assets/img/banner/banner-39.png" alt="" /></a>
                    </div>
                    <div className = "banner-info">
                        <p className = "banner-name">Magazine</p>
                        <p className = "banner-price">Starting at <span>$79.00</span></p>
                    </div>
                    <div className = "banner-next-shop">
                        <a href = "https://flone.reactdemo.hasthemes.com/shop-grid-standard"><i className = "fa-solid fa-circle-arrow-right"></i></a>
                    </div>
                </li>
                <li className = "banner-item banner-second col-4">
                    <div className = "banner-img">
                        <a href = "https://flone.reactdemo.hasthemes.com/shop-grid-standard"><img src = "https://flone.reactdemo.hasthemes.com/assets/img/banner/banner-36.jpg" alt="" /></a>
                    </div>
                    <div className = "banner-info">
                        <p className = "banner-name">Bestseller</p>
                        <p className = "banner-price">Starting at <span>$29.00</span></p>
                    </div>
                    <div className = "banner-next-shop">
                        <a href = "https://flone.reactdemo.hasthemes.com/shop-grid-standard"><i className = "fa-solid fa-circle-arrow-right"></i></a>
                    </div>
                </li>
            </ul>
        </div>
      </section>
    </>
  );
  }
}

export default BannerSecond;

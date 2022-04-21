import React, { Component } from 'react';

class BannerText extends Component{
  render(){
    return(<>
      <section className = "section-banner-text">
          <div className = "container">
              <ul className = "banner-text-list row d-flex flex-jc-spbw">
                  <li className = "banner-text-item col-4 left">
                      <img src = "https://flone.reactdemo.hasthemes.com/assets/img/icon-img/support-8.png" alt = "" />
                      <p className = "banner-text-info">FREE SHIPPING ON ALL ORDER</p>
                  </li>
                  <li className = "banner-text-item col-4 mid">
                      <img src = "https://flone.reactdemo.hasthemes.com/assets/img/icon-img/support-9.png" alt="" />
                      <p className="banner-text-info">BACK GUARANTEE UNDER 5 DAYS</p>
                  </li>
                  <li className = "banner-text-item col-4 right">
                      <img src = "https://flone.reactdemo.hasthemes.com/assets/img/icon-img/support-10.png" alt = "" />
                      <p className = "banner-text-info">ON EVERY ORDER OVER $150</p>
                  </li>
              </ul>
          </div>
      </section>
    </>
  );
  }
}

export default BannerText;

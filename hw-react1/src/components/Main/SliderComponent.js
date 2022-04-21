import React, { Component } from 'react';

class SlideShow extends Component {
  render(){
    return <>
     <section className = "section-slideshow">
            <ul className = "slide-list">
                <li className = "slide-item slide-1">
                    <img src = "https://flone.reactdemo.hasthemes.com/assets/img/slider/slider-25.jpg" alt = "" />
                    <div className = "slide-content">
                        <h4 className = "slide-content-sale">2020 Latest Collection</h4>
                        <h2 className = "slide-content-desc"> -20% Offer All <br /> New Book.</h2>
                        <a href = "https://flone.reactdemo.hasthemes.com/shop-grid-standard" className = "btn-shop-now">SHOP NOW</a>
                    </div>
                </li>
            </ul>
            <div className="btn-slide">
                <button className = "btn btn-prev"><i className = "fa-solid fa-angle-left" aria-hidden = "true"></i></button>
                <button className = "btn btn-next"><i className = "fa-solid fa-angle-right" aria-hidden = "true"></i></button>
            </div>
            <ul className= "slide-pagination">
                <li></li>
                <li></li>
            </ul>
        </section>
    </>;
  }
}

export default SlideShow;

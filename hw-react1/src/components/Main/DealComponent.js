import React, { Component } from 'react';

class Deal extends Component{
    render(){
      return(<>
        <section className = "section-deal">
            <div className = "container d-flex ">
                <div className = "deal-img">
                    <a href = "https://flone.reactdemo.hasthemes.com/shop-grid-standard"><img src = "https://flone.reactdemo.hasthemes.com/assets/img/banner/deal-8.png" alt="" /></a>
                </div>
                <div className = "deal-info ">
                    <h2>Deal of the day</h2>
                    <div className = "deal-time d-flex flex-jc-center">
                        <span className = "days">0 <p>Days</p></span>
                        <span className = "hours">0 <p>Hours</p></span>
                        <span className = "minutes">0 <p>Minutes</p></span>
                        <span className = "second">0 <p>Second</p></span>
                    </div>
                    <a href = "https://flone.reactdemo.hasthemes.com/shop-grid-standard" className = "btn-shop-now">SHOP NOW</a>
                </div>
            </div>
        </section>
      </>
    );
    }
}

export default Deal;

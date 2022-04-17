import React, { Component } from 'react';

class Footer extends Component{
  render(){
    return (<>
      <footer className="page-footer ">
            <div className="container ">
                <div className="row d-flex flex-jc-spar footer">
                    <div className="footer-left  ">
                        <a href=" https://flone.reactdemo.hasthemes.com/" className="footer-logo-img">
                            <img src="	https://flone.reactdemo.hasthemes.com/assets/img/logo/logo.png" alt=" " />
                        </a>
                        <p>© 2022 <a href=". ">Flone</a> </p>
                        <p>All Rights Reserved</p>
                    </div>
                    <div className="footer-middle-col">
                        <h3 className="footer-middle-title">ABOUT US</h3>
                        <ul className="footer-middle-list">
                            <li className="footer-col-item">
                                <a href=" https://flone.reactdemo.hasthemes.com/about">About us</a>
                            </li>
                            <li className="footer-col-item">
                                <a href=" https://flone.reactdemo.hasthemes.com/home-book-store-two#/">Store location</a>
                            </li>
                            <li className="footer-col-item">
                                <a href=" https://flone.reactdemo.hasthemes.com/contact">Contact</a>
                            </li>
                            <li className="footer-col-item">
                                <a href=" ">Orders tracking</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-middle-col">
                        <h3 className="footer-middle-title">USEFUL LINKS</h3>
                        <ul className="footer-middle-list">
                            <li className="footer-col-item">
                                <a href=" .">Returns</a>
                            </li>
                            <li className="footer-col-item">
                                <a href=".">Support Policy</a>
                            </li>
                            <li className="footer-col-item">
                                <a href=" .">Size guide</a>
                            </li>
                            <li className="footer-col-item">
                                <a href=". ">FAQs</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-middle-col">
                        <h3 className="footer-middle-title">FOLLOW US</h3>
                        <ul className="footer-middle-list">
                            <li className="footer-col-item">
                                <a href=" https://www.facebook.com/">Facebook</a>
                            </li>
                            <li className="footer-col-item">
                                <a href=" https://twitter.com/">Twitter</a>
                            </li>
                            <li className="footer-col-item">
                                <a href=" https://www.instagram.com/">Instagram</a>
                            </li>
                            <li className="footer-col-item">
                                <a href=" https://www.youtube.com/">Youtube</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-right">
                        <form className="footer-right-form">
                            <h3 className="footer-right-title">SUBSCRIBE</h3>
                            <div className="footer-right-content">
                                <p>
                                    Get E-mail updates about our latest shop and special offers.
                                </p>
                                <input className="footer-right-text" placeholder="Enter your email address..." type="text" />
                                <br />
                                <button className="btn-sub" type="submit">SUBSCRIBE</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    </>)
  }
}

 export default Footer;

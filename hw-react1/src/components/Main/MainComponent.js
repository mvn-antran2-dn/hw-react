function Main(){
  return (
    <>
    <main className="page-main">
        <section className="section-slideshow">
            <ul className="slide-list">
                <li className="slide-item slide-1">
                    <img src="https://flone.reactdemo.hasthemes.com/assets/img/slider/slider-25.jpg" alt="" />
                    <div className="slide-content">
                        <h4 className="slide-content-sale">2020 Latest Collection</h4>
                        <h2 className="slide-content-desc"> -20% Offer All <br /> New Book.</h2>
                        <a href="https://flone.reactdemo.hasthemes.com/shop-grid-standard" className="btn-shop-now">SHOP NOW</a>
                    </div>
                </li>
            </ul>
            <div className="btn-slide">
                <button className="btn btn-prev"><i className="fa-solid fa-angle-left" aria-hidden="true"></i></button>
                <button className="btn btn-next"><i className="fa-solid fa-angle-right" aria-hidden="true"></i></button>
            </div>
            <ul className="slide-pagination">
                <li></li>
                <li></li>
            </ul>
        </section>
        <section className="section-banner banner-img-first d-flex flex-jc-center">
            <div className="container">
                <ul className="banner-first-list row d-flex ">
                    <li className="banner-item banner-img col-5">
                        <a href="https://flone.reactdemo.hasthemes.com/shop-grid-standard" className="banner-img"><img src="https://flone.reactdemo.hasthemes.com/assets/img/banner/banner34.jpg" alt="" /></a>
                    </li>
                    <li className="banner-item banner-img col-5">
                        <a href="https://flone.reactdemo.hasthemes.com/shop-grid-standard" className="banner-img"><img src="https://flone.reactdemo.hasthemes.com/assets/img/banner/banner35.jpg" alt="" /></a>
                    </li>
                </ul>
            </div>
        </section>
        <section className="section-product">
            <div className="container">
                <ul className="product-tab-list row d-flex flex-jc-center">
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
                <ul className="product-list row x">
                    <li className="product-item col-3">
                        <div className="product-img">
                            <a href="https://flone.reactdemo.hasthemes.com/product/55" className="product-img-default">
                                <img src="https://flone.reactdemo.hasthemes.com/assets/img/product/books/4.jpg" alt="" />
                            </a>
                            <div className="product-img-badge d-flex ">
                                <span className="product-sale">-40%</span>
                                <span className="product-new">New</span>
                            </div>
                            <div className="img-total-action d-flex flex-jc-center">
                                <button className="btn btn-add-to-wish"><i className="fa-solid fa-heart" aria-hidden="true"></i></button>
                                <button className="btn btn-add-to-cart"><i className="fa-solid fa-cart-shopping" aria-hidden="true"></i></button>
                                <button className="btn btn-add-to-compare"><i className="fa-solid fa-shuffle" aria-hidden="true"></i></button>
                                <button className="btn btn-quick-view"><i className="fa-solid fa-eye" aria-hidden="true"></i></button>
                            </div>
                        </div>
                        <div className="product-info">
                            <a href="." className="product-name">Lorem ipsum book four</a>
                            <p className="product-price">€4.26 - <span>€7.1</span></p>
                        </div>
                    </li>
                    <li className="product-item col-3">
                        <div className="product-img">
                            <a href="https://flone.reactdemo.hasthemes.com/product/57" className="product-img-default">
                                <img src="	https://flone.reactdemo.hasthemes.com/assets/img/product/books/6.jpg" alt="" />
                            </a>
                            <div className="product-img-badge d-flex">
                                <span className="product-sale">-10%</span>
                                <span className="product-new">New</span>
                            </div>
                            <div className="img-total-action d-flex flex-jc-center">
                                <button className="btn btn-add-to-wish"><i className="fa-solid fa-heart" aria-hidden="true"></i></button>
                                <button className="btn btn-add-to-cart"><i className="fa-solid fa-cart-shopping" aria-hidden="true"></i></button>
                                <button className="btn btn-add-to-compare"><i className="fa-solid fa-shuffle" aria-hidden="true"></i></button>
                                <button className="btn btn-quick-view"><i className="fa-solid fa-eye" aria-hidden="true"></i></button>
                            </div>
                        </div>
                        <div className="product-info">
                            <a href="." className="product-name">Lorem ipsum book six</a>
                            <p className="product-price">€4.95 - <span>€5.5</span></p>
                        </div>
                    </li>
                    <li className="product-item col-3">
                        <div className="product-img">
                            <a href="https://flone.reactdemo.hasthemes.com/product/56" className="product-img-default">
                                <img src="https://flone.reactdemo.hasthemes.com/assets/img/product/books/8.jpg" alt="" />
                            </a>
                            <div className="product-img-badge d-flex">
                                <span className="product-sale">-30%</span>
                            </div>
                            <div className="img-total-action d-flex flex-jc-center">
                                <button className="btn btn-add-to-wish"><i className="fa-solid fa-heart" aria-hidden="true"></i></button>
                                <button className="btn btn-add-to-cart"><i className="fa-solid fa-cart-shopping" aria-hidden="true"></i></button>
                                <button className="btn btn-add-to-compare"><i className="fa-solid fa-shuffle" aria-hidden="true"></i></button>
                                <button className="btn btn-quick-view"><i className="fa-solid fa-eye" aria-hidden="true"></i></button>
                            </div>
                        </div>
                        <div className="product-info">
                            <a href="." className="product-name">Lorem ipsum book five</a>
                            <p className="product-price">€6.02 - <span>€8.6</span></p>
                        </div>
                    </li>
                    <li className="product-item col-3">
                        <div className="product-img">
                            <a href="https://flone.reactdemo.hasthemes.com/product/56" className="product-img-default">
                                <img src="https://flone.reactdemo.hasthemes.com/assets/img/product/books/5.jpg" alt="" />
                            </a>
                            <div className="product-img-badge d-flex">
                                <span className="product-sale">-15%</span>
                                <span className="product-new">New</span>
                            </div>
                            <div className="img-total-action d-flex flex-jc-center">
                                <button className="btn btn-add-to-wish"><i className="fa-solid fa-heart" aria-hidden="true"></i></button>
                                <button className="btn btn-add-to-cart"><i className="fa-solid fa-cart-shopping" aria-hidden="true"></i></button>
                                <button className="btn btn-add-to-compare"><i className="fa-solid fa-shuffle" aria-hidden="true"></i></button>
                                <button className="btn btn-quick-view"><i className="fa-solid fa-eye" aria-hidden="true"></i></button>
                            </div>
                        </div>
                        <div className="product-info">
                            <a href="." className="product-name">Lorem ipsum book eight</a>
                            <p className="product-price">€8.07 - <span>€8.5</span></p>
                        </div>
                    </li>
                    <li className="product-item col-3">
                        <div className="product-img">
                            <a href="https://flone.reactdemo.hasthemes.com/product/58" className="product-img-default">
                                <img src="https://flone.reactdemo.hasthemes.com/assets/img/product/books/3.jpg" alt="" />
                            </a>
                            <div className="product-img-badge d-flex">
                                <span className="product-sale">-20%</span>
                            </div>
                            <div className="img-total-action d-flex flex-jc-center">
                                <button className="btn btn-add-to-wish"><i className="fa-solid fa-heart" aria-hidden="true"></i></button>
                                <button className="btn btn-add-to-cart"><i className="fa-solid fa-cart-shopping" aria-hidden="true"></i></button>
                                <button className="btn btn-add-to-compare"><i className="fa-solid fa-shuffle" aria-hidden="true"></i></button>
                                <button className="btn btn-quick-view"><i className="fa-solid fa-eye" aria-hidden="true"></i></button>
                            </div>
                        </div>
                        <div className="product-info">
                            <a href="." className="product-name">Lorem ipsum book seven</a>
                            <p className="product-price">€2.56 - <span>€3.2</span></p>
                        </div>
                    </li>
                    <li className="product-item col-3">
                        <div className="product-img">
                            <a href="https://flone.reactdemo.hasthemes.com/product/54" className="product-img-default">
                                <img src="https://flone.reactdemo.hasthemes.com/assets/img/product/books/1.jpg" alt="" />
                            </a>
                            <div className="product-img-badge d-flex">
                                <span className="product-sale">-20%</span>
                                <span className="product-new">New</span>
                            </div>
                            <div className="img-total-action d-flex flex-jc-center">
                                <button className="btn btn-add-to-wish"><i className="fa-solid fa-heart" aria-hidden="true"></i></button>
                                <button className="btn btn-add-to-cart"><i className="fa-solid fa-cart-shopping" aria-hidden="true"></i></button>
                                <button className="btn btn-add-to-compare"><i className="fa-solid fa-shuffle" aria-hidden="true"></i></button>
                                <button className="btn btn-quick-view"><i className="fa-solid fa-eye" aria-hidden="true"></i></button>
                            </div>
                        </div>
                        <div className="product-info">
                            <a href="." className="product-name">Lorem ipsum book three</a>
                            <p className="product-price">€5.28 - <span>€6.6</span></p>
                        </div>
                    </li>
                    <li className="product-item col-3">
                        <div className="product-img">
                            <a href="https://flone.reactdemo.hasthemes.com/product/52" className="product-img-default">
                                <img src="https://flone.reactdemo.hasthemes.com/assets/img/product/books/2.jpg" alt="" />
                            </a>
                            <div className="product-img-badge d-flex">
                                <span className="product-sale">-30%</span>
                                <span className="product-new">New</span>
                            </div>
                            <div className="img-total-action d-flex flex-jc-center">
                                <button className="btn btn-add-to-wish"><i className="fa-solid fa-heart" aria-hidden="true"></i></button>
                                <button className="btn btn-add-to-cart"><i className="fa-solid fa-cart-shopping" aria-hidden="true"></i></button>
                                <button className="btn btn-add-to-compare"><i className="fa-solid fa-shuffle" aria-hidden="true"></i></button>
                                <button className="btn btn-quick-view"><i className="fa-solid fa-eye" aria-hidden="true"></i></button>
                            </div>
                        </div>
                        <div className="product-info">
                            <a href="." className="product-name">Lorem ipsum book one</a>
                            <p className="product-price">€4.55 - <span>€6.5</span></p>
                        </div>
                    </li>
                    <li className="product-item col-3">
                        <div className="product-img">
                            <a href="https://flone.reactdemo.hasthemes.com/product/53" className="product-img-default">
                                <img src="	https://flone.reactdemo.hasthemes.com/assets/img/product/books/7.jpg" alt="" />
                            </a>
                            <div className="product-img-badge d-flex">
                                <span className="product-new">New</span>
                            </div>
                            <div className="img-total-action d-flex flex-jc-center">
                                <button className="btn btn-add-to-wish"><i className="fa-solid fa-heart" aria-hidden="true"></i></button>
                                <button className="btn btn-add-to-cart"><i className="fa-solid fa-cart-shopping" aria-hidden="true"></i></button>
                                <button className="btn btn-add-to-compare"><i className="fa-solid fa-shuffle" aria-hidden="true"></i></button>
                                <button className="btn btn-quick-view"><i className="fa-solid fa-eye" aria-hidden="true"></i></button>
                            </div>
                        </div>
                        <div className="product-info">
                            <a href="." className="product-name">Lorem ipsum book two</a>
                            <p className="product-price">€4.2</p>
                        </div>
                    </li>
                </ul>
                <div className="product-view-more">
                    <a href="https://flone.reactdemo.hasthemes.com/shop-grid-standard">VIEW MORE PRODUCTS</a>
                </div>
            </div>
        </section>
        <section className="section-banner banner-img-second">
            <div className="container">
                <ul className="banner-list row d-flex">
                    <li className="banner-item banner-second col-4">
                        <div className="banner-img">
                            <a href="https://flone.reactdemo.hasthemes.com/shop-grid-standard"><img src="	https://flone.reactdemo.hasthemes.com/assets/img/banner/banner-38.png" alt="" /></a>
                        </div>
                        <div className="banner-info">
                            <p className="banner-name">Historical</p>
                            <p className="banner-price">Starting at <span>$99.00</span></p>
                        </div>
                        <div className="banner-next-shop">
                            <a href="https://flone.reactdemo.hasthemes.com/shop-grid-standard"><i className="fa-solid fa-circle-arrow-right"></i></a>
                        </div>
                    </li>
                    <li className="banner-item banner-second col-4">
                        <div className="banner-img">
                            <a href="https://flone.reactdemo.hasthemes.com/shop-grid-standard"><img src="https://flone.reactdemo.hasthemes.com/assets/img/banner/banner-39.png" alt="" /></a>
                        </div>
                        <div className="banner-info">
                            <p className="banner-name">Magazine</p>
                            <p className="banner-price">Starting at <span>$79.00</span></p>
                        </div>
                        <div className="banner-next-shop">
                            <a href="https://flone.reactdemo.hasthemes.com/shop-grid-standard"><i className="fa-solid fa-circle-arrow-right"></i></a>
                        </div>
                    </li>
                    <li className="banner-item banner-second col-4">
                        <div className="banner-img">
                            <a href="https://flone.reactdemo.hasthemes.com/shop-grid-standard"><img src="https://flone.reactdemo.hasthemes.com/assets/img/banner/banner-36.jpg" alt="" /></a>
                        </div>
                        <div className="banner-info">
                            <p className="banner-name">Bestseller</p>
                            <p className="banner-price">Starting at <span>$29.00</span></p>
                        </div>
                        <div className="banner-next-shop">
                            <a href="https://flone.reactdemo.hasthemes.com/shop-grid-standard"><i className="fa-solid fa-circle-arrow-right"></i></a>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        <section className="section-deal">
            <div className="container d-flex ">
                <div className="deal-img">
                    <a href="https://flone.reactdemo.hasthemes.com/shop-grid-standard"><img src="https://flone.reactdemo.hasthemes.com/assets/img/banner/deal-8.png" alt="" /></a>
                </div>
                <div className="deal-info ">
                    <h2>Deal of the day</h2>
                    <div className="deal-time d-flex flex-jc-center">
                        <span className="days">0 <p>Days</p></span>
                        <span className="hours">0 <p>Hours</p></span>
                        <span className="minutes">0 <p>Minutes</p></span>
                        <span className="second">0 <p>Second</p></span>
                    </div>
                    <a href="https://flone.reactdemo.hasthemes.com/shop-grid-standard" className="btn-shop-now">SHOP NOW</a>
                </div>
            </div>

        </section>
        <section className="section-banner-text">
            <div className="container">
                <ul className="banner-text-list row d-flex flex-jc-spbw">
                    <li className="banner-text-item col-4 left">
                        <img src="https://flone.reactdemo.hasthemes.com/assets/img/icon-img/support-8.png" alt="" />
                        <p className="banner-text-info">FREE SHIPPING ON ALL ORDER</p>
                    </li>
                    <li className="banner-text-item col-4 mid">
                        <img src="https://flone.reactdemo.hasthemes.com/assets/img/icon-img/support-9.png" alt="" />
                        <p className="banner-text-info">BACK GUARANTEE UNDER 5 DAYS</p>
                    </li>
                    <li className="banner-text-item col-4 right">
                        <img src="https://flone.reactdemo.hasthemes.com/assets/img/icon-img/support-10.png" alt="" />
                        <p className="banner-text-info">ON EVERY ORDER OVER $150</p>
                    </li>
                </ul>
            </div>
        </section>
        <section className="section-blog">
            <div className="container">
                <div className="blog-title">
                    <h2>Latest News</h2>
                    <p>But I must explain to you how all this mistaken idea of denouncing.</p>
                </div>
                <ul className="blog-list row">
                    <li className="blog-item col-4">
                        <div className="blog-img ">
                            <a href="https://flone.reactdemo.hasthemes.com/blog-details-standard" className="blog-img-default">
                                <img src="https://flone.reactdemo.hasthemes.com/assets/img/blog/blog-1.jpg" alt="" />
                            </a>
                            <div className="blog-tag d-flex">
                                <span className="badge-life-style">lifestyle</span>
                                <span className="badge-men">men</span>
                            </div>
                        </div>
                        <div className="blog-content">
                            <h3><a href="" className="blog-header">A guide to latest trends</a></h3>
                            <p className="blog-contact">By <a href=" ">Admin</a> </p>
                        </div>
                    </li>
                    <li className="blog-item col-4">
                        <div className="blog-img blog-mid">
                            <a href="https://flone.reactdemo.hasthemes.com/blog-details-standard" className="blog-img-default">
                                <img src="https://flone.reactdemo.hasthemes.com/assets/img/blog/blog-2.jpg" alt="" />
                            </a>
                            <div className="blog-tag">
                                <span className="badge-men">men</span>
                            </div>
                        </div>
                        <div className="blog-content">
                            <h3><a href="" className="blog-header">Five ways to lead a happy life</a></h3>
                            <p className="lates-contact">By <a href=" ">Admin</a> </p>
                        </div>
                    </li>
                    <li className="blog-item col-4">
                        <div className="blog-img blog-right">
                            <a href="https://flone.reactdemo.hasthemes.com/blog-details-standard" className="blog-img-default">
                                <img src="https://flone.reactdemo.hasthemes.com/assets/img/blog/blog-2.jpg" alt="" />
                            </a>
                            <div className="blog-tag">
                                <span className="badge-life-style">lifestyle</span>
                                <span className="badge-men">men</span>
                            </div>
                        </div>
                        <div className="blog-content ">
                            <h3><a href="" className="blog-header">Tips on having a happy life</a></h3>
                            <p className="blog-contact">By <a href=" ">Admin</a> </p>
                        </div>
                    </li>
                </ul>
            </div>

        </section>
    </main>
    </>
  )
}
export default Main;

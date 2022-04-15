function Header() {
    return (<>
    <header className="page-header">
        <div className="header-top">
            <div className="container d-flex flex-jc-spbw">
                <div className="header-left">
                    <ul className="language-curency-phone-numer row">
                        <li className="language">
                            <a href="">English</a>
                        </li>
                        <li className="curency">
                            <a href="">EUR</a>
                        </li>
                        <li className="phone-number">
                            <p>Call Us 3965410</p>
                        </li>
                    </ul>
                </div>
                <div className="header-right">
                    <p className="header-right-title">Free delivery on order over <span>€200.00</span></p>
                </div>
            </div>
        </div>
        <nav className="header-nav">
            <div className="container d-flex flex-jc-spbw">
                <a href="https://flone.reactdemo.hasthemes.com/" className="header-logo">
                    <img src="https://flone.reactdemo.hasthemes.com/assets/img/logo/logo.png" alt="" />
                </a>
                <ul className="header-menu d-flex flex-jc-center">
                    <li className="menu-item">
                        <a href="">Home</a>
                    </li>
                    <li className="menu-item">
                        <a href="">Shop</a>
                    </li>
                    <li className="menu-item">
                        <a href="">Collection</a>
                    </li>
                    <li className="menu-item">
                        <a href="">Pages</a>
                    </li>
                    <li className="menu-item">
                        <a href="">Block</a>
                    </li>
                    <li className="menu-item">
                        <a href="">Contact US</a>
                    </li>
                </ul>
                <ul className="social-list d-flex flex-jc-spar">
                    <li className="social-item">
                        <a href="" className="icon-search"><i className="fa-solid fa-magnifying-glass" aria-hidden="true"></i></a>
                    </li>
                    <li className="social-item">
                        <a href="" className="icon-user"><i className="fa-solid fa-person-dress" aria-hidden="true"></i></a>
                    </li>
                    <li className="social-item">
                        <a href=""><i className="fa-solid fa-shuffle" aria-hidden="true"></i></a>
                    </li>
                    <li className="social-item">
                        <a href=""><i className="fa-solid fa-heart" aria-hidden="true"></i></a>
                    </li>
                    <li className="social-item">
                        <a href=""><i className="fa-solid fa-bag-shopping" aria-hidden="true"></i></a>
                    </li>
                </ul>
            </div>
            <a className="d-none-mb nav-bar is-hidden" href="">
                <i className="fa-solid fa-bars" aria-hidden="true"></i>
            </a>
        </nav>
    </header>
    </>)
}
export default Header;

import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="navbar navbar-static-top">
        <div className="navbar-inner">
          <div className="container">
            <a id="main_nav_btn" className="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </a>
            <a href="javascript:void(0);" className="brand">
              <svg xmlns="http://www.w3.org/2000/svg" width="122" height="28" viewBox="0 0 122 28" className="Header__Logo" role="button" style={{
                  width: '96px',
                  height: '22px',
                  marginTop: '2px',
                  fill: '#FFFFFF',
                  cursor: 'pointer'
                }}>
                <path fillRule="evenodd" d="M10.34 23.89c.93 0 1.8-.17 2.62-.5 0 .03 1.67 2.62 1.7 2.63a9.88 9.88 0 0 1-4.81 1.17C4.72 27.2 1 23.81 1 18.42c0-5.43 3.9-8.8 8.85-8.8 1.75 0 3.14.38 4.53 1.12l-1.6 2.7c-.84-.33-1.7-.48-2.6-.48-3.03 0-5.38 1.93-5.38 5.46 0 3.34 2.27 5.47 5.54 5.47zM23.27 9.62c5.04 0 8.69 3.57 8.69 8.8 0 5.2-3.65 8.77-8.7 8.77-5 0-8.65-3.57-8.65-8.77 0-5.23 3.65-8.8 8.66-8.8zm0 3.22c-2.81 0-4.86 2.17-4.86 5.58 0 3.38 2.05 5.55 4.86 5.55 2.88 0 4.9-2.17 4.9-5.55 0-3.41-2.02-5.58-4.9-5.58zm11.08 13.97V10h3.76V26.8h-3.76zm-.5-21.98a2.36 2.36 0 0 1 4.71 0 2.4 2.4 0 0 1-2.35 2.4 2.4 2.4 0 0 1-2.35-2.4zm7.54 6.23a22.54 22.54 0 0 1 7.7-1.44c4.3 0 7.02 1.63 7.02 6.37v10.82H52.4V16.34c0-2.43-1.51-3.3-3.6-3.3-1.33 0-2.66.18-3.65.49V26.8H41.4V11.06zM59.26 1h3.76v9.45c.8-.42 2.35-.83 3.83-.83 4.86 0 8.5 3.1 8.5 8.5 0 5.43-3.6 9.07-9.82 9.07-2.43 0-4.56-.5-6.27-1.1V1zm3.76 22.62c.72.23 1.67.35 2.62.35 3.45 0 5.92-1.9 5.92-5.77 0-3.27-2.32-5.2-5.16-5.2-1.48 0-2.62.38-3.38.8v9.82zm23.2-8.08c0-1.82-1.38-2.66-3.24-2.66-1.93 0-3.45.57-4.85 1.37v-3.27a11.21 11.21 0 0 1 5.46-1.36c3.68 0 6.3 1.52 6.3 5.73v11.12c-1.6.42-3.87.68-5.77.68-4.36 0-7.55-1.32-7.55-5.12 0-3.42 2.92-5.09 7.78-5.09h1.86v-1.4zm0 3.9h-1.6c-2.62 0-4.33.77-4.33 2.48 0 1.74 1.6 2.42 3.87 2.42.57 0 1.37-.07 2.05-.18v-4.71zm6.4 2.82a8.82 8.82 0 0 0 5.13 1.9c1.67 0 2.77-.57 2.77-1.9 0-1.37-.99-1.86-3.15-2.43-3.5-.8-4.97-2.2-4.97-5.13 0-3.41 2.58-5.08 6-5.08 1.9 0 3.41.41 4.82 1.29v3.45a7.79 7.79 0 0 0-4.71-1.7c-1.63 0-2.5.8-2.5 1.9 0 1.1.71 1.66 2.65 2.2 3.84.83 5.5 2.27 5.5 5.3 0 3.54-2.69 5.13-6.33 5.13a9.87 9.87 0 0 1-5.2-1.36v-3.57zm16.69-3v.07c.23 3 2.8 4.64 5.43 4.64 2.31 0 3.98-.54 5.65-1.64v3.3c-1.52 1.07-3.76 1.56-5.92 1.56-5.24 0-8.8-3.34-8.8-8.65 0-5.35 3.49-8.92 8.12-8.92 4.9 0 7.21 3.15 7.21 7.74v1.9h-11.7zm8.16-2.43c-.08-2.62-1.37-4.06-3.8-4.06-2.16 0-3.75 1.52-4.25 4.06h8.05z"></path>
              </svg>
            </a>
            <div className="mobile-bg"></div>
            <div className="nav-collapse" id="application_menu">
              <ul className="nav clearfix">
                <li className="dropdown dropdown-hover" id="resources_menu">
                  <a className="dropdown-toggle" data-toggle="dropdown" href="#">Products
                    <b className="caret"></b>
                  </a>
                  <ul className="dropdown-menu fadeIn animated-fast" role="menu" aria-labelledby="dLabel">
                    <li className="home ">
                      <a href="/home">Buy/Sell Digital Currency</a>
                    </li>
                    <li>
                      <a href="https://www.gdax.com" className="external-link">GDAX</a>
                    </li>
                    <li>
                      <a href="https://developers.coinbase.com" className="external-link">Developer Platform</a>
                    </li>
                    <li className="">
                      <a href="/merchants">Merchant Tools</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/help" target="_blank">Help</a>
                </li>
              </ul>
              <ul className="nav clearfix">
                <li>
                  <a href="/charts">Charts</a>
                </li>
                <li className=" signin">
                  <a href="/signin">Sign In</a>
                </li>
                <li style={{
                    marginTop: '-1px'
                  }} className="active signup">
                  <a href="/signup" className="btn">Sign Up</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;

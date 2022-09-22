import React from "react";
import "../styles/Home.css";
import LoginPage from "./LoginPage";
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-dark "
      style={{
        backgroundColor: "#2874F0",
      }}
    >
      <div className="navbarContentContainer">
        <div className="navbarContent" id="logo">
          <a className="navbar-brand ">
            <img
              src={require("../assets/logo.png")}
              alt="Brand logo"
              style={{
                height: "38px",
              }}
            />
          </a>
        </div>

        <div className="navbarContent " id="searchBox">
          <div
            className="col col-md-4 search d-flex dropdown bg-white "
            style={{
              width: "510px",
            }}
          >
            <input
              type="search"
              className="form-control dropdown-toggle searchInput"
              placeholder="Search for products, brands and more"
              aria-label="Search"
              id="navbarDropdown"
            />
            <i className=" fa fa-search mt-2 ml-sm-1 text-primary searchIcon" ></i>
            <div
              className="dropdown-menu col-12 search-item"
              aria-labelledby="navbarDropdown"
            >
              <h6 className="ml-4">Discover More</h6>
              <div className="dropdown-divider"></div>
              <a href="/mobiles" className="dropdown-item py-2">
                <i className="fa fa-search text-secondary mr-3"></i>Mobiles
              </a>
              <a href="/tshirts" className="dropdown-item py-2">
                <i className="fa fa-search text-secondary mr-3"></i>t-shirts
              </a>
              <a href="/shoes" className="dropdown-item py-2">
                <i className="fa fa-search text-secondary mr-3"></i>shoes
              </a>
              <a href="/laptop" className="dropdown-item py-2">
                <i className="fa fa-search text-secondary mr-3"></i>laptop
              </a>
              <a href="/tv" className="dropdown-item py-2">
                <i className="fa fa-search text-secondary mr-3"></i>tv
              </a>
              <a href="/sarees" className="dropdown-item py-2">
                <i className="fa fa-search text-secondary mr-3"></i>sarees
              </a>
            </div>
          </div>
        </div>

        <div className="navbarContent  " id="loginBtn">
          <button
            className="btn btn-light loginBtnContent"
          >
           <Link to="/login" style={{
            textDecoration:'none'
           }}>Login</Link>
          </button>
        </div>

        <button className="btn" id="sellerBtn">Become a Seller</button>      

        <div class="btn-group">
          <button
            type="button"
            class="btn  dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            id="moreBtn"
          >
            More
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#" style={{
                fontSize: '13px'
              }}>
                <i class="fa-sharp fa-solid fa-bell"></i>
                Notification Preferrences
              </a>
            </li>
            <hr class="dropdown-divider" />
            <li>
              <a class="dropdown-item" href="#" style={{
                fontSize: '13px'
              }}>
                <i class="fa-sharp fa-solid fa-square-question"></i>
                24x7 Customer Care
              </a>
            </li>
            <hr class="dropdown-divider" />
            <li>
              <a class="dropdown-item" href="#" style={{
                fontSize: '13px'
              }}>
                <i class="fa-light fa-chart-line"></i>

                Advertise
              </a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <a class="dropdown-item" href="#" style={{
                fontSize: '13px'
              }}>
                <i class="fa-sharp fa-solid fa-download mr-1px"></i>

                Download App
              </a>
            </li>
          </ul>
        </div>

        <button className="btn" id="cartBtn"><i class="fa-solid fa-cart-shopping"></i> Cart</button>

      </div>
    </nav>
  );
}

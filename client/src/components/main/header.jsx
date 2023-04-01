import React, { Component } from "react";
import "font-awesome/css/font-awesome.css";
import { NavLink } from "react-router-dom";
import { getProducts } from "../../api/productApi";

class Header extends Component {
  state = { products: [] };

  async componentDidMount() {
    const { data: products } = await getProducts();
    console.log("result", products);
    this.setState({ products });
  }

  render() {
    const count = this.state.products.filter((p) => p.like === true).length;

    return (
      // PB Tech , Hardwired, PB Business, PB Education, PB Wholesale PB Government, PB Health, PB IoT

      <div id="navtab">
        <div className="top-nav">
          <div className="container" style={{ display: "flex" }}>
            <div className="row" style={{ width: "100%" }}>
              <div id="top-nav-left" className=" col-8">
                <ul className="nav nav-tabs ">
                  <li className="nav-item">
                    <NavLink
                      className="nav-link active"
                      aria-current="page"
                      to="/homepage"
                    >
                      PB Tech
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="#\">
                      Hardwired
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#home">
                      PB Business
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#home">
                      DisPB Educationabled
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#home">
                      PB Wholesale
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#home">
                      PB Government
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#home">
                      PB Health
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#home">
                      PB IoT
                    </a>
                  </li>
                </ul>
              </div>
              {/*  */}
              <div
                id="top-nav-right"
                className=" col-4 "
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                }}
              >
                <ul className="nav  ">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="#home"
                    >
                      <i className="fa fa-mobile" aria-hidden="true"></i> Get
                      the PB Tech App
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link dropdown-toggle" href="#\">
                      <i className="fa fa-globe" aria-hidden="true"></i>NZ/EN
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <nav
          className="navbar navbar-expand-lg container-fluid"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <div
            className="container"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div
              className="row"
              style={{ display: "flex", width: "100%", marginTop: "10px" }}
            >
              <div className="col-7" style={{ display: "flex" }}>
                <img src="/images/pbtech.png" alt="pbtech" />

                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse col-sm-12 col-md-12"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <form className="d-flex" role="search">
                      <input
                        className="form-control col-8"
                        type="search"
                        placeholder="Search by keyword or Parts#"
                        aria-label="Search"
                      />

                      <ul>
                        <li className="nav-item dropdown">
                          <a
                            className="nav-link dropdown-toggle"
                            href="#home"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            All Departments
                          </a>
                          <ul
                            className="dropdown-menu"
                            style={{ height: "auto" }}
                          >
                            <li>
                              <a className="dropdown-item" href="#home">
                                Computer & Tablets
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#home">
                                Iphone
                              </a>
                            </li>
                            {/* <li><hr className="dropdown-divider"></li> */}
                            <li>
                              <a className="dropdown-item" href="#home">
                                Parts
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                      <button className="btn" type="submit">
                        <i
                          className="fa fa-search"
                          aria-hidden="true"
                          style={{ display: "flex" }}
                        ></i>
                      </button>
                    </form>
                  </ul>
                </div>
              </div>

              <div className="col-5 extra-tab" style={{ display: "flex" }}>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item ">
                    <a
                      className="nav-link active "
                      aria-current="page"
                      href="#home"
                    >
                      <i
                        className="fa fa-question-circle-o"
                        aria-hidden="true"
                      ></i>
                      Help & Support
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="#home">
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                      Find Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#home">
                      <i className="fa fa-briefcase" aria-hidden="true"></i>
                      Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="#home">
                      <i className="fa fa-user" aria-hidden="true"></i>sign in
                    </a>
                  </li>
                </ul>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link " href="#home">
                      <i className="fa fa-heart-o" aria-hidden="true" />

                      <span className="badge text-bg-warning">{count}</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link " to="/cart">
                      <i className="fa fa-shopping-cart" aria-hidden="true"></i>{" "}
                      Cart
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>

            <div
              id="third-nav"
              className="row"
              style={{
                display: "flex",
                width: "100%",
                color: "white",
                margin: "20px 0px 5px 0px",
              }}
            >
              <div className="col-6">
                <ul
                  className="navbar-nav me-auto mb-2 mb-lg-0"
                  style={{ listStyle: "none" }}
                >
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#home"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Browse Departments
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#home">
                          Computer & Tablets
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#home">
                          Iphone
                        </a>
                      </li>
                      {/* <li><hr className="dropdown-divider"></li> */}
                      <li>
                        <a className="dropdown-item" href="#home">
                          Parts
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="col-6">
                <ul
                  className="navbar-nav me-auto mb-2 mb-lg-0"
                  style={{ listStyle: "none", float: "right" }}
                >
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link"
                      href="#home"
                      role="button"
                      style={{ color: "#F08222" }}
                    >
                      View All Promotions(3)
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
      // Browse Departments down arrow,
      // View All Promotions(3)
    );
  }
}

export default Header;

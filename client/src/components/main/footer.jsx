import React from "react";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <React.Fragment>
      <div id="footer" className="conatiner-fluid">
        <div id="main_footer" className="container">
          <div className="row">
            <div className="col">
              <p>Shop by DEPARTMENT</p>
              <ul className="footer_icons">
                <li>
                  <img alt=".." title="icon" src="images/icons/monitor1.png" />
                  Computers & Tablets
                </li>
                <li>
                  <img alt=".." title="icon" src="images/icons/desktop.png" />
                  PC Parts
                </li>
                <li>
                  <img alt=".." title="icon" src="images/icons/min.png" />
                  Printing & Office
                </li>
                <li>
                  <img alt=".." title="icon" src="images/icons/file.png" />
                  TV & AV
                </li>
                <li>
                  <img alt=".." title="icon" src="images/icons/game.png" />
                  Gaming
                </li>
                <li>
                  <img alt=".." title="icon" src="images/icons/key.png" />
                  Smart Home & Security
                </li>
                <li>
                  <img alt=".." title="icon" src="images/icons/plus.png" />
                  More
                </li>
                <li>
                  <img alt=".." title="icon" src="images/icons/apple.png" />
                  Apple
                </li>
              </ul>
            </div>
            <div className="col">
              <p>
                <br />
              </p>
              <ul className="footer_icons">
                <li>
                  <img alt=".." title="icon" src="images/icons/desktop.png" />
                  PC Peripherals & Accessories
                </li>
                <li>
                  <img alt=".." title="icon" src="images/icons/network.png" />
                  PC Peripherals & Accessories
                </li>
                <li>
                  <img alt=".." title="icon" src="images/icons/mobile.png" />
                  Phones & Accessories
                </li>
                <li>
                  <img alt=".." title="icon" src="images/icons/headset.png" />
                  Headphones & Audio
                </li>
                <li>
                  <img alt=".." title="icon" src="images/icons/camera.png" />
                  Cameras & Drones
                </li>
                <li>
                  <img alt=".." title="icon" src="images/icons/halloween.png" />
                  Toys, Hobbies & STEM
                </li>
                <li>
                  <img alt=".." title="icon" src="images/icons/aid.png" />
                  Toys, Hobbies & STEM
                </li>
              </ul>
            </div>
            <div className="col arrow_icon">
              <p>Company Info</p>
              <ul>
                <li>About Us</li>
                <li>Business</li>
                <li>Education</li>
                <li>Wholesale</li>
                <li>Government</li>
                <li>Health</li>
                <li>Stores</li>
                <li>Careers</li>

                <li>Contact Us</li>
                <li>News</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div className="col arrow_icon">
              <p>Services & Support</p>
              <ul>
                <li>Help</li>
                <li>Returns & Warranty</li>
                <li>Finance</li>
                <li>IT Services</li>
                <li>Home Services</li>
                <li>Repair Services</li>
                <li>Job Tracker</li>
                <li>Service Parts</li>
                <li>System Builder</li>
              </ul>
            </div>
            <div className="col arrow_icon">
              <p>Promotions & Offers</p>
              <ul>
                <li>Promotions</li>
                <li>Clearance</li>
                <li>Hot Deals</li>
                <li>New Arrivals</li>
                <li>BYOD</li>
                <li>Tax Free Shopping</li>
                <li>Events</li>
                <li>PB Insider</li>
                <li>PB Advisor</li>
              </ul>
            </div>
            <div className="col">
              <p>Become a PB Insider</p>
              <div id="pb_insider" className=" d-flex flex-column p-2">
                <div
                  className="col d-flex p-1"
                  style={{ width: "100%", borderRadius: "5px" }}
                >
                  <img src="/images/logo/insiderlogo.png" alt="" />
                  <p
                    style={{
                      fontSize: "13.2px",
                      lineHeight: "21px",

                      color: "#FFFFFF",
                    }}
                  >
                    Get early access to sales, exclusive discount coupons &
                    more!
                  </p>
                </div>
                <button className="btn btn-warning">Learn more</button>
              </div>
            </div>
          </div>
        </div>
        <div id="footer_second" className="conatiner ">
          <div className="row ">
            <ul className="col-6">
              <li style={{ listStyle: "none" }}>
                {" "}
                <i className="fa fa-globe" aria-hidden="true"></i>Country:
                NewZealand
              </li>
              <li>Australia</li>
              <li>Pacific</li>
              <li>Global</li>
              <li>
                <NavLink to="/productcategories" style={{ color: " #878787" }}>
                  crud
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div id="third-footer" className="conatiner">
          <div className="row text-center">
            <h5>
              Copyright © PB Technologies Ltd All rights reserved. 587 Great
              South Road, Manukau, Auckland, New Zealand
            </h5>
            <h6>
              PB Technologies Ltd is not responsible for typographical errors.
              All prices and specifications are subject to change without
              notice.
            </h6>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;

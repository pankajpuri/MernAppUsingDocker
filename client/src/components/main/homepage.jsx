import React, { Component } from "react";
import ProductCategorySection from "./productcategorysection";

class Homepage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <section
          id="banner-section"
          style={{ marginTop: "69px", marginBottom: "69px" }}
        >
          <div className="container">
            <div
              className="row"
              style={{
                width: "100%",
                display: "flex",
                height: "310px",
                // background: "#F6F7FA",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <div className="col-4" style={{ height: "100%" }}>
                <h1>Laptop Compouters</h1>
                <p>
                  Browse New Zealand's largest selection of the best laptops in
                  the world
                </p>
              </div>
              <div
                className="col-8"
                style={{
                  maxHeight: "100%",
                  borderTopLeftRadius: "50%",
                  // background: "#ebf5f2",
                  background: "#F0F1F7",
                  borderRadius: "40px",
                  position: "absolute",
                  left: "450px",
                  top: "120px",
                  transform: "rotate(-10.47deg)",
                  // borderTopLeftRadius: "100%",
                  // boxShadow: "10px 20px 25px inset #608dab",
                }}
              >
                <img
                  src="/images/banner.png"
                  alt="banner"
                  style={{
                    float: "right",
                    width: "auto",
                    height: "264px",
                    // padding: "10px 0px",
                    // boxShadow: "5px 15px 10px inset",
                    // borderRadius: "50%",
                  }}
                />
              </div>
            </div>
          </div>
        </section>
        <ProductCategorySection />
      </React.Fragment>
    );
  }
}

export default Homepage;

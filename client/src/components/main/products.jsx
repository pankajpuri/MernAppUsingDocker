import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { getProducts } from "../../api/productApi";

class Products extends Component {
  state = { products: [] };

  async componentDidMount() {
    const { data: products } = await getProducts();
    this.setState({ products });
  }

  handLike = async (product) => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...products[index] };
    products[index].like = !products[index].like;
    const id = product._id;
    const update_product = {
      img: product.img,
      brand: product.brand,
      model: product.model,
      price: product.price,
      rating: product.rating,
      processor: product.processor,
      os: product.os,
      graphics: product.graphics,
      memory: product.memory,
      storage: product.storage,
      like: products[index].like,
    };

    this.setState({ products });
    axios.put(`http://localhost:8000/api/products/${id}`, update_product);
  };
  render() {
    return (
      <div className="container">
        <div className="row d-flex">
          <div className="col-3"></div>
          <div id="products" className="col-9">
            {" "}
            {this.state.products.map((product) => (
              <div
                key={product._id}
                className="card"
                style={{ width: "18rem" }}
              >
                <div className="col">
                  <div className="d-flex productbrand">
                    {" "}
                    <h1 className="card-title">{product.brand}</h1>
                    <p className="card-text">{product.model}</p>
                  </div>
                  <div style={{ position: "relative" }}>
                    <img src={product.img} className="card-img-top" alt="..." />
                    <div
                      style={{
                        position: "absolute",
                        zIndex: 1,
                        top: "100px",
                        left: "75px",
                        color: "yellow",
                      }}
                      className="card-text d-flex flex-row  justify-content-center align-content-center"
                    >
                      <p>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>5
                      </p>
                      &nbsp; ({product.rating})
                    </div>
                    <h5
                      style={{
                        position: "absolute",
                        zIndex: 1,
                        top: "140px",
                        left: "75px",
                        color: "yellow",
                      }}
                      className="card-title"
                    >
                      ${product.price} inc GST
                    </h5>
                  </div>
                </div>
                <div className="card-body">
                  <div className="row">
                    <ul className="card-text">
                      <li>Processor:{product.processor}</li>
                      <li>OS:{product.os}</li>
                      <li>Graphics:{product.graphics}</li>
                      <li>Memory:{product.memory}</li>
                      <li>Storage:{product.storage}</li>
                    </ul>
                  </div>
                  <div className="row d-flex m-2">
                    <div className="col-6 d-flex flex-row  justify-content-center ">
                      <i
                        className="fa fa-plus-square mt-1"
                        aria-hidden="true"
                      ></i>
                      <p>Compare</p>
                    </div>
                    <div className="col-6 text-end">
                      <i
                        onClick={() => this.handLike(product)}
                        className={
                          product.like === true
                            ? " cursor fa fa-heart"
                            : " cursor fa fa-heart-o"
                        }
                        aria-hidden="true"
                      ></i>
                    </div>
                  </div>
                  <div className="row">
                    <NavLink to="/cart" className="btn btn-primary">
                      Add To Cart
                    </NavLink>
                    <p className="card-text">
                      Shipping & Delivery Info
                      <i className="fa fa-info-circle" aria-hidden="true"></i>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Products;

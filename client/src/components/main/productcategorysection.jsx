import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { getProductCategory } from "../../api/productcategoryApi";

class ProductCategorySection extends Component {
  state = { productcategory: [] };

  async componentDidMount() {
    const { data: productcategory } = await getProductCategory();
    this.setState({ productcategory });
  }

  render() {
    return (
      <div className="container ">
        <div className="row d-flex">
          <div className="col-4"></div>
          <div id="productCategory" className="col-9 ">
            {this.state.productcategory.map((p) => (
              <div className="card col-4" key={p._id}>
                <ul className="browse-dropdown navbar-nav m-2 mb-lg-0 d-flex">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#hello"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Browse Laptops in Category
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#hl">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#lh">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#af">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <h5 className="card-title text-center mt-3 mb-3">{p.header}</h5>
                <img src={p.img} className="card-img-top" alt="..." />
                <div className="card-body ">
                  <ul className="card-text">
                    <li>{p.l1}</li>
                    <li>{p.l2}</li>
                    <li>{p.l3}</li>
                    <li>{p.l4}</li>
                  </ul>
                  <NavLink to="/products" className="btn btn-primary mb-2">
                    {p.shopbtn}
                  </NavLink>
                  <NavLink to="/products" className="btn btn-primary">
                    {p.shopbrandbtn}
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCategorySection;

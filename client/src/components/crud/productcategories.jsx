import React, { Component } from "react";
import { getProductCategory } from "../../api/productcategoryApi";

class ProductCategories extends Component {
  state = {
    productcategories: [],
    headerlist: [
      "img",
      "browsemenu",
      "header",
      "l1",
      "l2",
      "l3",
      "l4",
      "shopbtn",
      "shopbrandbtn",
    ],
  };
  async componentDidMount() {
    const { data: productcategories } = await getProductCategory();

    this.setState({ productcategories });
  }

  handleAdd = async () => {
    const { data: productcate } = await getProductCategory();
    const productcategories = [productcate, ...this.state.productcategories];
    this.setState({ productcategories });
  };

  handleUpdate = () => {
    console.log("handle update.");
  };
  handleDelete = () => {
    console.log("handle delte");
  };
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid m-1">
          <button
            className="btn btn-success mt-5 mb-5"
            onClick={this.handleAdd}
          >
            Add new
          </button>

          <table className="table table-striped table-hover table-bordered">
            <thead>
              <tr>
                {this.state.headerlist.map((header) => (
                  <th>{header}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              {this.state.productcategories.map((pc) => (
                <tr key={pc._id}>
                  <td>{pc.img}</td>
                  <td>{pc.browsemenu}</td>
                  <td>{pc.header}</td>
                  <td>{pc.l1}</td>
                  <td>{pc.l2}</td>
                  <td>{pc.l3}</td>
                  <td>{pc.l4}</td>
                  <td>{pc.shopbtn}</td>
                  <td>{pc.shopbrandbtn}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={this.handleUpdate}
                    >
                      {" "}
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={this.handleDelete}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductCategories;

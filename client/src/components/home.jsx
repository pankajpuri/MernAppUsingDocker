import React, { Component } from "react";
import axios from "axios";

class Home extends Component {
  state = { message: "" };

  async componentDidMount() {
    try {
      const response = await axios.get("http://localhost:8000/api/message");

      console.log("response result:", response);

      this.setState({ message: response.data[0].message });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { message } = this.state;
    return (
      <main id="homepage" className="container-fluid">
        <h2>fetching from mongodb</h2>
        <h1>{message}</h1>
      </main>
    );
  }
}

export default Home;

import React, { Component } from "react";
import axios from "axios";

export default class API extends Component {
  constructor(props) {
    super(props);
    this.state = { data: "" };
  }

  fetchRandomData() {
    // this.setState({ data: "yes" });
    return axios
      .get("https://randomuser.me/api")
      .then((randomData) => {
        // handle success
        // console.log(data);
        // setData(JSON.stringify(randomData));
        this.setState((NewState) => {
          return { data: JSON.stringify(randomData) };
        });
        return JSON.stringify(randomData);
      })
      .catch((err) => {
        // handle error
      });
  }

  componentDidMount() {
    this.fetchRandomData();
  }

  render() {
    const { data } = this.state;

    return (
      <React.Fragment>
        <button
          onClick={() => {
            this.fetchRandomData();
          }}
        >
          Fetch Random Data
        </button>
        <p>{data}</p>
      </React.Fragment>
    );
  }
}

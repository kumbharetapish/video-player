import React, { Component } from "react";
import Axios from "axios";
import "./App.css";
import Video from "./Video";
import List from "./List";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videoId: true, listRes: [], VideoObj: {} };
    this.getVideo(1);
  }

  componentDidMount() {
    Axios.get("https://5dfb78410301690014b8fbe2.mockapi.io/playlist/list")
      .then(res => {
        console.log(res.data);

        this.setState({ listRes: [...res.data] });
      })
      .catch(err => {
        this.setState({ listRes: [{ title: "not fount" }] });
      });
  }

  getVideo = id => {
    Axios.get(
      "https://5dfb78410301690014b8fbe2.mockapi.io/playlist/video/" + id
    )
      .then(res => {
        this.setState({ VideoObj: { ...res.data } });
      })
      .catch(err => {
        this.setState({ VideoObj: {} });
      });
  };

  clickHandel = id => {
    console.log(id);

    this.getVideo(id);
  };

  render() {
    return (
      <div className="container">
        <Video obj={this.state.VideoObj} />
        <List listData={this.state.listRes} clickHandel={this.clickHandel} />
      </div>
    );
  }
}

export default App;

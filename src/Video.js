import React, { Component } from "react";
import videoStyle from "./video.module.css";
class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoObj: {}
    };
  }

  render() {
    const {
      props: { obj = {} }
    } = this;

    return (
      <div className={videoStyle.videoPlayerWrapper}>
        <div className={videoStyle.videoPlayer}>
          <iframe
            title={obj.title}
            width="100%"
            height="400"
            frameborder="0"
            src={"https://player.vimeo.com/video/" + obj.vimeoI}
          ></iframe>
        </div>
        <div className={videoStyle.likeAndBookmark}>
          <div className={videoStyle.viewport}>{obj.views + " views"}</div>
          <div className={videoStyle.likeBookmark}>
            <i
              className={videoStyle.like + "fas-fa-heart"}
              aria-hidden="true"
            ></i>
            <i
              className={"fas-fa-bookmark " + videoStyle.like}
              aria-hidden="true"
            ></i>
          </div>
        </div>
        <div className={videoStyle.descriptionWrapper}>
          <h2>{obj.title}</h2>
          <p>{obj.description}</p>
        </div>
      </div>
    );
  }
}
export default Video;

import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactPlayer from "react-player/lazy";
import ctrltitle from "../images/crtlTitle.png";
import speechEntry from "../gifs/SpeechEntry.gif";
import candyVid from "../videos/candyflossVid.mp4";
import colourVid from "../videos/colourcodeVid2.mp4";
import explorerVid from "../videos/explorerVid2.mp4";
import inkdVid from "../videos/inkdVid.mp4";

class Project extends Component {
  static propTypes = {
    body: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    videos: PropTypes.array,
    images: PropTypes.array,
    link: PropTypes.array,
    download: PropTypes.array,
  };

  renderVideos() {
    var packedVids = [
      candyVid,
      colourVid,
      explorerVid,
      inkdVid,
      "https://www.youtube.com/watch?v=CAP0E-1nuuA&feature=emb_title",
    ];
    if (this.props.videos) {
      const listItems = (
        <ul className="no-bullets">
          {this.props.videos.map((element) => {
            return (
              <li key={element.src}>
                <ReactPlayer url={packedVids[element.src]} controls={true} />
              </li>
            );
          })}
        </ul>
      );
      return <div className="centered">{listItems}</div>;
    }
  }

  renderImages() {
    var packedImages = [ctrltitle, speechEntry];
    if (this.props.images) {
      const listItems = (
        <ul className="no-bullets">
          {this.props.images.map((element) => {
            return (
              <li key={element.src}>
                <img
                  style={{ width: "80%", height: "80%" }}
                  src={packedImages[element.src]}
                  alt={element.src}
                />
              </li>
            );
          })}
        </ul>
      );
      return <div className="centered">{listItems}</div>;
    }
  }

  renderLinks() {
    if (this.props.link) {
      const listItems = (
        <ul className="no-bullets">
          {this.props.link.map((element) => {
            return (
              <li key={element.label}>
                <button
                  className="project-button"
                  onClick={() => window.open(element.url)}
                >
                  <span>{element.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      );
      return (
        <div>
          {listItems}
          <br></br>
        </div>
      );
    }
  }

  renderDownloads() {
    if (this.props.download) {
      const listItems = (
        <ul className="no-bullets">
          {this.props.download.map((element) => {
            return (
              <li key={element.label}>
                <a href={element.url} download>
                  <button className="project-button">
                    <span>{element.label}</span>
                  </button>
                </a>
              </li>
            );
          })}
        </ul>
      );
      return (
        <div>
          {listItems}
          <br></br>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="project">
        {this.renderVideos()}
        {this.renderImages()}
        <h1>{this.props.title}</h1>
        <div className="left-alligned">{this.props.body}</div>
        {this.renderLinks()}
        {this.renderDownloads()}
      </div>
    );
  }
}

export default Project;

import React, { Component } from "react";
import PropTypes from "prop-types";

class ImageTab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    image: PropTypes.string,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  };

  render() {
    const {
      onClick,
      props: { activeTab, label, image },
    } = this;

    let className = "image-tab-list-item";

    if (activeTab === label) {
      className += " image-tab-list-active";
    }

    return (
      <li className={className} onClick={onClick}>
        {image ? (
          <img src={image} className="image-tab-image" alt={label} />
        ) : null}
        {image ? <br></br> : null}
        {label}
      </li>
    );
  }
}

export default ImageTab;

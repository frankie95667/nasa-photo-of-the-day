import React from "react";
import { CardImg } from "reactstrap";

const NasaCardImg = props => {
  if (props.imageType === "image") {
    return (
      <CardImg top width="100%" src={props.imageUrl} alt={props.imageTitle} />
    );
  } else {
    return (
      <div className="videoWrapper">
        <iframe
          src={props.imageUrl}
          width="560"
          height="315"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    );
  }
};

export default NasaCardImg;

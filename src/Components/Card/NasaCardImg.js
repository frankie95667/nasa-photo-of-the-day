import React from "react";
import { CardImg } from "reactstrap";

const NasaCardImg = props => {
  const displayImg = () => {
    if (props.imageType === "image") {
      return (
        <CardImg onLoad={()=> props.onLoad()} top width="100%" src={props.imageUrl} alt={props.imageTitle} />
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
  return ( 
    <div className={props.loading ? 'media_wrapper loading' : 'media_wrapper'}>
      {displayImg()}
    </div>
  );
}

export default NasaCardImg;

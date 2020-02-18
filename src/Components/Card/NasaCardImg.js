import React from 'react';
import {CardImg} from 'reactstrap';

const NasaCardImg = (props) => {
    return (
        <CardImg
            top
            width="100%"
            src={props.imageUrl}
            alt={props.imageTitle} />
    )
}

export default NasaCardImg;
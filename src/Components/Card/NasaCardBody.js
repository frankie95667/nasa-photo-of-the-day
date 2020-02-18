import React from 'react';
import {CardBody, CardTitle, CardText} from 'reactstrap';

const NasaCardBody = (props) => {
    return (
        <CardBody>
            <CardTitle>Date: {props.imageDate}</CardTitle>
            <CardText>{props.imageDesc}</CardText>
        </CardBody>
    )
}

export default NasaCardBody;
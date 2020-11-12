import React from 'react';
import {CardBody, CardTitle} from 'reactstrap';

const NasaCardTitle = (props) => {
    return (
        <CardBody>
            <CardTitle>
                <h3>{props.imageTitle}</h3>
            </CardTitle>
        </CardBody>
    )
}

export default NasaCardTitle;
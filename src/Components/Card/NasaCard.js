import React from 'react';
import { Card } from "reactstrap";
import NasaCardBody from './NasaCardBody';
import NasaCardImg from './NasaCardImg';
import NasaCardTitle from './NasaCardTitle';
import './NasaCard.css';

const NasaCard = (props) => {
    const displayImage = () => {
        if(props.loading){
          return (
            <NasaCardImg 
                imageUrl={'https://www.stevensegallery.com/g/1200/900'}
                imageType={props.imageData['media_type']}
                imageTitle={props.imageData['title']} />
            );
        }
        return (
            <NasaCardImg 
                imageUrl={props.imageData['url']}
                imageType={props.imageData['media_type']}
                imageTitle={props.imageData['title']} />
        );
      }

    return (
        <Card>
            <NasaCardTitle
                imageTitle={props.imageData['title']} />
            <NasaCardImg 
                imageUrl={props.imageData['url']}
                imageType={props.imageData['media_type']}
                imageTitle={props.imageData['title']}
                loading={props.loading}
                onLoad={props.onLoad} />
            <NasaCardBody 
                    imageDate={props.imageData['date']} 
                    imageDesc={props.imageData['explanation']} />
        </Card>
    )
}

export default NasaCard;
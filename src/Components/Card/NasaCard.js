import React from 'react';
import NasaCardBody from './NasaCardBody';
import NasaCardImg from './NasaCardImg';
import NasaCardTitle from './NasaCardTitle';
import styled from 'styled-components';
import './NasaCard.css';

const NasaCard = (props) => {
    return (
        <Card loading={props.loading ? 1 : 0} className="max-w-full rounded overflow-hidden shadow-lg">
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

const Card = styled.div`
    opacity: ${props => (props.loading ? 0 : 1) }
    transition: opacity 1s;
`;

export default NasaCard;
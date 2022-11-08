import React from 'react'
import Map from '../Icons/map'
// import Data from 'data'
export default function Hero(props) {
    return (
        <div className='hero-div'>
            
            <div>
                <img className='location-img' src={props.item.imageUrl} />
            </div>
            <div>
                <Map />
                <span>{props.item.location}</span>
                <a href={props.item.googleMapsUrl}>View on Google Maps</a>
                <h1>{props.item.title}</h1>
                <h3>{props.item.startDate}-{props.item.endDate}</h3>
                <p>{props.item.description}</p>
            </div>
        </div>
    )
}
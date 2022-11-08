import React from 'react'
import Map from '../Icons/map'
// import Data from 'data'
export default function Hero(props) {
    return (
        <div className='hero-div'>
            
            <div>
                <img className='location-img' src={props.item.imageUrl} />
            </div>
            <div className='hero-content'>
                <div className='first-line'>
                    <Map className='location-icon' />
                    <span className='hero-location'>{props.item.location.toUpperCase()}</span>
                    <a className='hero-link' href={props.item.googleMapsUrl}>View on Google Maps</a>
                </div>
                
                <h1 className='hero-title'>{props.item.title}</h1>
                <h3 className='hero-date'>{props.item.startDate} - {props.item.endDate}</h3>
                <p className='hero-description'>{props.item.description}</p>
                <div className='empty-div'></div>
            </div>
        </div>
    )
}
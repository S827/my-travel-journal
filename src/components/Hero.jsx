import React from 'react'
import Map from '../Icons/map'
// import Data from 'data'
export default function Hero(props) {
    return (
        <div className='hero-div'>
            {props.item.title}
            <div>
                <img className='location-img' src={props.item.imageUrl} />
            </div>
            <div>
                <Map />
            </div>
        </div>
    )
}
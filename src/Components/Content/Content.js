import React from 'react'
import './Content.css'
import { ImLocation } from 'react-icons/im'

function Content(props) {
    return (
        <div className='cont-cont'>
            <img src={`../../Images/${props.img}`} alt="" className='cont-img' />
            <div className='cont-d'>
                <div className='cont-short'>
                    < ImLocation className="cont-logo" />
                    <h5 className='cont-location'>{props.location}</h5>
                    <a href={props.google} className='google-map'>view on Google Maps</a>
                </div>
                <h1 className='cont-title'>{props.title}</h1>
                <h3 className='cont-date'>{props.date}</h3>
                <p className='cont-descri'>{props.description}</p>
            </div>
        </div>
    )
}

export default Content

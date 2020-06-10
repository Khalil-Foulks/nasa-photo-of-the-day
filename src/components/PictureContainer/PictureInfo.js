import React, { useState, useEffect } from 'react'

export default function PictureInfo(props) {
    const { picInfo } = props

    return(
        <div className="pictureContainer" >
            <div> 
                <p>Photographer: {props.picInfo.copyright}</p>
                <p>Captured on: {props.picInfo.date}</p>
                <p>{props.picInfo.title}</p>
            </div>
            <img 
                alt = {props.picInfo.title}
                className = "picImage"
                src= {props.picInfo.url}
            />
            <p>{props.picInfo.explanation}</p>
        </div>
    )
}
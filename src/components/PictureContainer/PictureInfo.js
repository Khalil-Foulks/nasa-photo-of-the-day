import React, { useState, useEffect } from 'react'

import Picture from './Picture';

export default function PictureInfo(props) {
    //const { picInfo } = props

    return(
        <div className="pictureInfoContainer" >
            <div> 
                <p>Photographer: {props.picInfo.copyright}</p>
                <p>Captured on: {props.picInfo.date}</p>
                <p>{props.picInfo.title}</p>
            </div>
            <Picture title = {props.picInfo.title} url={props.picInfo.url}/>
            <p>{props.picInfo.explanation}</p>
        </div>
    )
}
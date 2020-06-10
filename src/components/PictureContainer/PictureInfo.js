import React, { useState, useEffect } from 'react'

export default function PictureInfo(props) {
    const { picInfo } = props

    return(
        <div className="pictureContainer" >
            <div> Photographer: {props.picInfo.copyright}</div>
        </div>
    )
}
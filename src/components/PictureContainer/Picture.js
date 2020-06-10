import React from 'react'

export default function Picture(props) {
    //const { picInfo } = props

    return(
        <div className="pictureImageContainer" >
            <img 
                alt = {props.title}
                className = "picImage"
                src= {props.url}
            />
        </div>
    )
}
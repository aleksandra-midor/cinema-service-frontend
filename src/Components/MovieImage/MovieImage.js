import React from 'react';
import './MovieImage.scss'
import Image from '../../Components/Image/Image';

function MovieImage (props) {
  return (
    <div>
     <Image src={props.src} title={props.title}/>
     <p>{props.title}</p>
    </div>
  )
}

export default MovieImage;
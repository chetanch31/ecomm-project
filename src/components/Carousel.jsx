import React from 'react'
import img1 from '../img/1.jpg'
import img2 from '../img/2.jpg'
import img3 from '../img/3.jpg'
import img4 from '../img/4.jpg'
import img5 from '../img/5.jpg'
import '../../slick-1.8.1/slick/slick'
import $ from 'jquery'; // Import jQuery
import 'slick-carousel'; // Import Slick library

const Carousel = () => {
  return (
  <div data-slick='{"slidesToShow": 4, "slidesToScroll": 4}'>
    <div><img src={img1} /></div>
    <div><img src={img2} /></div>
    <div><img src={img3} /></div>
    <div><img src={img4} /></div>
    <div><img src={img5} /></div>
  </div>
  )
}

export default Carousel
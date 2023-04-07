import React from "react";
import { Carousel } from "react-bootstrap";
import apple1 from './Images/karusel_apple1.jpg'
import apple2 from './Images/karusel_apple2.jpg'
import apple3 from './Images/karusel_apple3.jpg'
import magazin from './Images/magazin.jpg'

export default function Slider() {

  return (
    <Carousel>
      <Carousel.Item style={{ 'height': '735px' }}>
        <img
          className="d-block w-100"
          src={apple1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Ipro®</h3>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ 'height': '735px' }}>
        <img
          className="d-block w-100"
          src={apple2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Ipro®</h3>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ 'height': '735px' }}>
        <img
          className="d-block w-100"
          src={apple3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Ipro®</h3>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ 'height': '735px' }}>
        <img
          className="d-block w-100"
          src={magazin}
          alt="four slide"
        />
        <Carousel.Caption>
          <h3>Ipro®</h3>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}
import React from 'react'
import Slider from 'react-slick';
import { Container } from '../../layout/Container';

const NewProduct = () => {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="sl pt-20 mb-20">
      <Container>
        <Slider {...settings}>

          

        </Slider>

      </Container>
    </div>
  )
}

export default NewProduct
import React from 'react'
import { Container } from '../../layout/Container'
import Slider from 'react-slick'
import banner01 from '/banner01.jpg'
import banner02 from '/banner02.jpg'
import banner03 from '/banner03.jpg'
import { Link } from 'react-router-dom';
import Image from '../../layout/Image'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className=" absolute right-5 top-1/2 -translate-y-1/2 border-2 text-white p-2.5 border-purple-600 bg-transparent  rounded-full text-3xl"
      onClick={onClick}
    >
      <FaAngleRight />

    </div>
  );
}



function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute left-5 top-1/2 -translate-y-1/2 border-2 text-white p-2.5 border-purple-600 bg-transparent  rounded-full text-3xl z-10"
      onClick={onClick}
    >
      <FaAngleLeft />

    </div>
  );
}






const Banner = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    appendDots: dots => (
      <div
        style={{
          position: 'absolute',
          bottom: "22px",
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
        }}
      >
        <ul style={{

          display: "flex",
          gap: "25px",
          margin: "0px"

        }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div className=' active p-4 border-3 border-purple-600 text-[0px] rounded-full'

      >
        {i + 1}
      </div>
    )

  };

  let bannerImg = [

    {
      id: 1,
      src: banner01,
      href: "/child",

    },

    {
      id: 2,
      src: banner02,
      href: "/child",

    },

    {
      id: 3,
      src: banner03,
      href: "/child",

    },
  ]



  return (
    <div >
      <Container className="relative">
        <Slider {...settings} >
          {
            bannerImg.map((item) => (
              <Link className="w-[1400px] h-[328px]" key={item.id} to={item.href}>
                <Image className="w-full h-full object-cover " src={item.src} />
              </Link>
            ))
          }
        </Slider>
      </Container>
    </div>
  )
}

export default Banner
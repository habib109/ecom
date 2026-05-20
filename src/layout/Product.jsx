import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Image from "./Image";

import img1 from "/img1.png";
import img2 from "/img2.png";
import img3 from "/img3.png";
import img4 from "/img4.png";

import { IoStar } from "react-icons/io5";
import {
  FaRegStar,
  FaAngleLeft,
  FaAngleRight
} from "react-icons/fa";

import { RiCheckboxCircleFill } from "react-icons/ri";

export const products = [
  {
    id: 1,
    name: "EX DISPLAY : MSI Pro 16 Flex-036AU...",
    src: img1,
    oldPrice: "$599.00",
    price: "$499.00",
  },

  {
    id: 2,
    name: "EX DISPLAY : MSI Pro 16 Flex-036AU...",
    src: img2,
    oldPrice: "$699.00",
    price: "$499.00",
  },

  {
    id: 3,
    name: "EX DISPLAY : MSI Pro 16 Flex-036AU...",
    src: img3,
    oldPrice: "$799.00",
    price: "$499.00",
  },

  {
    id: 4,
    name: "EX DISPLAY : MSI Pro 16 Flex-036AU...",
    src: img4,
    oldPrice: "$899.00",
    price: "$499.00",
  },

  {
    id: 5,
    name: "EX DISPLAY : MSI Pro 16 Flex-036AU...",
    src: img1,
    oldPrice: "$599.00",
    price: "$499.00",
  },
];

function SampleNextArrow(props) {
  return (
    <div
      onClick={props.onClick}
      className="
      absolute
      right-[-30px]
      top-1/2
      -translate-y-1/2
      z-50
      w-12
      h-12
      rounded-full
      bg-white
      shadow-lg
      flex
      items-center
      justify-center
      cursor-pointer
      "
    >
      <FaAngleRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  return (
    <div
      onClick={props.onClick}
      className="
      absolute
      left-[-30px]
      top-1/2
      -translate-y-1/2
      z-50
      w-12
      h-12
      rounded-full
      bg-white
      shadow-lg
      flex
      items-center
      justify-center
      cursor-pointer
      "
    >
      <FaAngleLeft />
    </div>
  );
}

const Product = () => {

  const settings = {
    dots:false,
    infinite:true,
    speed:500,
    slidesToShow:5,
    slidesToScroll:1,

    nextArrow:<SampleNextArrow/>,
    prevArrow:<SamplePrevArrow/>,

    responsive:[
      {
        breakpoint:1024,
        settings:{
          slidesToShow:3
        }
      },

      {
        breakpoint:768,
        settings:{
          slidesToShow:2
        }
      },

      {
        breakpoint:480,
        settings:{
          slidesToShow:1
        }
      }
    ]
  };

  return (
    <div className="relative">

      <Slider {...settings}>

        {products.map((item)=>(

          <div key={item.id} className="px-3">

            <div className="bg-white">

              <div className="flex items-center gap-1 text-green-500 text-xs mb-3">
                <RiCheckboxCircleFill/>
                <p>in stock</p>
              </div>

              <div className="flex justify-center">
                <Image
                  src={item.src}
                  className="w-[150px] h-[150px]"
                />
              </div>

              <div className="flex items-center gap-2 mt-3">

                <div className="flex text-yellow-500">
                  <IoStar/>
                  <IoStar/>
                  <IoStar/>
                  <IoStar/>
                  <FaRegStar/>
                </div>

                <p className="text-xs text-gray-400">
                  Reviews (4)
                </p>

              </div>

              <Link
                to={`/product-details/${item.id}`}
                className="block mt-2 text-sm hover:text-blue-500"
              >
                {item.name}
              </Link>

              <p className="line-through text-gray-400 mt-2">
                {item.oldPrice}
              </p>

              <h2 className="text-2xl font-bold">
                {item.price}
              </h2>

            </div>

          </div>

        ))}

      </Slider>

    </div>
  );
};

export default Product;
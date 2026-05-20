import React from 'react';
import { Link } from 'react-router-dom';
import Image from './Image';
import pimg1 from '/pimg1.png';
import pimg2 from '/pimg2.png';
import pimg3 from '/pimg3.png';
import pimg4 from '/pimg4.png';
import pimg5 from '/pimg5.png';
import { IoStar } from 'react-icons/io5';
import { FaRegStar } from 'react-icons/fa';
import { RiCheckboxCircleFill } from 'react-icons/ri';

const CustomBuildersProduct = () => {
    let productCard = [
        { id: 1, name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...", src: pimg1, stock: 'in stock', star: <IoStar />, star2: <FaRegStar />, revew: "Reviews (4)", Currentprice: "$499.00 ", disPrice: "$499.00 ", stockI: <RiCheckboxCircleFill /> },
        { id: 2, name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...", src: pimg2, stock: 'in stock', star: <IoStar />, star2: <FaRegStar />, revew: "Reviews (4)", Currentprice: "$499.00 ", disPrice: "$499.00 ", stockI: <RiCheckboxCircleFill /> },
        { id: 3, name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...", src: pimg3, stock: 'in stock', star: <IoStar />, star2: <FaRegStar />, revew: "Reviews (4)", Currentprice: "$499.00 ", disPrice: "$499.00 ", stockI: <RiCheckboxCircleFill /> },
        { id: 4, name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...", src: pimg4, stock: 'in stock', star: <IoStar />, star2: <FaRegStar />, revew: "Reviews (4)", Currentprice: "$499.00 ", disPrice: "$499.00 ", stockI: <RiCheckboxCircleFill /> },
        { id: 5, name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...", src: pimg4, stock: 'in stock', star: <IoStar />, star2: <FaRegStar />, revew: "Reviews (4)", Currentprice: "$499.00 ", disPrice: "$499.00 ", stockI: <RiCheckboxCircleFill /> },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {productCard.map((data) => (
                <Link
                    key={data.id}
                    to={`/product-details/${data.id}`}
                    className="block px-6 hover:shadow-md transition-shadow duration-200"
                >
                    <div className="stoc flex gap-1.5 items-center text-green-500">
                        <span>{data.stockI}</span>
                        <p className="text-green-500 text-left">{data.stock}</p>
                    </div>

                    <Image src={data.src} className="h-[150px] w-[150px]" />

                    <div className="ic flex items-center gap-[3px]">
                        <p className='text-yellow-500 flex gap-1 text-[13px]'>
                            {data.star}{data.star}{data.star}{data.star}
                            <span className='text-black'>{data.star2}</span>
                        </p>
                        <p className='font-normal text-xs text-[#8C8C8C]'>{data.revew}</p>
                    </div>

                    <p className="text-left font-normal font-popins text-[13px] max-w-[185px] mt-1.5 text-black">{data.name}</p>
                    <p className='font-normal font-popins text-[14px] text-[#666666] mt-2'>{data.disPrice}</p>
                    <p className='font-semibold font-popins text-[18px] text-black'>{data.Currentprice}</p>
                </Link>
            ))}
        </div>
    );
}

export default CustomBuildersProduct;

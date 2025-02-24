import React from 'react';
import Image from './Image';
import img1 from '/img1.png';
import img2 from '/img2.png';
import img3 from '/img3.png';
import img4 from '/img4.png';
import { IoStar } from 'react-icons/io5';
import { FaRegStar } from 'react-icons/fa';
import { RiCheckboxCircleFill } from 'react-icons/ri';

const ProdCard = () => {
    let productCard = [
        { id: 1, name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...", src: img1,  stock: 'in stock', star:<IoStar />, star2:<FaRegStar />, revew:"Reviews (4)", Currentprice : "$499.00 " , disPrice: "$499.00 " ,stockI : <RiCheckboxCircleFill />
        },

        { id: 2, name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...", src: img2, stock: 'in stock', star:<IoStar />, star2:<FaRegStar />, revew:"Reviews (4)", Currentprice : "$499.00 " , disPrice: "$499.00 ", stockI : <RiCheckboxCircleFill /> },
        
        { id: 3, name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...", src: img3, stock: 'in stock', star:<IoStar />, star2:<FaRegStar />, revew:"Reviews (4)", Currentprice : "$499.00 " , disPrice: "$499.00 ", stockI : <RiCheckboxCircleFill /> },

        { id: 4, name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...", src: img4, stock: 'in stock', star:<IoStar />, star2:<FaRegStar />, revew:"Reviews (4)", Currentprice : "$499.00 " , disPrice: "$499.00 ", stockI : <RiCheckboxCircleFill /> },

      
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  ">
            {productCard.map((data) => (
                <div key={data.id} className=" px-6">
                    <div className="stoc flex gap-1.5 items-center text-green-500">
                        <span>{data.stockI}</span>
                    <p className="text-green-500 text-left"> {data.stock}</p>
                    </div>
                    <Image src={data.src} className="h-[150px] w-[150px]" />
                    
                        <div className="ic flex items-center gap-[3px] ">
                        <p className='text-yellow-500 flex gap-1 text-[13px]'>{data.star}
                        {data.star}{data.star}{data.star} <span className='text-black'> {data.star2}</span> </p> <p className='font-normal text-xs text-[#8C8C8C]'>{data.revew}</p>
                        </div>
                        <p className=" text-left font-normal font-popins text-[13px] max-w-[185px] mt-1.5 ">{data.name}</p>
                        <p className='font-normal font-popins text-[14px] text-[#666666] mt-2'>{data.disPrice}</p>
                        <p className='font-semibold font-popins text-[18px] text-black'>{data.Currentprice}</p>
                    
                    
                </div>
            ))}
        </div>
    );
}

export default ProdCard;

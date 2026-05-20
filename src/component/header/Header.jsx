import React, { useState } from 'react'
import { FaAngleDown, FaSquareInstagram } from 'react-icons/fa6'
import { RiFacebookBoxFill } from 'react-icons/ri'
import { Container } from '../../layout/Container'
import { CiTimer } from 'react-icons/ci'
import { IoLocationSharp } from 'react-icons/io5'
import { MdAddIcCall } from 'react-icons/md'
const Header = () => {

  const [open, setopen] = useState (false)

 const toggleBr = ()=>{
  setopen(!open)
 }

  return (
    <>

      <header className=' bg-black '>
        <Container>
          <div className="  justify-between items-center gap-2 text-[12px] font-semibold text-white py-3 flex">

            <p className=" flex items-center gap-1 relative"> <span className="text-[#A2A6B0]">Mon-Thu:</span>  9:00 AM - 5:30 PM
          <span  className="cursor-pointer p-2" ><FaAngleDown  onClick={toggleBr}/></span>

      
             {
              open && ( <div className="shopinfo  animate-dropdown absolute top-[165%] left-0 bg-white text-black w-[300px] pt-2.5 pr-6 pl-2 py-4 z-10 shadow-neutral-600">
              <div className="time flex gap-3 mb-4">
                <div className="text-2xl text-gray-600 mt-1">
               <CiTimer className='text-blue-500'/>
                </div>
                <div className="text-sm">
                  <p className="font-semibold text-black mb-1">We are open:</p>
                  <p className="text-[#A2A6B0]">
                    <span className="inline-block w-20 ">Mon-Thu:</span> <span className="text-black font-bold  "> 9:00 AM - 5:30 PM</span>
                  </p>
                  <p className="text-[#A2A6B0]">
                    <span className="inline-block w-20">Fri:</span> <span className="text-black font-bold"> 9:00 AM - 5:30 PM</span>
                  </p>
                  <p className="text-[#A2A6B0]">
                    <span className="inline-block w-20"> Sat: </span> <span className="text-black font-bold"> 11:00 AM - 5:00 PM</span>
                  </p>
                </div>
              </div>

              <div className="addd flex gap-3 mb-4">
                <div className="text-2xl text-gray-600 mt-1">
                <IoLocationSharp className="text-blue-500" />
                </div>
                <div className="text-sm">
                  <p className="text-black font-semibold text-[14px] font-popins">Address: 1234 Street Adress, City Address, 1234</p>
                </div>
              </div>

              <div className="phon flex gap-3">
                <div className="text-2xl text-gray-600 mt-1">
                <MdAddIcCall className="text-blue-500" />


                </div>
                <div className="text-sm">
                  <p className="font-semibold text-black mb-1">
                    <a href="tel:0012345678" className="hover:underline hover:text-blue-600 transition">
                      Phones: <span className="text-blue-500"> (00) 1234 5678</span>
                    </a>
                  </p>
                  <p className="text-[#A2A6B0]">
                    <a href="mailto:shop@email.com" className="hover:underline hover:text-blue-600 transition">
                      E-mail: <span className=" text-blue-500">shop@email.com</span>
                    </a>
                  </p>
                </div>
              </div>

            </div>
            ) }

            </p>

            <div className=" tme text-[#ACACAC] flex  gap-1 items-center justify-center text-xs" >
              Visit our showroom in 1234 Street Adress City Address, 1234

              <h1 className="text-white relative ml-1 after:content-[''] after:absolute after:w-[73px] after:h-[2px] after:bg-white after:left-1/2 after:-bottom-[1px] after:-translate-x-1/2 after:rounded-[1px]  "> Contact Us </h1>

            </div>

            <div className=" icon flex gap-1.5 items-center">
              <p>Call Us: (00) 1234 5678</p>
              <RiFacebookBoxFill />
              <FaSquareInstagram />

            </div>

          </div>
        </Container>
      </header>
    </>
  )
}

export default Header
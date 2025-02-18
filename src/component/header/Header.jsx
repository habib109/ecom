import React from 'react'
import { FaAngleDown, FaSquareInstagram } from 'react-icons/fa6'
import { RiFacebookBoxFill } from 'react-icons/ri'
import { Container } from '../../layout/Container'
import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <header className=' bg-black'>
      <Container>
        <div className="  justify-between items-center gap-2 text-[12px] font-semibold text-white py-3 flex">

          <p className=" flex items-center gap-1 relative"> <span className="text-[#A2A6B0]">Mon-Thu:</span>  9:00 AM - 5:30 PM
            <FaAngleDown />
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
  )
}

export default Header
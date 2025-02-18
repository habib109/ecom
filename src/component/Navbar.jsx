import React from 'react'
import { Container } from '../layout/Container'
import { Link, NavLink } from 'react-router'
import Image from '../layout/Image'
import logo from '/Logo.png'
import iman from '/iman.png'
import { FaSearch, FaShoppingCart } from 'react-icons/fa'



const Navbar = () => {

  let navMenu = [
    {
      id: 1,
      name: "Laptops",
      path: "laptops",
      status: "active"

    },

    {
      id: 2,
      name: "Desktop PCs",
      path: "desktop-pcs",
      status: "active"

    },

    {
      id: 3,
      name: "Networking Devices",
      path: "networking-devices",
      status: "active"
      

    },

    {
      id: 4,
      name: "Printers & Scanners",
      path: "printers-&-scanners",
      status: "active"

    },

    {
      id: 5,
      name: "PC Parts",
      path: "pc-parts",
      status: "active"

    },

    {
      id: 6,
      name: "All Other Products",
      path: "all-other-products",
      status: "active"

    },

    {
      id: 7,
      name: "Repairs",
      path: "repairs",
      status: "active"

    },

  ]
  return (
    <>
   
   <nav className=" bg-white py-2.5 ">
   <Container className="flex justify-between items-center">

    <div className="items-center gap-14 flex ">
    <Image src={logo}/>
        <ul className="flex gap-6" >
          {navMenu.map((item,) => (
            <li key={item.id} className=" font-popins font-semibold text-[14px]">
           <NavLink to={item.path}>
           {item.name}
           </NavLink>
            </li>
          ))}

        </ul>
    </div>

    <div className="icon">

      <Link className=" flex gap-6 items-center">
      <FaSearch />
      <FaShoppingCart />
      <Image src={iman}/> '
    
      </Link>

     
    </div>
  
        </Container>

     

      </nav>
   

    </>
  )
}

export default Navbar
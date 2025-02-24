import React, { useState } from 'react';
import { Container } from '../layout/Container';
import { NavLink } from 'react-router-dom';
import Image from '../layout/Image';
import logo from '/Logo.png';
import iman from '/iman.png';
import { FaSearch } from 'react-icons/fa';
import { IoCloseSharp } from 'react-icons/io5';
import { TfiShoppingCart } from 'react-icons/tfi';
import ProdCard from '../layout/ProdCard';
import Logoimg from '../layout/Logoimg';

const Navbar = () => {
  let navMenu = [
    {
      id: 1,
      name: "Laptops",
      path: "laptops",
      megaMenu: [
        { name: "Everyday Use Notebooks" },
        { name: "MSI Workstation Series" },
        { name: "MSI Prestige Series" },
        { name: "Gaming Notebooks" },
        { name: "Tablets And Pads" },
        { name: "Netbooks" },
        { name: "Infinity Gaming Notebooks" },
      ]


    },
    { id: 2, name: "Desktop PCs", path: "desktop-pcs" },
    { id: 3, name: "Networking Devices", path: "networking-devices" },
    { id: 4, name: "Printers & Scanners", path: "printers-&-scanners" },
    { id: 5, name: "PC Parts", path: "pc-parts" },
    { id: 6, name: "All Other Products", path: "all-other-products" },
    { id: 7, name: "Repairs", path: "repairs" }

  ];

  let [show, setShow] = useState(false);

  let openSrcbx = () => {
    setShow(!show);
  };


  return (
    <>

      <nav className="bg-white">
        <Container className="flex justify-between items-center relative">
          <div className="items-center gap-14 flex">
            <Image className="py-2" src={logo} alt="Logo" />

            <ul className={`gap-6 ${show ? 'hidden' : 'flex'}`}>
              {navMenu.map((item) => (
                <li
                  key={item.id}
                  className="font-popins font-semibold text-[14px] group py-8 cursor-pointer
                   ">
                  <NavLink to={item.path} className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
                    {item.name}

                  </NavLink>

                  {
                    item.megaMenu && <div className="megamenu group-hover:opacity-100 group-hover:visible w-full h-[543px] grid grid-cols-7 z-30 grid-rows-3 absolute top-full left-0 opacity-0 invisible  ">

                      <div className="col-span-2 row-span-2 bg-white p-5 border-r-[1px] border-slate-950">


                        <ul className="flex flex-col gap-5">
                          {item.megaMenu.map((data, index) => (
                            <li key={index} className="cursor-pointer font-popins font-semibold text-xs">
                              {data.name}
                            </li>
                          ))}
                        </ul>

                      </div>

                      <div className="col-span-5 row-span-2 bg-white p-5">
                        <ProdCard />
                      </div>

                      <div className="col-span-7 row-span-1 bg-white p-5">
                        <Logoimg />
                      </div>
                    </div>
                  }
                </li>  
              ))}
            </ul>


            <div className={`search relative ${show ? 'block' : 'hidden'}`}>
              <input
                type="text"
                placeholder="Search entire store here..."
                className="w-[1126px] py-5 bg-sky-100 rounded-4xl px-14"
              />
              <FaSearch className="absolute top-1/2 right-5 -translate-y-1/2" />
            </div>

          </div>

          <div className="icon flex gap-6 items-center">
            <button onClick={openSrcbx} className="text-xl">
              {show ? <IoCloseSharp /> : <FaSearch />}
            </button>

            <TfiShoppingCart className="text-xl" />
            <Image src={iman} alt="User" />
          </div>
        </Container>
      </nav>

    </>
  );
};

export default Navbar;

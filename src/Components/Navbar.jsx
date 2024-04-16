import React, { useState } from 'react'
import logo from '../assets/logo7.jpg'
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import {Link} from 'react-scroll'


const Navbar = () => {

    const [menu,setMenu] = useState(false);

    const navItems = [
        {id: 1,text: "Home"},
        {id: 2,text: "About"},
        {id: 3,text: "Service"},
        {id: 4,text: "Faq"},
        {id: 5,text: "Contact"},
    ]

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 bg-white z-50 h-20 shadow-md fixed top-0 right-0 left-0'>
          <div className='flex justify-between items-center h-25'>
            <div className='flex space-x-2 items-center'>
                <img src={logo} alt="" className='w-[80px] h-[80px] rounded-full'/>
                <h1 className='font-semibold flex flex-col  cursor-pointer'>CAREER BUILDER <span>PROFESSIONAL STUDIES</span>                
                </h1>
            </div>
            {/*desktop Navbar */}
            <div>
                <ul className='md:flex space-x-8 hidden text-xl'>
                    {navItems.map(({id,text})=>{
                        return <li className='hover:scale-105 duration-200 cursor-pointer' key={id}>
                        <Link to={text}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        activeClass='active'
                        >{text}</Link>
                        </li>
                    })}
                </ul>
                <div className='md:hidden' onClick={()=>setMenu(!menu)}>{menu ? <IoCloseSharp size={24}/> : <AiOutlineMenu size={24}/>}</div>
            </div>
          </div>
           {/*mobile Navbar */}
           {menu && (
            <div className='bg-white'>
          <ul className='md:hidden flex flex-col justify-center items-center h-50 space-y-3 text-xl'>
          {navItems.map(({id,text})=>{
                        return <li className='hover:scale-105 duration-200 cursor-pointer' key={id}>
                        <Link to={text}
                        onClick={()=>setMenu(!menu)}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        activeClass='active'
                        >{text}</Link>
                        </li>
                    })}
                </ul>
          </div>
           )}
          
      </div>
    </>
  )
}

export default Navbar
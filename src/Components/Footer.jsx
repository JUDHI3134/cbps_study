import React from 'react'
import { FaFacebook,FaInstagram,FaYoutube,FaTwitter, FaWhatsapp } from 'react-icons/fa6'

const Footer = () => {
  return (
    <>
    <hr />
     <footer className='py-12'>
     <div className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
        <div className='flex flex-col justify-center items-center'>
        <div className='flex space-x-4'>
            <a href="https://www.facebook.com" target='_blank'><FaFacebook size={24}/></a>
            <a href="https://www.instagram.com/b.judhistir/?igsh=eGgwNHZ5bHBhaGpn" target='_blank'><FaInstagram size={24}/></a>
            <a href="https://www.twitter.com" target='_blank'><FaTwitter size={24}/></a>
            <a href="https://www.youtube.com" target='_blank'><FaYoutube size={24}/></a>
            <a href="https://wa.me/8117036222" target='_blank'><FaWhatsapp size={24} className="text-green-700" /></a>
        </div>
        <div className='mt-8 border-t border-gray-800 pt-8 flex flex-col items-center'>
           <p className='text-sm'>© 2024 Career Builder Professional Studies(CBPS)</p>
           <p className='text-sm'>Design & developed by PJ IT Solution</p>
        </div>
        </div>
     </div>
     </footer> 
    </>
  )
}

export default Footer

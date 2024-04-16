import React,{useRef} from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

import emailjs from '@emailjs/browser';

const Contact = () => {


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_33399pk', 'template_f6c7xx7', form.current, {
        publicKey: 'LrU6LubESW7kHD7Pc',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset();
  };

    return (
      <>
       <div name="Contact" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
       <h1 className='text-4xl font-bold text-center'>Contact Us</h1>
       <hr className='h-1 bg-black rounded-lg w-[200px] mx-auto my-1'/>
            <div className='flex flex-col md:flex-row'>
               <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
               <div>
               <iframe className="mb-5 md:w-[600px] md:h-[350px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5222.872944690654!2d84.84323421996378!3d22.235188486181606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a201904b33256d1%3A0xb2dc9bc61045dac0!2sMadhusudan%20palli%20(%20MS%20palli%20)!5e0!3m2!1sen!2sin!4v1712469760123!5m2!1sen!2sin" style={{border:0}}allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
               </div>
               <h1 className='text-xl font-bold mb-5 text-center'>REACH US THROUGH</h1>
          <ul className="space-y-3 mt-10 justify-center items-center">
            <li className="flex gap-2 items-center"><a href="https://maps.app.goo.gl/2HFLBVJNsKZc5NjX7" target="_blank"><FaLocationDot className="text-blue-500" /></a>Madhusudan Pali ward No 11 Rourkela pin-769013</li>
            <li className="flex gap-2 items-center"><a href="tel:+918117036222"><FaPhone className="text-blue-500" /></a>+91 8117036222</li>
            <li className="flex gap-2 items-center"><a href="https://wa.me/8117036222" target="_blank"><FaWhatsapp className="text-green-700" /></a>+91 8117036222</li>
            <li className="flex gap-2 items-center"><a href="mailto:cbpsrourkela@gmail.com"><IoMail className="text-red-500" /></a>cbpsrourkela@gmail.com</li>
          </ul>
           
               </div>
  
                <div className='md:w-1/2 md:ml-48 md:mt-20 order-1 mt-8'>
                {/* form */}
                <div>
                    <form ref={form} onSubmit={sendEmail} className='bg-slate-200 px-8 py-6 rounded-lg'>
                    <h1 className='text-xl text-center font-semibold mb-4'>Send Your Message</h1>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className='flex flex-col mb-4'>
                  <label className='block text-gray-700'>FullName </label>
                   <input className='shadow appearance-none border rounded-lg px-3 py-2 text-gray-700 leading-tight focus:outline-none' type="text" name="from_name" placeholder='Enter your FullName' required  />
                    </div>
                    <div className='flex flex-col mb-4'>
                <label className='block text-gray-700'>Email Address</label>
                <input className='shadow appearance-none border rounded-lg px-3 py-2 text-gray-700 leading-tight focus:outline-none' type="email" name="from_email" placeholder='Enter your Email' required  />
               </div>
               <div className='flex flex-col mb-4'>
                <label className='block text-gray-700'>Phone Number </label>
                <input className='shadow appearance-none border rounded-lg px-3 py-2 text-gray-700 leading-tight focus:outline-none' type="phone" name="from_phone" placeholder='Enter your Phone Number' required />
            </div>
               <div className='flex flex-col mb-4'>
                <label className='block text-gray-700'>Gender </label>
                <select name="from_gender" id="gender" className="shadow border rounded-lg px-3 py-2 text-gray-700 leading-tight focus:outline-none" required>
                    <option value="s">SELECT</option>
                    <option value="male">MALE</option>
                    <option value="female">FEMALE</option>
                    <option value="rather">RATHER NOT SAY...</option>
                  </select>
            </div>
               <div className='flex flex-col mb-4'>
                <label className='block text-gray-700'>City </label>
                <select name="from_city" id="city" className="shadow border rounded-lg px-3 py-2 text-gray-700 leading-tight focus:outline-none" required>
                    <option value="s">SELECT</option>
                    <option value="rourkela">ROURKELA</option>
                    <option value="sambalpur">SAMBALPUR</option>
                    <option value="jharsuguda">JHARSUGUDA</option>
                    <option value="jharsuguda">SUNDERGARH</option>
                    <option value="jharsuguda">RAJGANG PUR</option>
                    <option value="jharsuguda">SINDEGA</option>
                    <option value="jharsuguda">CHAKRADHAR PUR</option>
                    <option value="jharsuguda">MONOHAR PUR</option>
                    <option value="jharsuguda">BONEIGARH</option>
                    <option value="jharsuguda">BNONEI</option>
                    <option value="jharsuguda">BANDAMUNDA</option>
                    <option value="jharsuguda">KUCHINDA</option>
                    <option value="jharsuguda">BIRMITRA PUR</option>
                    <option value="jharsuguda">LATHIKOTHA</option>
                    <option value="jharsuguda">LOHUNI PODA</option>
                    <option value="jharsuguda">DEOGHARH</option>
                    <option value="jharsuguda">VDVYAS</option>
                    <option value="jharsuguda">DALPOSH</option>
                    <option value="jharsuguda">CIVIL TOWN</option>
                    <option value="jharsuguda">RSP SECTORS</option>
                    <option value="jharsuguda">CHEEND</option>
                  </select>
            </div>
               <div className='flex flex-col mb-4'>
                <label className='block text-gray-700'>Course Required </label>
                <select name="from_course" id="course" className="shadow border rounded-lg px-3 py-2 text-gray-700 leading-tight focus:outline-none" required>
                <option value="s">SELECT</option>
                    <option value="x">CLASS X</option>
                    <option value="xii">CLASS XII</option>
                    <option value="ba">BA (GENERAL)</option>
                    <option value="bsc">B.Sc.</option>
                    <option value="bcom">B.Com.</option>
                    <option value="ma">MA</option>
                    <option value="msc">M.Sc.</option>
                    <option value="mcom">M.Com.</option>
                    <option value="mba">MBA</option>
                    <option value="mca">MCA</option>
                    <option value="bba">BBA</option>
                    <option value="bca">BCA</option>
                    <option value="blib">B.Lib</option>
                    <option value="mlib">M.Lib</option>
                    <option value="bsw">BSW</option>
                    <option value="msw">MSW</option>
                    <option value="diploma">Diploma Engg.</option>
                    <option value="btech">B. Tech Engg.</option>
                    <option value="mtech">M.Tech</option>
                    <option value="hotel">Hotel Management</option>
                    <option value="dca">DCA</option>
                    <option value="pgdca">PGDCA</option>
                    <option value="llb">LLB</option>
                    <option value="dpharm">D.Pharm</option>
                    <option value="bpharm">B.Pharm</option>
                    <option value="bed">B.Ed</option>
                  </select>
            </div>
            <div className='flex flex-col mb-4'>
                <label className='block text-gray-700'>Other Course </label>
                <input className='shadow appearance-none border rounded-lg px-3 py-2 text-gray-700 leading-tight focus:outline-none' type="text" name="from_othercourse" placeholder="Enter any other course" />
            </div>
            <div className='flex flex-col mb-4'>
                <label className='block text-gray-700'>Type of course </label>
                <select name="from_coursetype" id="coursetype" className="shadow border rounded-lg px-3 py-2 text-gray-700 leading-tight focus:outline-none" required>
                <option value="s">SELECT</option>
                <option value="regular">Regular Mode</option>
                <option value="distance">Distance Mode</option>
                  </select>
            </div>
            <div className='flex flex-col mb-4'>
                <label className='block text-gray-700'>Address </label>
                <input className='shadow appearance-none border rounded-lg px-3 py-2 text-gray-700 leading-tight focus:outline-none' type="text" name="from_address" placeholder="Enter address here" required/>
            </div>
            <div className='flex flex-col mb-4'>
                <label className='block text-gray-700'>Message</label>
                <textarea className='shadow appearance-none border rounded-lg px-3 py-2 text-gray-700 leading-tight focus:outline-none' type="text" name="message" placeholder='Enter Message Here' required />
            </div>
            <button type='submit' className='bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-200'>Submit</button>


                    </div>
                    </form>
                </div>

                 </div>
            </div>
        </div> 
       <hr />
      </>
    )
  }
  
  export default Contact
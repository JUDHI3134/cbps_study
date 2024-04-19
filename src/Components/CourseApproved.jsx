import React from 'react'
import img1 from '../../public/link1.jpg'
import img2 from '../../public/link2.jpg'
import img3 from '../../public/link3.jpg'

const CourseApproved = () => {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
     <div className=' mt-10 mb-8'>
     <h1 className='text-3xl font-bold text-center'>All Courses Are Approved By</h1>
      <hr  className='h-1 bg-black w-40 mx-auto rounded-lg mt-1'/>
     </div>
         <div className='flex gap-4 items-center justify-center'>
            <a href="https://www.aicte-india.org/" target='_blank'><img src={img1} width={75} height={75} alt="" /></a>
            <a href="https://www.ugc.gov.in/" target='_blank'><img src={img2} width={80} height={80} alt="" /></a>
            <a href="https://ncte.gov.in/Website/Index.aspx" target='_blank'><img src={img3} width={90} height={90} alt="" /></a>
         </div>
      </div>
    </>
  )
}

export default CourseApproved

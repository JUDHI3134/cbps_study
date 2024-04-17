import React from 'react'

const Who = () => {
  return (
    <>
      <div name="Who" className='max-w-screen-2xl container mx-auto px-4 md:px-16'>
      <div className='mb-12'>
        <h1 className='text-3xl font-bold text-center mt-12'>Who We Are</h1>
        <hr  className='w-20 h-1 rounded-lg mx-auto bg-black mt-1'/>
      </div>
      <div>
        <p className='mb-6'><span className='text-blue-600'>Career Builder Professional Studies</span> Rourkela is one of the preuier Educational consulting and Technical Guidance Center. Backed with Well Qualified Professionals, Who have immense Experience in Academic domain in the felids of Career Guidance, Academic Consulting and Student services. It is well lead by domain specialists. We are Govt approved Enterprise Registered with MSME (Ministry of Micro, Small & Medium Enterprises) Bearing Registration No - UDYAM-OD-30-000-1595.</p>
        <p>At Career Builder Professional Studies Rourkela We undertake some important academic functions which are very essential in selecting the Right Subjects along with Right Boards or universities. Our Basic function is to focus on following students:</p>
        <ul className='mt-3'>
            <li className='font-semibold list-disc ml-2'>Dropped and Discontinued Students</li>
            <li className='font-semibold list-disc ml-2'>Working Professionals</li>
            <li className='font-semibold list-disc ml-2'>Regular Students</li>
        </ul>
      </div>
      <div className='mt-8'>
            <h1 className='font-semibold text-xl'>Distance Mode/Regular Mode:</h1>
            <p className='mt-3'>At Career Builder Professional Studies(CBPS) Rourkela we understand the need of the students and based on the need and requirements we help the students in choosing the Mode of courses (Regular Mode/Distance Mode/Online Education).</p>
        </div>

      {/* <div className=''> */}
      <div className='flex flex-col md:flex-row justify-between gap-11 mt-12 space-y-2 mb-12'>
        <div className='shadow-2xl p-6'>
        <h1 className='text-xl font-bold'>Our Basic Functions Includes Student Support Functions They Include:</h1>
        <ul className='mt-8 space-y-1'>
            <li className='list-disc ml-1'>Admission or Registration support in Boards and Universities</li>
            <li className='list-disc ml-1'>Guidance on Course ware and Syllabus</li>
            <li className='list-disc ml-1'>Examination Preparatory Materials</li>
            <li className='list-disc ml-1'>Guidance on Practical’s</li>
        </ul>
        </div>

        <div className='shadow-2xl p-6'>
        <h1 className='text-xl font-bold'>Our Core Areas Of Courses</h1>
        <ul className='mt-8 space-y-1'>
          <li className='list-disc ml-1'><span className='font-semibold text-blue-600'>CLASS X</span> - For Dropped Students from Open Schools like NIOS, BOSSE</li>
          <li className='list-disc ml-1'><span className='font-semibold text-blue-600'>CLASS XII</span> - Arts /Commerce/ Science from Open Schooling</li>
          <li className='list-disc ml-1'><span className='font-semibold text-blue-600'>Graduation Courses</span> - B.A., B.Com, B.Sc, BBA, BCA, BSW, B.Lib</li>
          <li className='list-disc ml-1'><span className='font-semibold text-blue-600'>Post-Graduation Courses</span> - M.A., M.Com, M.Sc, MBA, MCA, MSW, M.Lib</li>
          <li className='list-disc ml-1'><span className='font-semibold text-blue-600'>Technical Courses</span> - DIPLOMA (All trades Civil, Mechanical, Electcicals, CS, IT)</li>
          <li className='list-disc ml-1'><span className='font-semibold text-blue-600'>B.Tech Courses</span> - B.Tech (Mechanical, Electricals, Computer Science, IT)</li>
            </ul>
        </div>
      {/* </div> */}
        
      </div>

    </div>
    </>
  )
}

export default Who

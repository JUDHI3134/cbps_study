import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Who from './Components/Who'
import CourseOffer from './Components/CourseOffer'
import Association from './Components/Association'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import Faq from './Components/Faq'
import CourseApproved from './Components/CourseApproved'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Who/>
      <CourseOffer/>
      <Association/>
      <CourseApproved/>
      <Faq/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App

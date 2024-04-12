import React,{useState} from 'react'
import { questions } from '../Data/questions';
import SingleQuestions from './SingleQuestions';

const Faq = () => {

    const [cards,setCards] = useState(questions)
    

  return (
    <>
      <div name="Faq" className='max-w-screen-2xl container mx-auto px-4 md:px-16'>
        <h1 className='text-center font-bold text-3xl mb-8 mt-10'>FAQs</h1>


         <div className='grid grid-cols-1 md:w-[900px] mx-auto'>
           {cards.map((card,index)=>(
            <SingleQuestions {...card} key={index}/>
           ))}
         </div>
      </div>
    </>
  )
}

export default Faq

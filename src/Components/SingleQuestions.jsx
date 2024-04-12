import React, { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa6'

const SingleQuestions = ({question,answer}) => {
    const [showAnswer,setShowAnswer] = useState(false)
  return (
    <>
      <div className=' border-gray-400 rounded-lg bg-white'>
            <article className='flex items-center justify-between p-1 lg:p-2 hover:bg-blue-950 hover:text-white rounded-md'>
                <h2 onClick={()=>setShowAnswer(!showAnswer)}>{question}</h2>
                <ul>
                {!showAnswer && <li><button onClick={()=>setShowAnswer(true)}><FaPlus /></button></li>}
                {showAnswer && <li><button onClick={()=>setShowAnswer(false)}><FaMinus /></button></li>}
                </ul>
            </article>

            <article className='border-t border-gray-400 p-4'>
                {showAnswer && <p>{answer}</p>}
            </article>
        </div>
    </>
  )
}

export default SingleQuestions

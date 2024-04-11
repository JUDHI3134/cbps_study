import isbm from '../assets/isbm.jpg'
import kalinga from '../assets/kalinga.jpg'
import mats from '../assets/mats.jpg'
import niilm from '../assets/niilm.jpg'
import ne_frontier from '../assets/ne_frontier.jpg'
import open_school from '../assets/open_school.jpg'

const Association = () => {

    const cardItem = [
        {
            id:1,
            logo:isbm,
            name:"ISBM UNIVERSITY",
            liveLink:"https://isbmuniversity.edu.in/",
        },
        {
            id:2,
            logo:kalinga,
            name:"KALINGA UNIVERSITY",
            liveLink:"https://admissions.kalingauniversity.ac.in/?utm_source=collegedunia&utm_medium=text11&utm_campaign=online",
        },
        {
            id:3,
            logo:mats,
            name:"MATS UNIVERSITY",
            liveLink:"https://matsuniversity.ac.in/",
        },
        {
            id:4,
            logo:niilm,
            name:"NIILM UNIVERSITY",
            liveLink:"https://www.niilmuniversity.ac.in/",
        },
        {
            id:5,
            logo:ne_frontier,
            name:"NORTH EAST FRONTIER UNIVERSITY",
            liveLink:"https://www.neftu.edu.in/",
        },
        {
            id:6,
            logo:open_school,
            name:"BOARD OF OPEN SCHOOLING AND SKILL EDUCATION",
            liveLink:"https://www.bosse.ac.in/",
        },
    ]

  return (
    <div name="Association" className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
      <div>
       <div className='mb-5'>
       <h1 className='text-4xl font-bold text-center'>Our Associations</h1>
        <hr className='h-1 bg-black rounded-lg w-[200px] mx-auto my-1'/>
       </div>
        <br />
        <div className='grid grid-cols-2 md:grid-cols-4 gap-3 my-10'>
            {cardItem.map(({id,logo,name,liveLink})=>(
                <div className='md:w-[300px] md:h-[300px] rounded-lg border-[2px] shadow-lg p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
                  <a href={liveLink} target='_blank'><img src={logo} className='w-full h-[150px] md:h-[220px] p-1 border-[2px]' alt="" /></a>
                  <div>
                    <div className='font-bold text-xl mb-2 px-2 text-center'>{name}</div>
                    <p className='px-2 text-gray-700'></p>
                  </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Association
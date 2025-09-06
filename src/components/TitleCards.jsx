import { useEffect, useRef } from 'react'
import cards_data from '../assets/cards/Cards_data.js'




function TitleCards() {

  const cardsRef = useRef()

  const handleWheel = (event) => {
    event.preventDefault()
    cardsRef.current.scrollLeft += event.deltaY 
  }

  useEffect(() => {
    cardsRef.current.addEventListener('wheel', handleWheel)
  }, [])

  return (
    <div className='title-cards mt-12 mb-8 '>

      <h2 className='mb-2 text-[25px]'>Popular on Netflix</h2>

      <div className="card-list flex gap-2.5 overflow-x-scroll" ref={cardsRef}>
        {cards_data.map((card, index) => (
          <div className='card relative' key={index}>
            <img src={card.image} alt="" className='w-[240px] rounded-[4px] cursor-pointer max-w-none'/>

            <p className='absolute bottom-2.5 right-2.5'>{card.name}</p>
          </div>
        ))}

      </div>
 
    </div>
  )
}

export default TitleCards
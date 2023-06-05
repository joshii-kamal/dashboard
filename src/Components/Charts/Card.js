import React from 'react'
import "../Dashboard.css"


function Card({data}) {
  return (
    <div className='cardContainer'>
        <span className='cardData'>
            {data.y}
        </span>
        <span className='cardLabel'>
            {data.x}
        </span>
    </div>
  )
}

export default Card

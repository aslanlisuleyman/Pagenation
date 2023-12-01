import React from 'react'
import Card from './Card'

const Cards = ({data}) => {
  return (
    <div className='cards'>
      
        {
            data.map((item,index)=>{
               return <Card item={item} key={index}/>
                
            })
        }

    
    </div>
  )
}

export default Cards
import React from 'react'
import Starsrating from './Starrating'




  
  
export default function filmlist({x}) {
    return (
        <div className="films">
            {x.map(el=>
                
                <div  >
                    <img className='img' src={el.image}/>
                    <h5>{el.film}</h5>

                    <p><Starsrating starsrate={el.rating} /></p>
                    </div>
                )}
        </div>
    )
}

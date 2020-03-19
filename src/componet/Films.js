import React from 'react'
import Starsrating from './Starrating'




  
  
export default function filmlist({x}) {
    return (
        <div className="film">
            {x.map(el=>
                
                <div  >
                    <img className='img' src={el.image}/>
                    <div className="ligne">
                    <h5>{el.film}</h5>

                    <p className='starrr'><Starsrating starsrate={el.rating} /></p>
                    </div>
                    </div>
                )}
        </div>
    )
}

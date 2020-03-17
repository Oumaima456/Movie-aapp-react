import React from 'react'
import Starrating from './Starrating'

function Search({handlesearch ,handlestar,count}) {
    return (
       <section className='searchbox-wrap'>
           <input type='text'placeholder='Search For a movie...'className='searchbox'onChange={(e)=>handlesearch(e)} />

       </section>
    )
}

export default Search

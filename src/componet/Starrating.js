import React from 'react'

export default function starsrating({count , hundelstar= ()=>{} } ){
    let stars=[]
    for ( let i=1;i<6;i++){
        if(i<count)
        stars.push(<span className='golden'>★</span>)
        else{
            stars.push(<span className='normal'>☆</span>)
        }
    }











    return (
        <div>
           {stars} 
        </div>
    )
}

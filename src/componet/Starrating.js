import React from 'react'

export default function starsrating({starsrate , handlestar= ()=>{} } ){
    
    const count=(rate)=> { let stars=[]
    for ( let i=1;i<6;i++){
        if(i<rate)
        stars.push(<span className='golden'onClick={()=>handlestar(i)}>★</span>)
        else{
            stars.push(<span className='normal'onClick={()=>handlestar(i)}>☆</span>)
        }
    } return stars
}



    return (
        <div>
           {count(starsrate)} 
        </div>
    )
}

import React from 'react'

export default function starsrating({count , handlestar= ()=>{} } ){
    let stars=[]
    for ( let i=1;i<6;i++){
        if(i<count)
        stars.push(<span className='golden'onClick={()=>handlestar(i)}>★</span>)
        else{
            stars.push(<span className='normal'onClick={()=>handlestar(i)}>☆</span>)
        }
    }




    return (
        <div>
           {stars} 
        </div>
    )
}

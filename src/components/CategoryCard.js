import React from 'react'

export default function CategoryCard(props) {
  return (
    
      <div style={{
        padding:"5px",
        textAlign:"center"
      }} className="belowNavbarCards">
            <img src={props.imageUrl} alt="grocery pic"  style={{
                height:"50px"
            }}/>
            <h5 style={{
                fontSize:"15px"
            }}>{props.title}</h5>
        </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'

export default function beautyFoodToyProductCard(props) {
    const {imgUrl,title,subTitle,footer}=props
  return (

      <div className="col-md-2" style={{
        height:'300px',
        cursor:'pointer'
    }} >
                <div className="card" style={{
                    height:'300px'
                }} >
                    <img src={imgUrl} className="card-img-top electronicsCardImage" alt="..."/>
                    <div className="card-body electronicsTextAlign">
                        <h5 style={{
                            fontSize:'17px'
                        }} className="electronicsHeadMargin">{title}</h5>
                        <Link to="/products" style={{
                            fontSize:'15px',
                            color:'green'
                        }} >{subTitle}</Link>
                        <p style={{
                            fontSize:'13px'
                        }}>{footer}</p>
                    </div>
                    </div>
                </div>
    
  )
}
 
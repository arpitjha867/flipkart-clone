import React from 'react'
import CategoryCard from './CategoryCard';
import "../styles/Home.css"
import Carousel from './Carousel';
import ElectronicsCard from './electronicsCard';
import Banner from './banner'
import BeautyAndToyCard from './beautyAndToyCard'
import InfoPara from './InfoPara';
import Footer from './footer'
export default function Home() {
  let dataCategoryCard=[{
    imageUrl:'https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100',
    title:'Top offers'
  },
  {
    imageUrl:'https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100',
    title:'Grocery'
  },
  {
    imageUrl:'https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100',
    title:'Mobiles'
  },
  {
    imageUrl:'https://rukminim1.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100',
    title:'Fashion'
  },
  {
    imageUrl:'https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100',
    title:'Electronics'
  },
  {
    imageUrl:'https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100',
    title:'Home'
  },
  {
    imageUrl:'https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100',
    title:'Appliance'
  },
  {
    imageUrl:'https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100',
    title:'Travel'
  },
  {
    imageUrl:'https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100',
    title:'Beauty ,Toys and more'
  },
  {
    imageUrl:'https://rukminim1.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100',
    title:'Two wheelers'
  }
]
  return (
    <div className='container-fluid'>
      <div className="row category-container">
        {/* 12 columns */}
        <div className="col-lg-1 col-md-1  col-sm-1">

        </div>
        {
            dataCategoryCard.map((element,index)=>{
                return (
                    <div className="col-md-1 col-sm-2 belowNavbarCards">
                        <CategoryCard imageUrl={element.imageUrl} title={element.title}/>
                    </div>
                );
            })
        }
      </div>
      <Carousel/>
      <ElectronicsCard/>
      <Banner/>
      <BeautyAndToyCard/>
      <InfoPara/>
      <Footer/>
    
    </div>
  )
}

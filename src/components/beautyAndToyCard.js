import React from 'react'
import BeautyFoodToyProductCard from './beautyFoodToyProductCard'
export default function beautyAndToyCard() {
    let beautyToyProductData=[
        {
            imgUrl:'https://rukminim1.flixcart.com/image/200/200/kzegk280/action-figure/9/v/t/3-30155-mcfarlane-2-5-original-imagbeyyzehpyk2m.jpeg?q=70',
            title:'Action Figure',
            subTitle:'Upto 70% Off',
            footer:'DC, Marvel ..'
        },
        {
            imgUrl:'https://rukminim1.flixcart.com/image/200/200/jxz0brk0/stuffed-toy/n/t/s/4-feet-pink-very-beautiful-best-quality-for-special-gift-125-13-original-imafgv92puzkdytg.jpeg?q=70',
            title:'Soft Toys',
            subTitle:'Upto 70% Off',
            footer:'Soft toyes, fluffy toys ...'
        },
        {
            imgUrl:'https://rukminim1.flixcart.com/image/200/200/kdga1zk0/camera-microphone/8/k/n/3-5mm-clip-microphone-for-youtube-collar-mike-for-voice-original-imafuc79gkuwzwbu.jpeg?q=70',
            title:'Microphones',
            subTitle:'Upto 20% Off',
            footer:'Boya, Hyperx & many more'
        },
        {
            imgUrl:'https://rukminim1.flixcart.com/image/200/200/acoustic-guitar/e/y/y/dd-380c-blk-jixing-original-imaeff94e9tczafp.jpeg?q=70',
            title:'String instruments',
            subTitle:'Best quality ',
            footer:'Guitars , ukeles ..'
        },
        {
            imgUrl:'https://rukminim1.flixcart.com/image/200/200/l3uhvgw0/cycle/n/z/c/torro-26t-26-16-montra-72-21-gear-original-imagevzncygdd8ah.jpeg?q=70',
            title:'Gear Cycles',
            subTitle:'Upto 10% Off',
            footer:'Hero, Montra & many more'
        },
        {
            imgUrl:'https://rukminim1.flixcart.com/image/200/200/jjd6aa80/shampoo/a/v/8/340-hair-fall-rescue-shampoo-dove-original-imaez6hvxrf886wm.jpeg?q=70',
            title:'Hair care',
            subTitle:'Best Products',
            footer:'Dove, Loreal etc'
        }
    ]
  return (
    <div className='box'>
        <div className="row">
            <div className="col-md-2 toyCards bannerCardBeauty">
                <h2 style={{
                        textAlign: 'center'
                }}>Beauty, Food, Toys and more </h2>
                <button className='btn btn-primary ' style={{
                    marginLeft: '69px'
                }}>View All</button>
            </div>
            <div className='col-md-10 toyCards'>
              <div className="row">
                {
                    beautyToyProductData.map((element)=>{
                        return <BeautyFoodToyProductCard imgUrl={element.imgUrl} title={element.title} subTitle={element.subTitle} footer={element.footer}/>
                    })
                }
              </div>
            </div>
        </div>
      
    </div>
  )
}

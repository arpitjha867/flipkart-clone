import React from 'react'
import ElectronicsProductCard from './electronicsProductsCard'

export default function electronicsCard() {
    let electronicsProductData=[
        {
            imgUrl:'https://rukminim1.flixcart.com/image/200/200/kw9krrk0/dslr-camera/1/h/j/-original-imag8z5weagzztda.jpeg?q=70',
            title:'Top Camera',
            subTitle:'Shop Now!',
            footer:'Canon, Sony...'
        },
        {
            imgUrl:'https://rukminim1.flixcart.com/image/200/200/ktketu80/computer/y/f/g/14-ec0007ax-thin-and-light-laptop-hp-original-imag6w28yf6vbvpy.jpeg?q=70',
            title:'Thin and Light Laptops',
            subTitle:'From ₹18,990',
            footer:''
        },
        {
            imgUrl:'https://rukminim1.flixcart.com/image/200/200/l3khsi80/projector/z/h/4/-original-imagenqrzfcgwqk7.jpeg?q=70',
            title:'Projectors',
            subTitle:'From ₹9999',
            footer:'Zebronics'
        },
        {
            imgUrl:'https://rukminim1.flixcart.com/image/200/200/kql8sy80/monitor/d/l/x/l22i-30-21-5-66cakac1in-lenovo-original-imag4kkt9zg3gvph.jpeg?q=70',
            title:'Monitors',
            subTitle:'From ₹7949',
            footer:'Lenovo'
        },
        {
            imgUrl:'https://rukminim1.flixcart.com/image/200/200/hair-dryer/c/t/g/philips-hp8100-46-original-imaemymzuxrnzfjb.jpeg?q=70',
            title:'Best of Hair Dryers',
            subTitle:'From ₹399',
            footer:'Philips, Nova, & more'
        },
        {
            imgUrl:'https://rukminim1.flixcart.com/image/200/200/klgx0280/printer/y/d/k/g2012-canon-original-imagyh8sqwuqzk7y.jpeg?q=70',
            title:'Printers',
            subTitle:'From ₹2336',
            footer:'Canon'
        }
    ]
  return (
    <div>
      <div className="box">
        <div className="row">
            <div className="col-md-2 electronicCardStyle  electronicCardStyle1">
                <h2 style={{
                        textAlign: 'center'
                }}>Best of Electronics</h2>
                <button className='btn btn-primary' style={{
                    marginLeft: '69px'
                }}>View All</button>
            </div>
            <div className="col-md-8 electronicCardStyle">
                <div className="row">
                    {
                        electronicsProductData.map((element)=>{
                            return <ElectronicsProductCard imgUrl={element.imgUrl} title={element.title} subTitle={element.subTitle} footer={element.footer}/>
                        })
                    }
                    
                </div>
            </div>
            <div className="col-md-2 electronicCardStyle" style={{
                cursor:'pointer'
            }}>
                <img src="https://rukminim1.flixcart.com/fk-p-flap/464/708/image/e7a2b2451577a5ac.jpg?q=70" alt="" style={{
                    width:'100%',
                    height:'100%'
                }}/>
            </div>
        </div>
      </div>
    
    </div>
  )
}

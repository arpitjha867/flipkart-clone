import React from 'react'

export default function banner() {
  return (
    <div className='my-3' style={{
        cursor:'pointer'
    }}>
      <img src={require("../assets/bannerphoto.png")} style={{
        height: '374px'
      }}/>
    </div>
  )
}

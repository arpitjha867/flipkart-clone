import React from "react";

export default function Carousel() {
  return (
    <div className="my-4" style={{
      height: '250px'
    }}>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">

            <div className="carousel-item active">
               <img
                 src={require("../assets/crslImg4.png")}
                 className="d-block w-100 crslImage"
                 alt="..."
               />
            </div>
            <div className="carousel-item ">
               <img
                 src={require("../assets/crslImg2.png")}
                 className="d-block w-100 crslImage"
                 alt="..."
               />
            </div>
            <div className="carousel-item ">
               <img
                 src={require("../assets/crslImg3.png")}
                 className="d-block w-100 crslImage"
                 alt="..."
               />
            </div>
            <div className="carousel-item ">
               <img
                 src={require("../assets/crslImg4.png")}
                 className="d-block w-100 crslImage"
                 alt="..."
               />
            </div>
            <div className="carousel-item ">
               <img
                 src={require("../assets/crslImg5.png")}
                 className="d-block w-100 crslImage"
                 alt="..."
               />
            </div>
            <div className="carousel-item ">
               <img
                 src={require("../assets/crslImg6.png")}
                 className="d-block w-100 crslImage"
                 alt="..."
               />
            </div>
            <div className="carousel-item ">
               <img
                 src={require("../assets/crslImg7.png")}
                 className="d-block w-100 crslImage"
                 alt="..."
               />
            </div>
   
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

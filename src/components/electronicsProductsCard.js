import React from "react";
import { Link } from "react-router-dom";

export default function electronicsProductsCard(props) {
  const { imgUrl, title, subTitle, footer } = props;
  return (
    <div className="col-md-2 cardsElec">
      <div className="card electronicsCardContainer">
        <img src={imgUrl} className="electronicsCardImage" />
        <div className="card-body electronicsTextAlign">
          <h5
            style={{
              fontSize: "17px",
            }}
            className="electronicsHeadMargin"
          >
            {title}
          </h5>
          <Link
            to="/products"
            style={{
              fontSize: "15px",
              color: "green",
            }}
          >
            {subTitle}
          </Link>
          <p
            style={{
              fontSize: "13px",
            }}
          >
            {footer}
          </p>
        </div>
      </div>
    </div>
  );
}

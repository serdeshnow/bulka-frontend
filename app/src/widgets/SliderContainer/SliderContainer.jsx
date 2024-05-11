import React from "react";
import "./SliderContainer.css";
import img1 from "../../assets/img/Slider/1.png";
// import img2 from "../../assets/img/Slider/2.png";
// import img3 from "../../assets/img/Slider/3.png";

export default function SliderContainer() {
  return (
    <div className="slider">
      <p className="slider_txt">кондитерские изделия на заказ</p>
      <div className="img_wrapper">
        <img src={img1} alt="" />
      </div>
    </div>
  );
}

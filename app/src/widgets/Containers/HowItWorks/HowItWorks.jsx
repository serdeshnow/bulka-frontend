import React from "react";
import "./HowItWorks.css";
import img1 from "../../../assets/img/HowItWorks/img1.svg";
import img2 from "../../../assets/img/HowItWorks/img2.svg";
import img3 from "../../../assets/img/HowItWorks/img3.svg";

export default function HowItWorks() {
  return (
    <div className="howItWorks">
      <p className="work_title">как это работает</p>
      <div className="work_wrapper">
        <div className="work_elem">
          <img src={img1} className="work_img1" alt="" />
          <p>соберите корзину</p>
        </div>
        <div className="work_elem">
          <img src={img2} className="work_img2" alt="" />
          <p>укажите желаемое время доставки</p>
        </div>
        <div className="work_elem">
          <img src={img3} className="work_img3" alt="" />
          <p>наслаждайтесь свежей выпечкой</p>
        </div>
      </div>
    </div>
  );
}

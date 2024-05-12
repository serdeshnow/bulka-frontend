// import React, { useEffect } from "react";
import React from "react";
import "./SliderContainer.css";
import img1 from "../../../assets/img/Slider/1.png";
// import axios from "axios";
// import img2 from "../../assets/img/Slider/2.png";
// import img3 from "../../assets/img/Slider/3.png";

export default function SliderContainer() {
  //Backend + Frontend be like

  // const getting = async () => {
  //   await axios
  //     .get("http://95.84.137.217:3001/get-stats")
  //     .then((res) => {
  //       console.log(res);
  //       console.log(res.data);
  //       console.log(res.data.cpu); // resolve
  //     })
  //     .catch((e) => {
  //       console.error(e);
  //     }); // promise
  // };

  // useEffect(() => {
  //   getting();
  // }, []);

  return (
    <div className="slider">
      <p className="slider_txt">кондитерские изделия на заказ</p>
      <div className="img_wrapper">
        <img src={img1} alt="" />
      </div>
    </div>
  );
}

import React, { useEffect } from "react";
// import React from "react";
import "./SliderContainer.css";
import img1 from "../../../assets/img/Slider/1.png";
import axios from "axios";
// import img2 from "../../assets/img/Slider/2.png";
// import img3 from "../../assets/img/Slider/3.png";

export default function SliderContainer() {
  //Backend + Frontend be like

  const posting = async (password, phone) => {
    let headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    let data = {
      password: password,
      phone: phone,
    };
    await axios
      .post(`http://81.31.247.55:8080/admin/login`, data, { headers })
      .then((res) => {
        if (res.status === 200) {
          let resData = res.data;
          console.log(resData.id);
        }
        console.log(res.status);
        // console.log(res.data);
        // console.log(res.data.cpu); // resolve
      })
      .catch((e) => {
        console.error(e);
      }); // promise
  };

  useEffect(() => {
    posting("string", 9998085267);
  }, []);

  return (
    <div className="slider">
      <p className="slider_txt">кондитерские изделия на заказ</p>
      <div className="img_wrapper">
        <img src={img1} alt="" />
      </div>
    </div>
  );
}

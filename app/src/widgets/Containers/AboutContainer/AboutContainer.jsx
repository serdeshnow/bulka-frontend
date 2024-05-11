import React from "react";
import "./AboutContainer.css";
import aboutImg from "../../../assets/img/about.png";
import Button from "../../Button/Button.jsx";

export default function AboutContainer() {
  return (
    <div className="about" id="about">
      <div className="img_wrapper">
        <img src={aboutImg} alt="" />
      </div>
      <div className="desc_wrapper">
        <p>
          В этой пекарне каждый день начинается с аромата свежих булочек и
          пирожных, создавая уютную атмосферу, где традиции и инновации
          гармонично сочетаются. Здесь вы найдете лучшее из лучшего, от
          классических пирогов до экзотических выпечек, все приготовлено с
          любовью и профессионализмом.
        </p>
        <Button>Найти на карте</Button>
      </div>
    </div>
  );
}

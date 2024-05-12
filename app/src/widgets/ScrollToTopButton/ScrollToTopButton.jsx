import React, { useEffect, useState } from "react";
import AnchorButton from "../AnchorButton/AnchorButton";
import arrow from "../../assets/svg/arrowup.svg";
import "./ScrollToTopButton.css";

export default function ScrollToTopButton() {
  // Появляется примерно в топе блока "о нас", добавить плавное появление, мб используя sticky position
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        window.scrollY > 500
          ? setBackToTopButton(true)
          : setBackToTopButton(false)
      );
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div id="to_top_button">
      {backToTopButton && (
        <AnchorButton onClick={scrollUp}>
          <img src={arrow} alt="" />
        </AnchorButton>
      )}
    </div>
  );
}

import "./Footer.css";
import img1 from "../../assets/img/Footer/footer.png";
import imgTg from "../../assets/img/Footer/TelegramApp.svg";
import imgVK from "../../assets/img/Footer/VKCircled.svg";
import imgInst from "../../assets/img/Footer/InstagramCircle.svg";
import logo from "../../assets/svg/logo.svg";

export default function Footer() {
  return (
    <footer id="contacts">
      <nav className="nav_wrapper">
        <ul className="nav_list">
          <li className="list_item">
            <div className="img_wrapper">
              <img src={imgTg} alt="" />
            </div>
          </li>
          <li className="list_item">
            <div className="img_wrapper">
              <img src={imgVK} alt="" />
            </div>
          </li>
          <li className="list_item">
            <div className="img_wrapper">
              <img src={imgInst} alt="" />
            </div>
          </li>
        </ul>
      </nav>
      <div className="img_wrapper footer_img">
        <img src={img1} alt="" />
      </div>
      <div className="logo">
        <a href="/">
          <img src={logo} alt="" />
        </a>
      </div>
      <div className="horizontal"></div>
    </footer>
  );
}

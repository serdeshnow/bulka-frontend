import "./CatalogContainer.css";
import Button from "../Button/Button";
import img1 from "../../assets/img/Catalog/1.png";
import img2 from "../../assets/img/Catalog/2.png";
// Сделать перенос айтемов через ДБ

export default function CatalogContainer() {
  return (
    <div className="catalog">
      <h2>Меню</h2>
      <nav className="nav_wrapper">
        <ul className="nav_list">
          <li className="list_item">
            <div className="img_wrapper">
              <img src={img1} alt="" />
            </div>
            <p className="item_name">Rhefccfy vimsd</p>
            <p className="item_price">170p</p>
            <Button></Button>
          </li>
          <li className="list_item">
            <div className="img_wrapper">
              <img src={img2} alt="" />
            </div>
            <p className="item_name">Rhefccfy vimsd</p>
            <p className="item_price">170p</p>
            <Button></Button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

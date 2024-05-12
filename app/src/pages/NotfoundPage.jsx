import { Link } from "react-router-dom";

export const NotfoundPage = () => {
  return (
    <div className="page_wrapper">
      <div className="notfound_wrapper">
        <div className="img_wrapper">
          <img src="/" alt="фото сгоревшей булочки" />
        </div>
        <p>
          This page doesn't exist. Back to <Link to="/">Home</Link>
        </p>
      </div>
    </div>
  );
};

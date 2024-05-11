import { Link } from "react-router-dom";

export const NotfoundPage = () => {
  return (
    <>
      <p>
        This page doesn't exist. Back to <Link to="/">Home</Link>
      </p>
    </>
  );
};

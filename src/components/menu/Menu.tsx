import { Link } from "react-router-dom";
import "./menu.scss";

const Menu = () => {
  return (
    <div className="menu">
      <div className="item">
        <span className="title">MAIN</span>
        <Link to="/"></Link>
      </div>
    </div>
  );
};

export default Menu;

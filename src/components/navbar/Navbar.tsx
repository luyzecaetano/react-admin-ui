import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="logo" />
        <span>dashboard</span>
      </div>
      <div className="icons">
        <Notifications />
        <User />
      </div>
    </div>
  );
};

export default Navbar;

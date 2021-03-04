import logo from "../images/logo.png";

const Header = () => {
  return (
    <h1 className="header">
      <img className="header__logo" src={logo} />
    </h1>
  );
};
export default Header;

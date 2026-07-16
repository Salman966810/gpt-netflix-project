import LOGO from "../assets/LOGO.svg";

const Header = () => {
  return (
    <>
      <img
        src={LOGO}
        alt="Logo"
        className="absolute top-8 left-8 w-48 h-auto z-10"
      />
    </>
  );
};

export default Header;

const Header = ({ children, className, backgroundImage }) => (
  <header
    className={className}
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}
  >
    {children}
  </header>
);

export default Header;

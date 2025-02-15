import { useState, useEffect } from "react";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <nav className={` nav ${isScrolled ? "active" : "current"}`}>
      <div className="container">
        <h1>My Website</h1>
        <ul>
          <li><a href="#" className="current">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </nav>
    </>
  );
};

export default NavBar;

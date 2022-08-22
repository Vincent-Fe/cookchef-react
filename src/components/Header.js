import React from "react";
import logo from "../assets/images/cookchef-d.png";
import styles from "../assets/styles/components/Header.module.scss";

const Header = () => {
  return (
    <header className={`${styles.header} d-flex flex-row align-items-center`}>
      <div>
        <img src={logo} alt="cookchef logo" />
      </div>
      <ul>
        <button>Withlist</button>
        <button>Connexion</button>
      </ul>
    </header>
  );
};

export default Header;

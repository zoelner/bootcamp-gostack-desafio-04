import React from "react";
import facebook from "../../assets/facebook.svg";
import account_circle from "../../assets/account_circle.svg";
import "./styles.css";

function Header() {
  return (
    <nav className="header">
      <div className="content">
        <img width="120" height="24" src={facebook} alt="Logo Facebook" />
        <div className="menu">
          <span>Meu Pefil</span>
          <img width="24" height="24" src={account_circle} alt="Meu Pefil" />
        </div>
      </div>
    </nav>
  );
}

export default Header;

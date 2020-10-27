import React from "react";
import "./NavBar.scss";

function NavBar() {
  return (
    <header className="NavBar">
      <p className="NavBar_Logo">Cinema Kryszak</p>
      <ul className="NavBar_List">
        <li>movies</li>
        <li>find a theatre</li>
      </ul>
    </header>
  );
}

export default NavBar;

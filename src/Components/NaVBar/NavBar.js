import React from "react";
import { Link } from "@reach/router";
import "./NavBar.scss";

function NavBar() {
  return (
    <header className="NavBar">
      <Link to="/">
        <p className="NavBar_Logo">Cinema Paradiso</p>
      </Link>
      <ul className="NavBar_List">
        <Link to="/movies">
          <li>movies</li>
        </Link>
        <li>find a theatre</li>
      </ul>
    </header>
  );
}

export default NavBar;

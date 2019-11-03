import React, { Component } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import "./NavBar.css";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNav: false
    };
  }

  render() {
    const { showNav } = this.state;
    return (
      <nav className="navBar">
        {showNav ? (
          <button
            className="navbar-toggle-btn"
            onClick={() => this.setState({ showNav: !showNav })}
          >
            X
          </button>
        ) : (
          <button
            className="navbar-toggle-btn"
            onClick={() => this.setState({ showNav: !showNav })}
          >
            <MenuIcon style={{ fontSize: 17, color: "#fff" }} />
          </button>
        )}
        <div className={showNav ? "main-nav show-main-nav" : "main-nav"}>
          <ul
            className={
              showNav ? "main-nav-list show-main-nav" : "main-nav-list"
            }
          >
            <li>
              <Link to={"/"}>
                <button
                  className="nav-links"
                  onClick={() => this.setState({ showNav: !showNav })}
                >
                  Accueil
                </button>
              </Link>
            </li>
            <li className="generationsListItem">
              <button className="nav-links">Générations</button>
              <ul className="generationsListContainer">
                <Link to="/generations/1">
                  <li onClick={() => this.setState({ showNav: !showNav })}>
                    Génération 1
                  </li>
                </Link>
                <Link to="/generations/2">
                  <li onClick={() => this.setState({ showNav: !showNav })}>
                    Génération 2
                  </li>
                </Link>
                <Link to="/generations/3">
                  <li onClick={() => this.setState({ showNav: !showNav })}>
                    Génération 3
                  </li>
                </Link>
                <Link to="/generations/4">
                  <li onClick={() => this.setState({ showNav: !showNav })}>
                    Génération 4
                  </li>
                </Link>
                <Link to="/generations/5">
                  <li onClick={() => this.setState({ showNav: !showNav })}>
                    Génération 5
                  </li>
                </Link>
                <Link to="/generations/6">
                  <li onClick={() => this.setState({ showNav: !showNav })}>
                    Génération 6
                  </li>
                </Link>
                <Link to="/generations/7">
                  <li onClick={() => this.setState({ showNav: !showNav })}>
                    Génération 7
                  </li>
                </Link>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default NavBar;

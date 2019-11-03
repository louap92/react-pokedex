import React, { Component } from "react";
import "./ErrorMessage.css";

export default class ErrorMessage extends Component {
  render() {
    if (this.props.errorCode === "404")
      return (
        <div className="errorMessage">
          <h3>
            Oops! On dirait que '{this.props.pokeNames}' n'est pas un pokémon. S'il vous plaît
             réessayer.
          </h3>
        </div>
      );
    else {
      return (
        <div className="errorMessage">
          <h3>Oops! Quelque chose s'est mal passé. Veuillez réessayer.</h3>
        </div>
      );
    }
  }
}

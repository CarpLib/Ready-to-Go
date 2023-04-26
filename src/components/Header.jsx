import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  return (
    <header>
      <FontAwesomeIcon icon="shuttle-space" className="logo" />
      <h1>Ready To Go</h1>
    </header>
  );
}

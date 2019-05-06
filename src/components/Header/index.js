// Require in dependencies
import React from "react";
import "./style.css";

function Header() {
  return (
    <header className="header">
      {/* <h1>Clicky Memory Game!</h1> */}
      <h2>Gameplay:</h2>
        <p>Click each image to earn a point.</p>
        <p>Click each image <u>only once</u> - or you'll lose.</p>
        <p>The goal is to click all twelve images... without clicking any twice.</p>
        <p>Click "Clicky Memory Game" in the top left corner to reset the game.</p>
      <h2><p>Scroll down... and good luck!</p></h2>
    </header>
  );
}

// Export Header
export default Header;
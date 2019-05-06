// Require in dependencies
import React from "react";
import "./style.css";

function Header() {
  return (
    <header className="header">
      {/* <h1>Clicky Memory Game!</h1> */}
      <h2>Click on each image to earn a point. Don't click on any image more than once - or you'll lose.
        The goal is to click all twelve images without clicking any twice. Fingers crossed!</h2>
    </header>
  );
}

// Export Header
export default Header;
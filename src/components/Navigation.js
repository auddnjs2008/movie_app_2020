import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
function Navigation() {
  return (
    //Link는 라우터밖에서 못쓴다.  navigaton이 지금 hashrouter 안에 있어써 쓸수있다.
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navigation;

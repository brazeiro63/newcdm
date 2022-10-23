import React from "react";

// import { Container } from './styles';

export default function header() {
  return (
    <div className="header">
      <div className="logo">
        <img src="/asset/logo.png" alt="logo" className="logo--img" />
      </div>
      <div className="logo--text">texto do logo</div>
    </div>
  );
}

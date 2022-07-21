import React from "react";
import { Outlet, NavLink, Link } from "react-router-dom";
import './styles/header.scss';

export default function Header() {

  return (
    <div className="header">
      <a href="/" className="main">GMovies</a>
      <a href="/movies" className="menu">Movies</a>

      <Outlet />
    </div>
  );
}

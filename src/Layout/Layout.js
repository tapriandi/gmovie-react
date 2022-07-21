import './style.scss';
import React from "react";
import App from "../App";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <div className='container' >
      <Header />
      <App />
      <Footer />
    </div>
  );
}

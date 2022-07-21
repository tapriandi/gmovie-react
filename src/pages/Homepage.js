import React from "react";
import { FiChevronRight } from "react-icons/fi";
import "./styles/homepage.scss";
import "../styles/common.scss";

export default function Homepage() {
  return (
    <div className="home">
      <section className="hero">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/1ef84595-1fdb-4404-adac-15215ceeb3ae/61d29cb2-7944-4dc7-bcac-7298f9cfb431/ID-en-20220711-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt=""
        />
        <div className="gradient"></div>

        <div className="content">
          <h1 id="" className="title">
            Unlimited movies, TV shows, and more.
          </h1>
          <h2 id="" className="subtitle">
            Watch anywhere. Cancel anytime.
          </h2>
          <a href="/movies" className="gbutton">
            Get Started <FiChevronRight className="icon" />
          </a>
        </div>
      </section>

      <section className="story">
        <div className="image">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            alt="
                "
          />
          <video autoPlay playsInline muted loop className="v2">
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="content">
          <h1 className="title">Enjoy on your TV.</h1>
          <h2 className="subtitle">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </h2>
        </div>
      </section>

      <section className="story">
        <div className="image">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-id.png"
            alt=""
          />
          <video autoPlay playsInline muted loop>
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-id.m4v"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="content">
          <h1 className="title">Watch everywhere.</h1>
          <h2 className="subtitle">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </h2>
        </div>
      </section>
    </div>
  );
}

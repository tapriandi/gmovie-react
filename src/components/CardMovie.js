import React, { useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./styles/cardMovie.scss";

export default function CardMovie({ movie, last }) {
  const { imdbID, Title, Poster } = movie;
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState({});

  const handlePoster = (item) => {
    setShow(true);
    setSelected(item);
  };

  return (
    <>
      <div className="card-movie" ref={last}>
        <div className="image" onClick={() => handlePoster(movie)}>
          <img src={Poster} alt={Title} />
        </div>
        <a href={`/movies/${imdbID}`} className="content">
          <p>{Title}</p>
        </a>
      </div>

      {show && (
        <div className="big-poster">
          <div className="wrap">
            <img src={selected.Poster} alt={selected.Title} />
            <a href={`/movies/${selected.imdbID}`} className="more">
              See Detail <FiChevronRight />
            </a>
            <div onClick={() => setShow(false)} className="close">
              <AiOutlineCloseCircle />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

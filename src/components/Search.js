import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearch, setKeySearch, movieSelector } from "../redux/movieSlice";
import "./styles/search.scss";

export default function Search({ data }) {
  const dispatch = useDispatch();
  const store = useSelector(movieSelector);
  const keysearch = store?.keysearch;
  const search = store?.search;

  const handleOnChange = (title) => {
    let matches = [];
    if (title?.length > 0) {
      matches = data?.filter((movie) => {
        const regex = new RegExp(title, "gi");
        return movie?.Title.match(regex);
      });
    }
    dispatch(setSearch(matches));
    dispatch(setKeySearch(title));
  };

  const handleOnBlur = () => {
    setTimeout(() => {
      dispatch(setSearch([]));
    }, 200);
  };

  return (
    <div className="search">
      <input
        type="text"
        value={keysearch}
        placeholder="Search Movie"
        onChange={(e) => handleOnChange(e.target.value)}
        onBlur={() => handleOnBlur()}
      />

      {search && (
        <div className="suggestion">
          {search?.slice(0, 5).map((e, idx) => (
            <a key={idx} className="card" href={`/movies/${e.imdbID}`}>
              <img src={e.Poster} alt="" />
              <div className="text">
                <p>{e.Title}</p>
                <p>{e.Year}</p>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

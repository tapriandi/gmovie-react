import React from "react";
import { useState, useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies, movieSelector } from "../redux/movieSlice";
import Search from "../components/Search";
import Loading from "../components/Loading";
import CardMovie from "../components/CardMovie";
import FilterMovie from "../components/FilterMovie";
import "./styles/movies.scss";

export default function Movies() {
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const dispatch = useDispatch();
  const { filter, movies, loading } = useSelector(movieSelector);

  const observer = useRef();
  const lastMovieRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting === hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  useEffect(() => {
    setHasMore(movies?.length > 0);
  }, [movies]);

  useEffect(() => {
    dispatch(getMovies(filter, page));
  }, [dispatch, filter, page]);

  console.log(movies);

  return (
    <div className="movies">
      <div className="hero">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/1ef84595-1fdb-4404-adac-15215ceeb3ae/61d29cb2-7944-4dc7-bcac-7298f9cfb431/ID-en-20220711-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt=""
        />
        <div className="gradient"></div>
        <div className="content">
          <Search data={movies} />
          <FilterMovie />
        </div>
      </div>

      <div className="wrapper">
        {movies?.map((movie, idx) => {
          if (movies.length === idx + 1) {
            return (
              <CardMovie key={idx} movie={movie} last={lastMovieRef} />
            );
          } else {
            return <CardMovie key={idx} movie={movie} />;
          }
        })}
      </div>

      {loading && <Loading />}
    </div>
  );
}

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { getMovie, movieSelector } from "../redux/movieSlice";
import Loading from "../components/Loading";
import "./styles/movie.scss";

export default function Movie() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { movie, loading } = useSelector(movieSelector);

  useEffect(() => {
    dispatch(getMovie(slug));
  }, [dispatch, slug]);

  return (
    <div className="movie">
      {loading ? (
        <Loading />
      ) : (
        <div className="wrapper">
          <img src={movie.Poster} alt="" />
          <div className="content">
            <h2>{movie.Title}</h2>
            <p>{movie.Plot}</p>

            <table className="wrap">
              <tbody>
                <tr>
                  <td>Genre</td>
                  <td>:&nbsp;{movie.Genre}</td>
                </tr>
                <tr>
                  <td>Actors</td>
                  <td>:&nbsp;{movie.Actors}</td>
                </tr>
                <tr>
                  <td>Directors</td>
                  <td>:&nbsp;{movie.Director}</td>
                </tr>
              </tbody>
            </table>

            <table className="wrap">
              <tbody>
                <tr>
                  <td>Duration</td>
                  <td>:&nbsp;{movie.Runtime}</td>
                </tr>
                <tr>
                  <td>Rating</td>
                  <td>:&nbsp;{movie.imdbRating}</td>
                </tr>
                <tr>
                  <td>Country</td>
                  <td>:&nbsp;{movie.Country}</td>
                </tr>
                <tr>
                  <td>Release Date</td>
                  <td>:&nbsp;{movie.Released}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
      <a href="/movies" className="gbutton">
        <FiChevronLeft /> Back To Movies
      </a>
    </div>
  );
}

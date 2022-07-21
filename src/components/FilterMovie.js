import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilter, movieSelector } from "../redux/movieSlice";
import filterData from "../data/filters.json";
import "./styles/filterMovie.scss";

export default function FilterMovie() {
  const dispatch = useDispatch();
  const filter = useSelector(movieSelector);

  const handleFilter = (selected) => {
    dispatch(getFilter(selected));
  };

  useEffect(() => {
    dispatch(getFilter(filterData[0]));
  }, [dispatch]);

  return (
    <div className="filter-menu">
      {filterData?.map((e, idx) => (
        <div className={`filter-button ${e === filter?.filter && 'active'}`} key={idx} onClick={() => handleFilter(e)}>
          {e}
        </div>
      ))}
    </div>
  );
}

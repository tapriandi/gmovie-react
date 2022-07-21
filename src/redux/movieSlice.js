import { getMovieById, getMovieByKey } from "../services/apiReq";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  movies: [],
  movie: {},
  search: [],
  keysearch: "",
  filter: "",
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setMovies: (state, action) => {
      state.movies = action.payload;
      state.loading = false;
    },
    setMoviesMore: (state, action) => {
      action.payload.map(e => state.movies.push(e));
      state.loading = false;
    },
    setMovie: (state, action) => {
      state.movie = action.payload;
      state.loading = false;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
      state.loading = false;
    },
    setKeySearch: (state, action) => {
      state.keysearch = action.payload;
      state.loading = false;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
      state.loading = false;
    },
  },
});

export const {
  setLoading,
  setMoviesMore,
  setMovies,
  setMovie,
  setSearch,
  setKeySearch,
  setFilter,
} = movieSlice.actions;

// selector
export const movieSelector = (state) => state.movies;

// reducer
const movieReducer = movieSlice.reducer;
export default movieReducer;

// actions
export const getLoading = () => (dispatch) => {
  dispatch(setLoading(true));
};

export const getMovies = (filter, page = 1) => async (dispatch) => {
  dispatch(getLoading());
  const data = await getMovieByKey(filter, page);
  if (page > 1) {
    dispatch(setMoviesMore(data));
  } else {
    dispatch(setMovies(data));
  }
};

export const getMovie = (id) => async (dispatch) => {
  dispatch(getLoading());
  const data = await getMovieById(id);
  dispatch(setMovie(data));
};

export const getSearch = (data) => (dispatch) => {
  dispatch(getLoading());
  dispatch(setSearch(data));
};

export const getKeySearch = (key) => (dispatch) => {
  dispatch(getLoading());
  dispatch(setKeySearch(key));
};

export const getFilter = (filter) => (dispatch) => {
  dispatch(getLoading());
  dispatch(setFilter(filter));
};

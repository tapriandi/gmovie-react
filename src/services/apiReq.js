import axios from "axios";

const apikey = "faf7e5bb";
const baseUrl = "http://www.omdbapi.com";

export const getMovieByKey = async (key, page) => {
  try {
    const { data } = await axios.get(
      `${baseUrl}?apikey=${apikey}&s=${key}&page=${page}`
    );
    return data.Search;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieById = async (id) => {
  try {
    const { data } = await axios.get(`${baseUrl}?apikey=${apikey}&i=${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

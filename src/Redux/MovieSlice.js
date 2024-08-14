import { createSlice } from "@reduxjs/toolkit";
import data from "../Data";

const movieSlice = createSlice({
  name: "movie",
  initialState: { movies: data },
  reducers: {
    addMovie: (state, action) => {
      state.movies = [...state.movies, action.payload]; 
    },
    deleteMovie: (state, action) => {
        state.movies=state.movies.filter((el)=>el.imdbID!=action.payload);
    }
  },
});

export const { addMovie,deleteMovie } = movieSlice.actions;
export default movieSlice.reducer;


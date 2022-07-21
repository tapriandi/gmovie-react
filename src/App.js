import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./pages/Error";
import Movie from "./pages/Movie";
import Movies from "./pages/Movies";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />

        <Route path="movies">
          <Route index element={<Movies />} />
          <Route path=":slug" element={<Movie />} />
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

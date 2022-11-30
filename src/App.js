import "bootstrap/dist/css/bootstrap.min.css";
import "./netflix.css";
import NetflixNavbar from "./components/NetflixNavbar.jsx";
import Home from "./components/Home";
import TVShows from "./components/TVShows";
import MovieDetails from "./components/MovieDetails";
import NetflixFooter from "./components/NetflixFooter";
// import NetflixCarousel from "./components/NetflixCarousel";
// import SubNavbar from "./components/SubNavbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NetflixNavbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<TVShows />} path="/tv-shows"></Route>
          <Route element={<MovieDetails />} path="/details/:movieId"></Route>
        </Routes>
        <NetflixFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;

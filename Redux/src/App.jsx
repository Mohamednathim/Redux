import "./App.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home.jsx";
import CourseDetails from "./pages/CourseDetails.jsx";
import Playlist from "./pages/Playlist.jsx";
import PlaylistDetails from "./pages/PlaylistDetails.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <header>
        <h1>Redux</h1>
        <nav>
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/playlists">
            Playlist
          </NavLink>
        </nav>
      </header>
      <div className="common">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<CourseDetails />} />
          <Route path="/playlists" element={<Playlist />} />
          <Route path="/playlist" element={<PlaylistDetails />} />
        </Routes>
      </div>
      <footer>
        <p>&copy; 2024 copyrights reserved</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;

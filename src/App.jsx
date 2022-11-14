import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Albums from "./pages/Albums";
import Artists from "./pages/Artists";
import Genre from "./pages/Genre";
import Contact from "./pages/Contact";
import GenreDetail from "./pages/GenreDetail";
import CreateAlbum from "./pages/CreateAlbums";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="artists" element={<Artists />}></Route>
        <Route path="albums" element={<Albums />}></Route>
        <Route path="genre" element={<Genre />}></Route>
        <Route path="genre/:name" element={<GenreDetail />}></Route>
        <Route path="albums/create" element={<CreateAlbum />}></Route>
        <Route path="contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;

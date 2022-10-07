import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AboutUs } from './AboutUs';
import { AddAlbum } from './AddAlbum';
import { Album } from './Album';
import { Albums } from './Albums';
import { Home } from './Home';

/** App routes */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/albums" element={<Albums/>} />
        <Route path="/album/:albumId" element={<Album />} />
        <Route path="/add-album" element={<AddAlbum />} />
        <Route path="/update-album/:albumId" element={<AddAlbum />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

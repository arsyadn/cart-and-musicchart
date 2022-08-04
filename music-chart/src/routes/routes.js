import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import TrackPage from '../pages/TrackPage';
import ArtistPage from '../pages/ArtistPage';

const RouteApp = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/topTrack" element={<TrackPage />} />
                    <Route path="/topArtist" element={<ArtistPage/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default RouteApp;
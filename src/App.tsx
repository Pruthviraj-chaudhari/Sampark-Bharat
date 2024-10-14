import { Routes, Route } from 'react-router-dom';
import ProfileProvider from './context/MyContext';
import Home from './pages/Home';
import SubscribePage from './pages/Subscribe';
import PageNotFound from './pages/NotFound';
import Demo from './pages/Demo';
import ThemeTiles from './pages/Themes';

export default function App() {

  return (
    <ProfileProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo/:slug" element={<Demo />} />
        <Route path="/themes" element={<ThemeTiles />} />
        <Route path="/subscribe" element={<SubscribePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </ProfileProvider>
  )
}


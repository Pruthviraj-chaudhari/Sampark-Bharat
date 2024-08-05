import { Routes, Route } from 'react-router-dom';
import ProfileProvider from './context/MyContext';
import Business from './pages/Business';
import Organization from './pages/Organization';
import Politician from './pages/Politician';
import Home from './pages/Home';
import SubscribePage from './pages/Subscribe';
import PageNotFound from './pages/NotFound';

export default function App() {

  return (
    <ProfileProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/politics/:slug" element={<Politician />} />
        <Route path="/business/:slug" element={<Business />} />
        <Route path="/org/:slug" element={<Organization />} />
        <Route path="/subscribe" element={<SubscribePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </ProfileProvider>
  )
}


import { Routes, Route } from 'react-router-dom';
import Politician from "./pages/politician";
import ProfileProvider from './context/MyContext';
import Home from './pages/home';

export default function App() {

  return (
    <ProfileProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:slug" element={<Politician />} />
      </Routes>
    </ProfileProvider>
  )
}
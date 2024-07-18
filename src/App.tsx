import { Routes, Route } from 'react-router-dom';
import Politician from "./pages/politician";

export default function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Politician />} />
       </Routes>
    </>
  )
}
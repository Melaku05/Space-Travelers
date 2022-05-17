import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Missions from './components/Missions';
import Rockets from './components/Rockets';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
      </Routes>
    </Router>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Missions from './components/Missions';
import Rockets from './components/Rockets';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <Nav />
      <Rockets />
      <Missions />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
      </Routes>
    </Router>
  );
}

export default App;

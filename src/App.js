import './App.css';
import { Routes, Route } from 'react-router-dom';
import Missions from './components/Missions';
import Rockets from './components/Rockets';
import MyProfile from './components/MyProfile';
import Nav from './components/Navigation/Navigation';

<<<<<<< HEAD
const App = () => (
  <>
    <Nav />
    <Routes>
      <Route path="/" exact element={<Rockets />} />
      <Route path="/Missions" exact element={<Missions />} />
      <Route path="/MyProfile" exact element={<MyProfile />} />
    </Routes>
  </>
);
=======
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
>>>>>>> c8d13467a77222f0460ea63a7b2f806902d409cf

export default App;

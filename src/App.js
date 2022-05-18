import './App.css';
import { Routes, Route } from 'react-router-dom';
import Missions from './components/Missions';
import Rockets from './components/Rockets';
import MyProfile from './components/MyProfile';
import Nav from './components/Navigation/Navigation';

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

export default App;

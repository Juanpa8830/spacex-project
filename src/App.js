import React, { useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { getApiRockets } from './redux/rockets/Rocket';
import Rockets from './Pages/Rockets';
import Missions from './Pages/Missions';
import MyProfile from './Pages/MyProfilepage';
import './App.css';
import planet from './images/planet.png';
import store from './redux/configureStore';

function App() {
  useEffect(() => {
    store.dispatch(getApiRockets());
  }, []);

  return (

    <div className="root">
      <nav className="nav" id="flex">
        <div className="navleft" id="flex">
          <img src={planet} className="planet" width="60" height="60" alt="React Bootstrap logo" />
          <h1 className="navtitle">Space Travelers&apos; Hub</h1>
        </div>
        <ul className="navlist" id="flex">
          <li className="listItem"><Link className="listLink1" to="/">Rockets</Link></li>
          <li className="listItem"><Link className="listLink2" to="/Pages/Missions">Missions</Link></li>
          <div className="vert-div" />
          <li className="listItem"><Link className="listLink3" to="/Pages/MyProfilepage">My profile</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/Pages/Missions" element={<Missions />} />
        <Route path="/Pages/MyProfilepage" element={<MyProfile />} />
      </Routes>
    </div>
  );
}

export default App;

import React from 'react';
import { useSelector } from 'react-redux';
import './myProfile.css';

const MyProfile = () => {
  const getAllmissions = useSelector((state) => state.missions);
  const getAlljoins = getAllmissions.filter((mission) => mission.joined);

  return (
    <div className="parent-container">
      <div className="myProfile-container">
        <h2>My missions</h2>
        <ul className="joined-missions">
          {getAlljoins.length >= 1 ? getAlljoins.map((mission) => (
            <li key={mission.name} className="mission-el">
              {mission.name}
              {' '}
              {mission.manufacturer}
            </li>
          )) : <li className="mission-el">You are not part of any mission</li> }
        </ul>
      </div>
    </div>
  );
};

export default MyProfile;

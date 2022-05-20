import React from 'react';
import { useSelector } from 'react-redux';
import Rocket from './Rocket';
import './AllRockets.css';

const AllRockets = () => {
  const rockets = useSelector((state) => state.rocketsReducer);

  return (
    <div className="contained">
      {rockets.map((rockets) => (
        <div key={rockets.id}>
          <Rocket
            id={rockets.id}
            name={rockets.name}
            img={rockets.img}
            desc={rockets.desc}
            reserv={rockets.reserv}
          />
        </div>
      ))}
    </div>
  );
};

export default AllRockets;

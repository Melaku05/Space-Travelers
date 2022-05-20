import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rocket from './Rocket';
import './Rockets.css';
import { getRocketList } from '../redux/rockets/rockets';

const Rockets = () => {
  const dispatchAction = useDispatch();
  const rockets = useSelector((state) => state.rocketsReducer);

  useEffect(() => {
    dispatchAction(getRocketList());
  }, [dispatchAction]);

  return (
    rockets.map((r) => (
      <div key={r.id}>
        <Rocket
          id={r.id}
          name={r.name}
          img={r.img}
          desc={r.desc}
          reserv={r.reserv}
        />
      </div>
    ))
  );
};

export default Rockets;

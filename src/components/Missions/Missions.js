import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Missions.css';
import { fetchMissionData, updateMissionState } from '../../Redux/Missions';

const Missions = () => {
  const getAllMissions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!getAllMissions.length) dispatch(fetchMissionData());
  }, [dispatch]);

  const handleClick = ({ target }) => {
    const { id } = target;
    dispatch(updateMissionState(id));
  };

  const activeButton = <button type="button" className="active">Active memeber</button>;
  const inactiveButton = <button type="button" className="inactive">Not a member</button>;

  return (
    <table>
      <thead>
        <tr>
          <th>Mission</th>
          <th>description</th>
          <th>Status</th>
          <th aria-label="Empty cell" />
        </tr>
      </thead>
      <tbody>
        {getAllMissions.map((mission) => (
          <tr key={mission.id}>
            <td>{mission.name}</td>
            <td>{mission.description}</td>
            <td>
              {mission.joined && activeButton}
              {!mission.joined && inactiveButton}
            </td>
            <td>
              {mission.joined && <button id={mission.id} className="join" type="button" onClick={handleClick}>Leave Mission</button>}
              {!mission.joined && <button id={mission.id} className="leave" type="button" onClick={handleClick}>Join Mission</button>}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Missions;

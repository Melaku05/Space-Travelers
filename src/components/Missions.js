import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissionData, updateMissionState } from '../Redux/Missions';

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

  const activeButton = <button type="button">Active memeber</button>;
  const inactiveButton = <button type="button">Not a member</button>;

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
        {getAllMissions.map((mission) => (mission.joined ? (
          <tr key={mission.id}>
            <td>{mission.name}</td>
            <td>{mission.description}</td>
            <td>{activeButton}</td>
            <td><button id={mission.id} type="button" onClick={handleClick}>Leave Mission</button></td>
          </tr>
        )
          : (
            <tr key={mission.id}>
              <td>{mission.name}</td>
              <td>{mission.description}</td>
              <td>{inactiveButton}</td>
              <td><button id={mission.id} type="button" onClick={handleClick}>Join Mission</button></td>
            </tr>
          )))}
      </tbody>
    </table>
  );
};
export default Missions;

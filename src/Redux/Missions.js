import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const baseUrl = 'https://api.spacexdata.com/v3/missions';

export const fetchMissionData = createAsyncThunk(
  'action/fetchMissionData',
  async () => {
    const res = await fetch(baseUrl);
    const data = await res.json();
    const extractData = data.map((mission) => ({
      id: mission.mission_id,
      name: mission.mission_name,
      description: mission.description,
      manufacturer: mission.manufacturers[0],
      wiki: mission.wikipedia,
      joined: false,
    }));
    return extractData;
  },
);

export const missionSlice = createSlice({
  name: 'reduce/fetchMissionData',
  initialState: [],
  reducers: {
    updateMissionState: (state, action) => state.map((mission) => {
      if (mission.id === action.payload) {
        return { ...mission, joined: !mission.joined };
      }
      return mission;
    }),
  },
  extraReducers: {
    [fetchMissionData.fulfilled]: (state, action) => action.payload,
  },
});

export const { updateMissionState } = missionSlice.actions;

export default missionSlice.reducer;

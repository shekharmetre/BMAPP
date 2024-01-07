import {createSlice} from '@reduxjs/toolkit'

const Fetching = createSlice({
  name : "fetched",
  initialState : [],
  reducers : {
    addIventory (state,action) {
      state.push(action.payload)
    },
    removeInventory(state, action) {
      state.splice(0);
    },
    deleteUsers(state,action) {
        state.splice(0,action.payload.length)
    },
  } ,
});


export default Fetching.reducer;
export const {addIventory,removeInventory,deleteUsers} = Fetching.actions
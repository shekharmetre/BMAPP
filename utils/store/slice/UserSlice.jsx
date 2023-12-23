import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
  name : "user",
  initialState : {},
  reducers : {
    addUser (state,action) {
      state['click'] = action.payload
    },
    removeUser(state,action) {
      state.splice(state,action.payload)
    },
    deleteUsers(state,action) {
        state.splice(0,action.payload.length)
    },
  } ,
});


export default userSlice.reducer;
export const {addUser,removeUser,deleteUsers} = userSlice.actions
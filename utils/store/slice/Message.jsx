import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
  name : "message",
  initialState : {},
  reducers : {
    addMessage (state,action) {
      state['message'] = action.payload
    },
  } ,
});


export default userSlice.reducer;
export const {addMessage,removeUser,deleteUsers} = userSlice.actions
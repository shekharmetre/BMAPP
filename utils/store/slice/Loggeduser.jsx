import {createSlice} from '@reduxjs/toolkit'

const loggedUser = createSlice({
  name : "logged",
  initialState : {},
  reducers : {
    LoginUser (state,action) {
      state['auth'] = action.payload
    },
    removeUser(state,action) {
      state.splice(state,action.payload)
    },
    deleteUsers(state,action) {
        state.splice(0,action.payload.length)
    },
  } ,
});


export default loggedUser.reducer;
export const {LoginUser,removeUser,deleteUsers} = loggedUser.actions
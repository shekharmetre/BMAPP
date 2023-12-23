import { createSlice } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { io } from 'socket.io-client';


//  const socket = io('localhost:8080',{cors:true})

const Context = createSlice({
  name: 'socket',
  initialState: {},
  reducers: {},
});

export default Context.reducer;

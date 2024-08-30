import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // Define your initial state here
  "id": 1,
  "name": "Atul Solanki",
  "picture": "https://image.ibb.co/k0wVTm/profile_pic.jpg",
  "status": "Available"
};

// Create user silce here
const userSlice = createSlice({
  name: 'user',
  initialState,
});

// user Reducer named export here
export const userReducer=userSlice.reducer;

// userSelector export here 
export const userSelector = (state) => state.user;
 
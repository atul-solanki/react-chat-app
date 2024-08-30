// import {applyMiddleware, createStore } from "redux";
// import logger from "redux-logger";
// import {thunk} from "redux-thunk";
// import rootreducer from "../reducers/rootReducer";
import { configureStore } from '@reduxjs/toolkit';
import {userDataReducer} from "../reducers/userDataReducer";
import {userReducer} from "../reducers/userReducer";
// need rootreducer

// export  const store = createStore(rootreducer, applyMiddleware(thunk, logger));



export const store = configureStore({
  reducer: {
    userData:userDataReducer,
    user: userReducer
    // Additional reducers can be added here
  },
});



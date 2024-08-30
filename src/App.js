import React, { useEffect } from "react";
import'./styles/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { fetchFriendsChat, fetchFriendsLastChat, updateContacts } from "./redux/reducers/userDataReducer.js";
import data  from "./data/dummyData.json";
import LeftSideContainer from "./components/LeftComponents/LeftSideContainer.js";
import RightSideContainer from "./components/RightComponents/RightSideContainer.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WelcomeMessage from "./components/RightComponents/WelcomeMessage.js";
import ConversationContainer from "./components/RightComponents/ConversationContainer.js";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import NotFound from "./components/PageNotFound.js";

// Main component of the application
function App() {

  // Create a Routes
  const router = createBrowserRouter([
    {
      path: '/',
      element: <LeftSideContainer />,
      errorElement: <NotFound/>,
      children: [
        {
          path: "",
          element: <RightSideContainer />,
          children: [
            { path: "", element: <WelcomeMessage /> },
            { path: "conversation/:id", element: <ConversationContainer /> }
          ],
        },
      ]
    }
  ]);


  // Redux dispatch hook for dispatching actions
  const dispatch = useDispatch();

  // useEffect hook to fetch initial data when the component mounts
  useEffect(() => {
    // Dispatch actions to fetch initial data from the provided data source
    // These actions are dispatched asynchronously when the component mounts
    if(JSON.parse(localStorage.getItem('friendsLastChat'))=== null){
    localStorage.setItem('friendsChat', JSON.stringify(data.friendsChat));
    localStorage.setItem('contacts', JSON.stringify(data.contacts));
    localStorage.setItem('friendsLastChat', JSON.stringify(data.profile.friendsLastChat));
    dispatch(fetchFriendsLastChat(data.profile.friendsLastChat));
    dispatch(updateContacts(data.contacts));
    dispatch(fetchFriendsChat(data.friendsChat));
    }else{
      dispatch(fetchFriendsLastChat(JSON.parse(localStorage.getItem('friendsLastChat'))));
      dispatch(updateContacts(JSON.parse(localStorage.getItem('contacts'))));
      dispatch(fetchFriendsChat(JSON.parse(localStorage.getItem('friendsChat'))));
    }
  }, [dispatch]); // Dependency array includes dispatch to avoid linting warnings
  
  // Render the main application layout
  return (
    
    <Container fluid id="app">
      <Row>
      <RouterProvider router={router}/>
      </Row>
      <ToastContainer/>
    </Container>
    
     
  );
}

export default App;

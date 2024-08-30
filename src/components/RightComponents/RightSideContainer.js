import React from 'react';
import { Col } from 'react-bootstrap';
import {Outlet} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import '../../styles/conversation.css';
// import WelcomeMessage from './WelcomeMessage';
// import ConversationContainer from './ConversationContainer';
import { fetchFriendsChat, fetchFriendsLastChat, updateContacts } from '../../redux/reducers/userDataReducer';
import  data  from '../../data/dummyData.json';

/**
 * Component for the right side container displaying welcome message or conversation.
 * @returns {JSX.Element} - JSX element representing the RightSideContainer component.
 */
export default function RightSideContainer() {
    const dispatch = useDispatch();

    // Fetch friends' chat, last chat, and update contacts from Redux store
    dispatch(fetchFriendsLastChat(data.profile.friendsLastChat));
    dispatch(updateContacts(data.contacts));
    dispatch(fetchFriendsChat(data.friendsChat));

    return (
        <>
        <Col xs={6} sm={7} md={7} lg={8} xl={8} className="right-container">
            {/* <WelcomeMessage/> */}
            {/* <ConversationContainer/> */}
            {/* Nested routing for displaying either welcome message or conversation */}
            {/* <Routes> */}
                {/* Route for displaying welcome message */}
                {/* <Route path='/' element={<WelcomeMessage />} /> */}
                {/* Route for displaying conversation container */}
                {/* <Route path='/conversation/:id' element={<ConversationContainer />} /> */}
            {/* </Routes> */}
            <Outlet/>
        </Col>
        
        </>
    );
}

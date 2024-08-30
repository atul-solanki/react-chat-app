import React, { useEffect, useState } from 'react';
import '../../styles/leftSide.css';
import { Col } from 'react-bootstrap';
import Navbar from "./navbar/Navbar";
import RecentChatList from "./recentChatList/RecentChatList";
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { userDataSelector } from '../../redux/reducers/userDataReducer';

/**
 * Component for rendering the left side of the chat application.
 * Includes a search bar and a list of recent chats.
 * @returns {JSX.Element} - JSX element representing the LeftSideContainer component.
 */
export default function LeftSideContainer() {
    // Selecting the last chats from the Redux store
    const {friendsLastChat} = useSelector(userDataSelector);
    // State to hold filtered contacts based on search input
    const [filterContacts, setFilterContacts] = useState(friendsLastChat);

    // useEffect to update filtered contacts when friendsLastChat change
    useEffect(() => {
        setFilterContacts(friendsLastChat);
    }, [friendsLastChat]);

    // Function to handle search input and filter contacts accordingly
    const handleSearchInput = (searchValue) => {
        setFilterContacts(friendsLastChat.filter(contact => contact.name.toLowerCase().includes(searchValue.toLowerCase())));
    }

    return (
        <>
        <Col className='left-container' xs={6} sm={5} md={5} lg={4} xl={4}>
            {/* Navbar component for search functionality */}
            <Navbar handleSearchInput={handleSearchInput} />
            {/* RecentChatList component to display list of recent chats */}
            <RecentChatList lastChat={filterContacts} />
        </Col>
        <Outlet />
        </>
    );
}

import React, { useRef, useState } from 'react';
import { Container, Navbar, Button } from 'react-bootstrap';
import UserInfo from "./UserInfo";
import NewConversation from './NewConversation';
import { toast } from 'react-toastify';

// Component representing the left side of the navbar
function NavbarLeft({ handleSearchInput }) {
  // State to manage the modal visibility
  const [smShow, setSmShow] = useState(false);
  // Reference for the search input field
  const searchFieldRef = useRef();
  const notify = () => toast.success("select contact");
  return (
    <>
      {/* Navbar container */}
      <Navbar>
        {/* Container for the navbar content */}
        <Container>
          {/* Component to display user information */}
          <UserInfo />
          {/* Container for search input field and create conversation button */}
          <div className="d-flex">
            {/* Search input field */}
            <input
              type="search"
              placeholder="Search..."
              className="me-2 search-box"
              aria-label="Search"
              ref={searchFieldRef}
              onChange={() => handleSearchInput(searchFieldRef.current.value)}
            />
            {/* Button to open new conversation modal */}
            <Button variant="outline-success" onClick={() => {
              setSmShow(true)
              notify()
            }}>+</Button>
            {/* Label for creating a new conversation */}
            <p className="create-conversation-label">create conversation</p>
            {/* Component for creating a new conversation modal */}
            <NewConversation setSmShow={setSmShow} smShow={smShow} />
          </div>
        </Container>
      </Navbar>
    </>
  );
}

// Export the component as default
export default NavbarLeft;
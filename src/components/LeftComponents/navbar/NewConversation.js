import React from 'react';
import { Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import ContactTab from './ContactTab';

// Component for selecting a contact to start a new conversation
export default function NewConversation({ setSmShow, smShow }) {
    // Selecting contacts from the Redux store
    const contacts = useSelector(state => state.userData.contacts);

    return (
        <>
            {/* Modal for selecting a contact */}
            <Modal
                size="sm"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                {/* Modal header */}
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        Select Contact
                    </Modal.Title>
                </Modal.Header>
                {/* Modal body */}
                <Modal.Body>
                    <ul>
                        {/* Mapping through contacts to display each contact as a ContactTab component */}
                        {contacts && contacts.map((contact) => (
                            <ContactTab key={contact.id} contact={contact} setSmShow={setSmShow} />
                        ))}
                    </ul>
                </Modal.Body>
            </Modal>
        </>
    )
}

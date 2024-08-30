import React from "react";
import { Link } from "react-router-dom";

// Functional component representing a single contact tab
export default function ContactTab({ contact, setSmShow }) {
    return (
        <>
            {/* List item representing a contact */}
            <li id={contact.id} onClick={() => setSmShow(false)}>
                {/* Link to navigate to the conversation with the contact */}
                <Link to={`/conversation/${contact.id}`}>
                    {/* Container for contact's picture */}
                    <div className="">
                        {/* Image element for contact's picture */}
                        <img alt="contactPic" src={contact.picture} />
                    </div>
                    {/* Container for contact's name and status */}
                    <div className="">
                        {/* Contact's name */}
                        <div className="contact-name">{contact.name}</div>
                        {/* Contact's status */}
                        <div className='status'>{contact.status}</div>
                    </div>
                </Link>
            </li>
        </>
    );
}

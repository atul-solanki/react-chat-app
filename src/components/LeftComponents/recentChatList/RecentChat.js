import React from "react";
import { Link } from "react-router-dom";

/**
 * Component to display a recent chat with a friend.
 * @param {Object} friend - Information about the friend.
 * @returns {JSX.Element} - JSX element representing the RecentChat component.
 */
export default function RecentChat({ friend }) {
    return (
        <>
            {/* List item representing a recent chat */}
            <li id={friend.id} >
                {/* Link to navigate to the conversation with the friend */}
                <Link to={`/conversation/${friend.id}`}>
                    {/* Container for the friend's profile picture */}
                    <div className="img-box">
                        <img alt="contactPic" src={friend.picture}/>
                    </div>
                    {/* Container for the recent message */}
                    <div className="recent-msg-box">
                        {/* Displaying the friend's name */}
                        <div className="contact-name">{friend.name}</div>
                        {/* Displaying the last chat message */}
                        <div className='chat-list-message'>{friend.lastChat}</div>
                    </div>
                    {/* Displaying the timestamp of the latest chat */}
                    <div className="time-stamp">{friend.latest_timestamp}</div>
                </Link>
            </li>
        </>
    );
}

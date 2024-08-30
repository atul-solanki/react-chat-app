import React from 'react';
import { Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { userSelector } from '../../../redux/reducers/userReducer';

/**
 * Component for displaying sent messages in the chatbox.
 * @param {Object} props - Component props.
 * @param {string} props.timestamp - Timestamp of the message.
 * @param {string} props.text - Content of the message.
 * @returns {JSX.Element} - SentMsg component.
 */
function SentMsg({ timestamp, text }) {
    // Accessing user information from Redux store
    const user = useSelector(userSelector);
    return (
        <>
            {/* Container for the sent message */}
            <Col md={{ span: 8, offset: 4 }} xl={{ span: 6, offset: 6 }} className="message-bubble mbr">
                {/* user's profile picture */}
                <img className='avtar' src={user.picture} alt="sender-pic" />
                <div className="right-bubble">
                    {/* Message content */}
                    <div className="text-message">
                        <p className={"name"}>You</p>
                        <p className={"message"}>{text}</p>
                        {/* Message timestamp */}
                        <span className={"message-timestamp"}>{timestamp}</span>
                    </div>
                    <div className={"bubble-arrow bubble-arrow-alt"} >
                    </div>
                </div>
            </Col>
        </>
    );
}

export default SentMsg;

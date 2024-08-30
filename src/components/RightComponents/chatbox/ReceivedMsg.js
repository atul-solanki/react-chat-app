import React from 'react';
import { Col } from 'react-bootstrap';

/**
 * Component for displaying received messages in the chatbox.
 * @param {Object} props - Component props.
 * @param {string} props.name - Name of the sender.
 * @param {string} props.image - URL of the sender's profile picture.
 * @param {string} props.timestamp - Timestamp of the message.
 * @param {string} props.text - Content of the message.
 * @returns {JSX.Element} - ReceivedMsg component.
 */
function ReceivedMsg({ name, image, timestamp, text }) {
    return (
        <>
            {/* Container for the received message */}
            <Col md={{ span: 8 }} xl={{ span: 6 }} className="message-bubble mbl">
                {/* Sender's profile picture */}
                <img className='avtar' src={image} alt="sender-pic" />
                <div className="left-bubble">
                    {/* Message content */}
                    <div className="text-message">
                        <p className={"name"}>{name}</p>
                        <p className={"message"}>{text}</p>
                        {/* Message timestamp */}
                        <span className={"message-timestamp"}>{timestamp}</span>
                    </div>
                    <div className={"bubble-arrow"} >
                    </div>
                </div>
            </Col>
        </>
    );
}

export default ReceivedMsg;

import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ReceivedMsg from './chatbox/ReceivedMsg';
import SentMsg from './chatbox/SentMsg';

/**
 * Component to display the message box containing chat messages.
 * Renders received and sent messages based on the chatlog.
 * @param {Object} contact - Contact object containing chatlog.
 * @returns {JSX.Element} - JSX element representing the MessageBox component.
 */
function MessageBox({ contact }) {
  const { chatlog } = contact[0];

  return (
    <>
      {/* Container for the message box */}
      <Container fluid className="chatBox">
        {chatlog.length > 0 && chatlog.map((chat, index) => (
          <Row key={index}>
            {/* Render received messages and sent messages with the help of turnary operator */}
            {chat.side === "left" ? (
              <ReceivedMsg
                name={contact[0].name}
                image={contact[0].picture}
                timestamp={chat.timestamp}
                text={chat.text}
              />
            ) : (
              <SentMsg
                timestamp={chat.timestamp}
                text={chat.text}
              />
            )}
          </Row>
        ))}
      </Container>
    </>
  );
}

export default MessageBox;

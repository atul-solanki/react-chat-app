import React, { useRef } from 'react';
import { Col, Row, Button, Form } from 'react-bootstrap';

/**
 * Component for message input box to type and send messages.
 * @param {Function} createNewMessage - Function to create a new message.
 * @returns {JSX.Element} - JSX element representing the MessageInputBox component.
 */
export default function MessageInputBox({ createNewMessage }) {
    const inputMessageElement = useRef("");

    // Function to get the current timestamp
    const getTimestamp = () => {
        const currentDate = new Date();
        const hours = currentDate.getHours();
        const minutes = currentDate.getMinutes() > 9 ? 
            currentDate.getMinutes() : "0" + currentDate.getMinutes();
        const timeStamp = hours + ":" + minutes + (hours >= 11 ? " PM" : " AM");
        return timeStamp;
    }

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const text = inputMessageElement.current.value;
        if(!text){
            alert("please enter a message");
            return;
        }
        const timeStamp = getTimestamp();
        // Call the function to create a new message
        createNewMessage(text, timeStamp);
        // Clear the input field after submitting the message
        inputMessageElement.current.value = "";
    };

    return (
        <>
            <Col className='message-input-box' xs={6} sm={7} md={7} lg={8} xl={8} >
                <Row >
                    <Form onSubmit={handleSubmit}>
                        {/* Input field for typing the message */}
                        <Form.Control 
                            type="text" 
                            placeholder="Type your message" 
                            ref={inputMessageElement} 
                        />
                        {/* Button to send the message */}
                        <Button 
                            type='submit'
                            variant="primary"
                        >
                            Send
                        </Button>
                    </Form>
                </Row>
            </Col>
        </>
    )
}

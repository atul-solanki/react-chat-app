import React, { useEffect } from "react";
import { toast } from "react-toastify";

/**
 * Component displaying a welcome message for the chat app.
 * @returns {JSX.Element} - JSX element representing the WelcomeMessage component.
 */
export default function WelcomeMessage() {
    const notify = () => toast.success("Log in successful");
    useEffect(()=>{
        notify();
    },[]);
    return (
        <>
            {/* Container for the welcome message */}
            <div className="wlcm-container">
                {/* Welcome message */}
                <div className="wlcm-msg">Welcome To React Chat App</div>
            </div>
        </>
    );
}

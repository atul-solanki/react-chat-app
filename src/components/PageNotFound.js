import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
    // Initialize the navigate function using the useNavigate hook
    const divStyle={
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    }
    const buttonStyle={
        border: `2px solid lightslategray`,
        borderRadius: `5px`,
        padding: `5px 10px`,
        fontWeight: `600`,
        color: `var(--bs-blue)`,
    }
  const navigate = useNavigate();
  return (
    <div style={divStyle}>
      <h1>404 - Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <button style={buttonStyle} onClick={()=>navigate('/')}>Homepage</button>
    </div>
  );
}

export default NotFound;

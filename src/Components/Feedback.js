// src/Components/Feedback.jsx

import React, { useState } from 'react';
import { MdOutlineFeedback } from "react-icons/md";

export default function Feedback() {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your feedback!\n\n" + message);
    setMessage('');
  };

  return (
    <div style={pageStyle}>
      <h1 style={headerStyle}>
        <MdOutlineFeedback /> Send Feedback
      </h1>

      <p style={{ marginBottom: '20px', color: '#555' }}>
        Tell us what you think about our app.
      </p>

      <form onSubmit={handleSubmit} style={{ maxWidth: '800px', width: '100%' }}>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Describe your issue or share your ideas..."
          rows="6"
          style={textareaStyle}
          required
        ></textarea>

        <button
          type="submit"
          style={buttonStyle}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

// === Styles ===

const pageStyle = {
  width: "100%",
  padding: "40px",
  boxSizing: "border-box",
  fontFamily: 'Arial, sans-serif',
};

const headerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '30px',
};

const textareaStyle = {
  width: '100%',
  padding: '10px',
  fontSize: '16px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  resize: 'vertical',
  marginBottom: '20px',
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  borderRadius: '5px',
  border: 'none',
  backgroundColor: '#065fd4',
  color: 'white',
  cursor: 'pointer',
};

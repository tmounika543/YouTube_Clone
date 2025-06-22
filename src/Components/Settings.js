// src/Components/Settings.jsx

import React from 'react';
import { IoSettings } from "react-icons/io5";

export default function Settings() {
  return (
    <div style={pageStyle}>
      <h1 style={headerStyle}>
        <IoSettings /> Settings
      </h1>

      <Section title="Account" items={[
        'Manage your Google Account',
        'Add or manage your channel(s)'
      ]} />

      <Section title="Notifications" items={[
        'Manage push notifications',
        'Email preferences'
      ]} />

      <Section title="Playback and performance" items={[
        'Autoplay',
        'Subtitles and captions'
      ]} />

      <Section title="Privacy" items={[
        'Manage watch history',
        'Manage search history'
      ]} />
    </div>
  );
}

function Section({ title, items }) {
  return (
    <div style={{ marginBottom: '30px' }}>
      <h3>{title}</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {items.map((item, index) => (
          <li
            key={index}
            style={itemStyle}
            onMouseEnter={e => e.currentTarget.style.background = '#f2f2f2'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            {item}
          </li>
        ))}
      </ul>
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
  marginBottom: '40px',
};

const itemStyle = {
  padding: '10px',
  borderRadius: '4px',
  cursor: 'pointer',
  transition: 'background 0.2s',
};

import React from 'react';
import { IoMusicalNotes } from "react-icons/io5";
import { emptyPageContainer, emptyIconStyle, emptyTextStyle } from './Styles/EmptyPageStyle';
export default function Music() {
    return (
        <div style={{ textAlign: 'center', margin: "200px 0px 200px 500px", fontSize: '24px', color: '#555' }}>
            <IoMusicalNotes size={80} color="#999" />
            <p>No music videos found</p>
        </div>
    );
}

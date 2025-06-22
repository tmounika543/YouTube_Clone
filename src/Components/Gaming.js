import React from 'react';
import { SiYoutubegaming } from "react-icons/si";
import { emptyPageContainer, emptyIconStyle, emptyTextStyle } from './Styles/EmptyPageStyle';
export default function Gaming() {
    return (
        <div style={{ textAlign: 'center',margin: "200px 0px 200px 500px", fontSize: '24px', color: '#555' }}>
            <SiYoutubegaming size={80} color="#999" />
            <p>No gaming videos found</p>
        </div>
    );
}

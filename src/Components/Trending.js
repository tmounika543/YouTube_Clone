import React from 'react';
import { HiFire } from "react-icons/hi";
import { emptyPageContainer, emptyIconStyle, emptyTextStyle } from './Styles/EmptyPageStyle';
export default function Trending() {
    return (
        <div style={{ textAlign: 'center', margin: "200px 0px 200px 500px", fontSize: '24px', color: '#555' }}>
            <HiFire size={80} color="#999" />
            <p>No trending videos found</p>
        </div>
    );
}

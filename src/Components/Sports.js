// import React from 'react';
import { MdOutlineSportsMartialArts } from "react-icons/md";
// import { emptyPageContainer, emptyIconStyle, emptyTextStyle } from './Styles/EmptyPageStyle';
export default function Sports() {
    return (
        <div style={{ textAlign: 'center', margin: "200px 0px 200px 500px", fontSize: '24px', color: '#555' }}>
            <MdOutlineSportsMartialArts size={80} color="#999" />
            <p>No sports videos found</p>
        </div>
    );
}

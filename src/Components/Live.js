// import React from 'react';
import { MdLiveTv } from "react-icons/md";
// import { emptyPageContainer, emptyIconStyle, emptyTextStyle } from './Styles/EmptyPageStyle';
export default function Live() {
    return (
        <div style={{ textAlign: 'center', margin: "200px 0px 200px 500px", fontSize: '24px', color: '#555' }}>
            <MdLiveTv size={80} color="#999" />
            <p>No live streams found</p>
        </div>
    );
}

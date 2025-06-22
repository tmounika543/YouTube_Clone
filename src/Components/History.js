// import React from 'react';
import { VscHistory } from "react-icons/vsc";
// import { emptyPageContainer, emptyIconStyle, emptyTextStyle } from './Styles/EmptyPageStyle';
export default function Live() {
    return (
        <div style={{ textAlign: 'center', margin: "200px 0px 200px 500px", fontSize: '24px', color: '#555' }}>
            <VscHistory size={80} color="#999" />
            <p>No History</p>
        </div>
    );
}

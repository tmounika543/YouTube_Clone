// import React from 'react';
import { MdNewspaper } from "react-icons/md";
// import { emptyPageContainer, emptyIconStyle, emptyTextStyle } from './Styles/EmptyPageStyle';
export default function News() {
    return (
        <div style={{ textAlign: 'center', margin: "200px 0px 200px 500px", fontSize: '24px', color: '#555' }}>
            <MdNewspaper size={80} color="#999" />
            <p>No news found</p>
        </div>
    );
}

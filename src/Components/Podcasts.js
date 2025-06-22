// import React from 'react';
import { MdPodcasts } from "react-icons/md";
// import { emptyPageContainer, emptyIconStyle, emptyTextStyle } from './Styles/EmptyPageStyle';
export default function Podcasts() {
    return (
        <div style={{ textAlign: 'center', margin: "200px 0px 200px 500px", fontSize: '24px', color: '#555' }}>
            <MdPodcasts size={80} color="#999" />
            <p>No podcasts found</p>
        </div>
    );
}

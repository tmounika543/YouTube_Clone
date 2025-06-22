// import React from 'react';
import { MdLocalMovies } from "react-icons/md";
// import { emptyPageContainer, emptyIconStyle, emptyTextStyle } from './Styles/EmptyPageStyle';
export default function Movies() {
    return (
        <div style={{ textAlign: 'center', margin: "200px 0px 200px 500px", fontSize: '24px', color: '#555' }}>
            <MdLocalMovies size={80} color="#999" />
            <p>No movies found</p>
        </div>
    );
}

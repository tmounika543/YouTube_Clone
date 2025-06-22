// import React from 'react';
// import { emptyPageContainer, emptyIconStyle, emptyTextStyle } from './Styles/EmptyPageStyle';
import { FaGraduationCap } from "react-icons/fa";

export default function Courses() {
    return (
        <div style={{ textAlign: 'center', margin: "200px 0px 200px 500px", fontSize: '30px', color: '#555' }}>
            <FaGraduationCap size={80} color="#999" />
            <p>No courses found</p>
        </div>
    );
}

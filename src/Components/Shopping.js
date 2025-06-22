// src/Components/Shopping.jsx

import React from 'react';
import { HiShoppingBag } from "react-icons/hi2"; // ✅ CORRECT icon
import { emptyPageContainer, emptyIconStyle, emptyTextStyle } from './Styles/EmptyPageStyle';

export default function Shopping() {
  return (<div style={{ textAlign: 'center', margin: "200px 0px 200px 500px", fontSize: '24px', color: '#555' }}>
      <HiShoppingBag style={emptyIconStyle} />
      <p style={emptyTextStyle}>No shopping items found</p>
    </div>
  );
}

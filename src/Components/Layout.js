import { useContext, useState } from "react";
import Header from "./Header";
import Sider from "./Sider";
import { LoginDataContext } from "../Providers/LoginProvider";

export default function Layout({ children }) {
    const [loginData,] = useContext(LoginDataContext)
    const [isSmallSider,SetisSmallSider]=useState(false)

    console.log(loginData.user)
    return <>
        <Header />
        <div style={{ display: "flex" }}>
            <Sider 
            isSmallSider={isSmallSider}
            SetisSmallSider={SetisSmallSider}
            />
            <div style={{ padding: "30px 10px 30px 30px", marginLeft: "220px", marginTop: "80px" }}>
                {children}
            </div>
        </div>
    </>

}
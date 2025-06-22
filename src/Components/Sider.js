import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts, SiYoutubegaming } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { FaRegUserCircle } from 'react-icons/fa';
import { VscHistory } from "react-icons/vsc";
import { HiFire } from "react-icons/hi";
import { HiShoppingBag } from "react-icons/hi2";
import { IoMusicalNotes } from "react-icons/io5";
import { MdLocalMovies, MdLiveTv, MdNewspaper, MdOutlineSportsMartialArts, MdPodcasts, MdOutlineFeedback } from "react-icons/md";
import { FaGraduationCap } from 'react-icons/fa';
import { GiHanger } from "react-icons/gi";
import { IoSettings } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LoginDataContext } from "../Providers/LoginProvider";

export default function Sider({isSmallSider,SetisSmallSider}) {
    const [loginData] = useContext(LoginDataContext);

    // Common style for rows
    const rowStyle = {
        marginTop: "20px",
        display: "flex",
        alignItems: "center",
        padding: "5px",
        borderRadius: "10px",
        cursor: "pointer"
    };

    // Common style for link text: no underline
    const linkTextStyle = {
        fontSize: "15px",
        marginLeft: "15px",
        textDecoration: "none",
        color: "inherit"
    };

    return (
        <div style={{
            fontSize: "20px",
            marginBottom: "300px",
            marginTop: "100px",
            marginLeft: "20px",
            borderRight: "1px solid black",
            width: "200px",
            height: "80vh",
            maxHeight: '80vh',
            position: "fixed",
            overflow: "auto"
        }}>
            {/* Home */}
            <div
                style={rowStyle}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = "#f2f2f2"}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = "transparent"}
            >
                <IoMdHome />
                <Link to={'/'} style={linkTextStyle}>
                    Home
                </Link>
            </div>

            {/* Shorts */}
            <div
                style={rowStyle}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = "#f2f2f2"}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = "transparent"}
            >
                <SiYoutubeshorts />
                <Link to={'/shorts'} style={linkTextStyle}>
                    Shorts
                </Link>
            </div>

            {/* Subscriptions */}
            <div
                style={rowStyle}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = "#f2f2f2"}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = "transparent"}
            >
                <MdSubscriptions />
                <Link to={'/subscriptions'} style={linkTextStyle}>
                    Subscriptions
                </Link>
            </div>

            <div style={{ border: '1px solid #d7d7de', marginTop: '20px' }} />

            {/* You / Profile */}
            <div
                style={rowStyle}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = "#f2f2f2"}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = "transparent"}
            >
                {
                    loginData?.user ? (
                        <img src={loginData?.user?.picture} width={30} height={30} alt="Profile" />
                    ) : (
                        <FaRegUserCircle />
                    )
                }
                <Link to={'/profile'} style={linkTextStyle}>
                    You
                </Link>
            </div>

            {/* History */}
            <div
                style={rowStyle}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = "#f2f2f2"}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = "transparent"}
            >
                <VscHistory />
                <Link to={'/history'} style={linkTextStyle}>
                    History
                </Link>
            </div>

            {
                loginData?.user ? null : (
                    <div>
                        <Link to={'/login'}>
                            <button
                                style={{
                                    width: "100px",
                                    height: "35px",
                                    border: "1px solid #d7d7dc",
                                    borderRadius: "30px",
                                    background: "none",
                                    marginLeft: "40px",
                                    marginTop: "10px"
                                }}
                            >
                                <div style={{ display: "flex", alignItems: "center", color: "blue" }}>
                                    <div style={{ paddingTop: "4px" }}>
                                        <FaRegUserCircle fontSize="25px" color='blue' />
                                    </div>
                                    <div>&nbsp;&nbsp;Sign In</div>
                                </div>
                            </button>
                        </Link>
                    </div>
                )
            }

            <div style={{ border: '1px solid #d7d7de', marginTop: '20px' }} />

            <div><h5>Explore</h5></div>

            {/* Explore items */}
            {[
                [HiFire, '/trending', 'Trending'],
                [HiShoppingBag, '/shopping', 'Shopping'],
                [IoMusicalNotes, '/music', 'Music'],
                [MdLocalMovies, '/movies', 'Movies'],
                [MdLiveTv, '/live', 'Live'],
                [SiYoutubegaming, '/gaming', 'Gaming'],
                [MdNewspaper, '/news', 'News'],
                [MdOutlineSportsMartialArts, '/sports', 'Sports'],
                [FaGraduationCap, '/courses', 'Courses'],
                [GiHanger, '/fashion', 'Fashion & Beauty'],
                [MdPodcasts, '/podcasts', 'Podcasts']
            ].map(([Icon, path, label], i) => (
                <div
                    key={i}
                    style={rowStyle}
                    onMouseEnter={e => e.currentTarget.style.backgroundColor = "#f2f2f2"}
                    onMouseLeave={e => e.currentTarget.style.backgroundColor = "transparent"}
                >
                    <Icon />
                    <Link to={path} style={linkTextStyle}>
                        {label}
                    </Link>
                </div>
            ))}

            <div style={{ border: '1px solid #d7d7de', marginTop: '20px' }} />

            {/* Settings */}
            <div
                style={rowStyle}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = "#f2f2f2"}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = "transparent"}
            >
                <IoSettings />
                <Link to={'/settings'} style={linkTextStyle}>
                    Settings
                </Link>
            </div>

            <div style={{ border: '1px solid #d7d7de', marginTop: '20px' }} />

            {/* Feedback */}
            <div
                style={rowStyle}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = "#f2f2f2"}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = "transparent"}
            >
                <MdOutlineFeedback />
                <Link to={'/feedback'} style={linkTextStyle}>
                    Send Feedback
                </Link>
            </div>
        </div>
    );
}

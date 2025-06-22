import { useState, useEffect } from "react"
import {BsThreeDotsVertical} from "react-icons/bs"

export default function CategoryBasedData() {
    const [videos, setVideos] = useState([])
    const categoryType = window.location.pathname.split('/')[2]

    useEffect(() => {
        fetch(`http://91.108.104.49:448/api/videos/category/${categoryType}`, { method: "GET" })
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                console.log(data)
                const videosData = []
                const shortsData = []
                data.map((r) => {
                    if (r.videoType === "video") { 
                        videosData.push(r)
                    }
                   
                })
                setVideos(videosData)
            }).catch((err) => {
                console.error(err)
            })
    }, [])

    return <>
        <div style={{ display: "flex", overflow: "hidden", flexWrap: "wrap", gridGap: "20px" }}>
            {
                videos.map((video) => {
                    return <div
                        style={{
                            width: "320px",
                            height: "300px",
                            border: "1px solid black",
                            padding: "10px",
                        }}
                    >
                        <div
                            style={{
                                width: "100%",
                                height: "200px",
                                border: "1px solid black",
                                overflow: "hidden",
                            }}
                        >
                            <video
                                src={`http://91.108.104.49:448/${video.url.replace('\\', '/')}`}
                                // src="http://91.108.104.49:448/uploads/your-video-file.mp4" // ✅ replace with your actual video URL
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                controls
                            />
                        </div>

                        <div style={{ display: "flex", marginTop: "20px" }}>
                            <div style={{ width: "90%" }}>{video.title}</div>
                            <button
                                style={{ float: "right", border: "none", background: "none" }}
                            >
                                <BsThreeDotsVertical
                                    style={{ fontSize: "20px", fontWeight: "100" }}
                                />
                            </button>
                        </div>

                        <div style={{ fontFamily: "ui-sans-serif" }}>
                            33K Views 57 hours ago
                        </div>
                    </div>
                })

            }
        </div>
    </>
}

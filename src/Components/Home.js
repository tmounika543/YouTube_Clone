import { useEffect, useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';

export default function Home() {
  const [videos, setVideos] = useState([]);
  const [categories, setCategories] = useState([]);
  const [shorts, setShorts] = useState([]);

  useEffect(() => {
    fetch('http://91.108.104.49:443/api/videos')
      .then(res => res.json())
      .then(data => {
        const videosData = [];
        const shortsData = [];
        data.forEach(r => {
          if (r.videoType === 'video') videosData.push(r);
          else shortsData.push(r);
        });
        setVideos(videosData);
        setShorts(shortsData);
      })
      .catch(err => console.error(err));

    fetch('http://91.108.104.49:443/api/categories')
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.error(err));
  }, []);

  const categoryButtonStyle = {
    padding: "8px 16px",
    background: "#f2f2f2",
    border: "none",
    borderRadius: "20px",
    fontSize: "14px",
    cursor: "pointer",
    whiteSpace: "nowrap",
    transition: "all 0.3s",
    color: "#000",
  };

  const videoCardStyle = {
    width: "320px",
    borderRadius: "8px",
    overflow: "hidden",
    background: "#fff",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
  };

  const videoWrapperStyle = {
    width: "100%",
    height: "200px",
    overflow: "hidden",
  };

  const shortWrapperStyle = {
    width: "100%",
    height: "300px",
    overflow: "hidden",
  };

  const videoInfoStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
  };

  const videoTitleStyle = {
    flex: 1,
    fontSize: "14px",
    fontWeight: "bold",
  };

  const videoMetaStyle = {
    fontSize: "12px",
    color: "#666",
    padding: "0 10px 10px",
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {/* === Categories === */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          overflowX: "auto",
          paddingBottom: "10px",
          marginBottom: "20px",
        }}
      >
        {categories.map((category, index) => (
          <button
            key={index}
            style={categoryButtonStyle}
            onMouseEnter={e => {
              e.currentTarget.style.background = "#000";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "#f2f2f2";
              e.currentTarget.style.color = "#000";
            }}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* === Videos === */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {videos.map((video, index) => (
          <div key={index} style={videoCardStyle}>
            <div style={videoWrapperStyle}>
              <video
                src={`http://91.108.104.49:443/${video.url.replace('\\', '/')}`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                controls
              />
            </div>
            <div style={videoInfoStyle}>
              <div style={videoTitleStyle}>{video.title}</div>
              <button
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "18px",
                }}
              >
                <BsThreeDotsVertical />
              </button>
            </div>
            <div style={videoMetaStyle}>33K Views • 57 hours ago</div>
          </div>
        ))}
      </div>

      <hr style={{ margin: "40px 0" }} />

      <h3>Shorts</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {shorts.map((short, index) => (
          <div key={index} style={videoCardStyle}>
            <div style={shortWrapperStyle}>
              <video
                src={`http://91.108.104.49:443/${short.url.replace('\\', '/')}`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                controls
              />
            </div>
            <div style={videoInfoStyle}>
              <div style={videoTitleStyle}>{short.title}</div>
              <button
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "18px",
                }}
              >
                <BsThreeDotsVertical />
              </button>
            </div>
            <div style={videoMetaStyle}>33K Views • 57 hours ago</div>
          </div>
        ))}
      </div>
    </div>
  );
}

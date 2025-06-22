import { useState, useEffect, useContext, useMemo } from "react";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { BiSolidCommentAdd, BiX } from "react-icons/bi";
import { IoIosShareAlt } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { LoginDataContext } from "../Providers/LoginProvider";
import { useNavigate } from "react-router-dom";

export default function Shorts() {
  const [shorts, setShorts] = useState([]);
  const [loginData] = useContext(LoginDataContext);
  const isUserLoggedIn = useMemo(() => loginData?.user, [loginData]);
  const navigate = useNavigate();
  const [isSelectedVideoId, setIsSelectedVideoId] = useState(false);
  const [comment, setComment] = useState('');

  useEffect(() => {
    fetch("http://91.108.104.49:443/api/videos")
      .then((res) => res.json())
      .then((data) => {
        const shortsData = data.filter((r) => r.videoType === "shorts");
        setShorts(shortsData);
      })
      .catch((err) => console.error(err));
  }, []);

  function navigateToLogin() {
    navigate("login");
  }

  function handleButtonClick(videoId, type, data = { userId: isUserLoggedIn }) {
    if (!isUserLoggedIn) {
      navigateToLogin();
    } else {
      fetch(`http://91.108.104.49:443/api/videos/${videoId}/${type}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((responseData) => {
          if (
            ["Video shared", "Comment added", "Dislike registered", "Liked"].includes(responseData.message)
          ) {
            const dataCopy = [...shorts];
            const index = dataCopy.findIndex((record) => record._id === videoId);
            if (index > -1) {
              if (type === "like") dataCopy[index].likes = responseData.likes;
              if (type === "dislike") dataCopy[index].likes = responseData.likes;
              if (type === "comment") dataCopy[index].comments = responseData.comments;
              if (type === "share") dataCopy[index].shares = responseData.shares;
              setShorts(dataCopy);
            }
            setComment('');
          }
        });
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!comment.trim()) {
      alert("Comment is required");
      return;
    } else {
      handleButtonClick(isSelectedVideoId, "comment", {
        userId: isUserLoggedIn,
        comment,
      });
      console.log("Submitted comment:", comment);
      setComment("");
      setIsSelectedVideoId(false);
    }
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "600px",
          margin: "0px 0px 200px 300px",
        padding: "20px",
      }}
    >
      {shorts.map((video) => (
        <div
          key={video._id}
          style={{
            position: "relative",
            width: "100%",
            height: "500px",
            backgroundColor: "#000",
            borderRadius: "12px",
            overflow: "hidden",
            marginBottom: "40px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          }}
        >
          <video
            src={`http://91.108.104.49:443/${video.url.replace("\\", "/")}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            autoPlay
            muted
            loop
            controls={false}
          />

          {/* Bottom Info */}
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              left: "20px",
              color: "#fff",
              width: "calc(100% - 100px)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <FaRegUserCircle size={30} />
              <span>@{video.author || "Author"}</span>
              <button
                style={{
                  background: "white",
                  border: "none",
                  borderRadius: "20px",
                  padding: "5px 12px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  if (!isUserLoggedIn) {
                    navigateToLogin();
                  } else {
                    // Subscribe logic
                  }
                }}
              >
                Subscribe
              </button>
            </div>
            <div style={{ marginTop: "10px" }}>{video.title}</div>
          </div>

          {/* Right Controls */}
          <div
            style={{
              position: "absolute",
              bottom: "40px",
              right: "20px",
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
              fontSize: "28px",
            }}
          >
            <BsThreeDotsVertical />
            <AiFillLike
              onClick={() => handleButtonClick(video._id, "like")}
              style={{ cursor: "pointer" }}
            />
            <AiFillDislike
              onClick={() => handleButtonClick(video._id, "dislike")}
              style={{ cursor: "pointer" }}
            />
            <BiSolidCommentAdd
              onClick={() => setIsSelectedVideoId(video._id)}
              style={{ cursor: "pointer" }}
            />
            <IoIosShareAlt
              onClick={() => handleButtonClick(video._id, "share")}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      ))}

      {/* Comment Modal */}
      {isSelectedVideoId && (
        <div
          style={{
            position: "fixed",
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "8px",
              width: "400px",
              maxWidth: "90%",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "15px",
              }}
            >
              <h2 style={{ margin: 0 }}>Add Comment</h2>
              <button
                onClick={() => setIsSelectedVideoId(false)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "20px",
                  color: "#666",
                }}
              >
                <BiX />
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Write your comment here..."
                style={{
                  width: "100%",
                  height: "100px",
                  marginBottom: "10px",
                  padding: "8px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              />
              <div style={{ textAlign: "right" }}>
                <button
                  type="button"
                  onClick={() => setIsSelectedVideoId(false)}
                  style={{
                    marginRight: "10px",
                    padding: "8px 16px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    background: "#f0f0f0",
                    cursor: "pointer",
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  style={{
                    padding: "8px 16px",
                    border: "none",
                    borderRadius: "4px",
                    background: "#0073ff",
                    color: "#fff",
                    cursor: "pointer",
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

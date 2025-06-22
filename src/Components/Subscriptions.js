import { useState, useEffect } from 'react';
// import VideoCard from './VideoCard';
import { Bell, User } from 'lucide-react';
import { useAuth } from '../Contexts/AuthContext';
import { Link } from 'react-router-dom';

const Subscriptions = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      fetchSubscriptionVideos();
    } else {
      setLoading(false);
    }
  }, [isAuthenticated]);

  const fetchSubscriptionVideos = async () => {
    try {
      const response = await fetch('http://91.108.104.49:443/api/videos');
      const data = await response.json();
      const subscriptionVideos = data.slice(0, 10);
      setVideos(subscriptionVideos);
    } catch (error) {
      console.error('Error fetching subscription videos:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <>
        <style>{`
          .center-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 80vh;
            text-align: center;
            padding: 20px;
            
          margin: 0px 0px 200px 300px;
          }

          .icon-large {
            width: 80px;
            height: 80px;
            color: #888;
            margin-bottom: 24px;
          }

          .title {
            font-size: 2.5rem;
            font-weight: bold;
            margin-bottom: 16px;
            color: #333;
          }

          .text {
            font-size: 1.2rem;
            color: #555;
            margin-bottom: 32px;
            max-width: 500px;
          }

          .button {
            background-color: #2563eb;
            color: #fff;
            font-weight: 500;
            padding: 12px 28px;
            border-radius: 6px;
            text-decoration: none;
            transition: background 0.3s;
          }

          .button:hover {
            background-color: #1d4ed8;
          }
        `}</style>

        <div className="center-container">
          <Bell className="icon-large" />
          <h2 className="title">Don't miss new videos</h2>
          <p className="text">
            Sign in to see updates from your favorite channels and never miss the latest uploads.
          </p>
          <Link to="/login" className="button">
            Sign In
          </Link>
        </div>
      </>
    );
  }

  if (loading) {
    return (
      <>
        <style>{`
          .loading-container {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 50vh;
          margin: 200px 0px 200px 500px;
          }

          .spinner {
          
          margin: 200px 0px 200px 500px;
            width: 48px;
            height: 48px;
            border: 4px solid #ddd;
            border-top: 4px solid #2563eb;
            border-radius: 50%;
            animation: spin 1s linear infinite;
          }

          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
        <div className="loading-container">
          <div className="spinner"></div>
        </div>
      </>
    );
  }

  return (
    <>
      <style>{`
        .page-container {
          max-width: 1200px; 
          margin: 200px 0px 200px 500px;
          padding: 40px 20px;
        }

        .header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 32px;
          justify-content: center;
        }

        .header-icon {
          width: 40px;
          height: 40px;
          color: #dc2626;
        }

        .header-title {
          font-size: 2.5rem;
          font-weight: bold;
          color: #333;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 24px;
          justify-items: center;
        }

        .empty {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 60vh;
          text-align: center;
        }
      `}</style>

      <div className="page-container">
        <div className="header">
          <Bell className="header-icon" />
          <h1 className="header-title">Subscriptions</h1>
        </div>

        {videos.length > 0 ? (
          <div className="grid">
            {videos.map((video) => (
              <></>
              // <VideoCard key={video._id} video={video} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <User className="icon-large" />
            <h3 className="title">No videos available right now</h3>
            <p className="text">
              Check back later for new uploads or explore other channels.
            </p>
            <Link to="/" className="button">
              Explore Channels
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Subscriptions;

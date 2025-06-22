import { Routes, Route } from "react-router-dom";
import Layout from './Components/Layout';
import Home from './Components/Home';
import Sider from './Components/Sider';
import Shorts from './Components/Shorts';
import Login from "./Components/Login";
import LoginProvider from "./Providers/LoginProvider";
import Profile from "./Components/Profile";
import CategoryBasedData from "./Components/CategporyBasedData";
import Subscriptions from "./Components/Subscriptions";
import { AuthProvider } from "./Contexts/AuthContext";

// ✅ Import your new pages:
import Trending from "./Components/Trending";
import Shopping from "./Components/Shopping";
import Music from "./Components/Music";
import Movies from "./Components/Movies";
import Live from "./Components/Live";
import Gaming from "./Components/Gaming";
import News from "./Components/News";
import Sports from "./Components/Sports";
import Courses from "./Components/Courses";
import Fashion from "./Components/Fashion";
import Podcasts from "./Components/Podcasts";
import Settings from "./Components/Settings";
import Feedback from "./Components/Feedback";
import History from "./Components/History";

function App() {
  return (
    <AuthProvider>
      <LoginProvider>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/sider" element={<Layout><Sider /></Layout>} />
          <Route path="/shorts" element={<Layout><Shorts /></Layout>} />
          <Route path="/profile" element={<Layout><Profile /></Layout>} />
          <Route path="/video/:categoryType" element={<Layout><CategoryBasedData /></Layout>} />
          <Route path="/login" element={<Login />} />
          <Route path="/subscriptions" element={<Layout><Subscriptions /></Layout>} />
          <Route path="/trending" element={<Layout><Trending /></Layout>} />
          <Route path="/shopping" element={<Layout><Shopping /></Layout>} />
          <Route path="/music" element={<Layout><Music /></Layout>} />
          <Route path="/movies" element={<Layout><Movies /></Layout>} />
          <Route path="/live" element={<Layout><Live /></Layout>} />
          <Route path="/gaming" element={<Layout><Gaming /></Layout>} />
          <Route path="/news" element={<Layout><News /></Layout>} />
          <Route path="/sports" element={<Layout><Sports /></Layout>} />
          <Route path="/courses" element={<Layout><Courses /></Layout>} />
          <Route path="/fashion" element={<Layout><Fashion /></Layout>} />
          <Route path="/podcasts" element={<Layout><Podcasts /></Layout>} />
          <Route path="/settings" element={<Layout><Settings /></Layout>} />
          <Route path="/feedback" element={<Layout><Feedback /></Layout>} />
          <Route path="/history" element={<Layout><History /></Layout>} />
        </Routes>
      </LoginProvider>
    </AuthProvider>
  );
}

export default App;

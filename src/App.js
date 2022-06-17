import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import LogIn from "./Pages/Log-In";
import SignUp from "./Pages/Sign-Up";
import Categories from "./Pages/Categories";
// import Post from "./Pages/Post";
import NewPost from "./Pages/New-Post";
import Postings from "./Pages/Profile/Postings";
import Drafts from "./Pages/Profile/Drafts";
import Settings from "./Pages/Profile/Settings";
// import Search from "./Pages/Search";

import { Account } from "./auth/Accounts";

function App() {
  
  return (
    <BrowserRouter>
      <Account>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<LogIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="categories" element={<Categories />} />
          {/* <Route path="search/:category_id" element={<Search/>} /> */}
          {/* <Route path="post/:post_id" element={<Post/>} /> */}
          <Route path="new-post" element={<NewPost />} />
          <Route path="profile/postings" element={<Postings />} />
          <Route path="profile/drafts" element={<Drafts />} />
          <Route path="profile/settings" element={<Settings />} />
        </Routes>
      </Account>
    </BrowserRouter>
  );
}

export default App;

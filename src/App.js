import Topbar from "./components/topbar/Topbar";
import Home from "./pages/homepage/Home";
import Single from "./pages/homepage/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register";

import { Route, Routes } from "react-router-dom"

function App() {
  const user = false;
  return <>
    <Topbar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/post/:postId" element={<Single />} />
      <Route path="/write" element={<Write />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={user ? <Home /> : <Register />} />
    </Routes>
  </>
}

export default App;

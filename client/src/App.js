import { Route, Routes } from "react-router-dom"
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home.jsx";
import Single from "./pages/single/Single.jsx";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
  return <>
    <Topbar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/post/:postId" element={<Single />} />
      <Route path="/write" element={user ? <Write /> : <Register />} />
      <Route path="/settings" element={user ? <Settings /> : <Register />} />
      <Route path="/login" element={user ? <Home /> : <Login />} />
      <Route path="/register" element={user ? <Home /> : <Register />} />
      <Route path="/single" element={<Single />} />
    </Routes>
  </>
}

export default App;

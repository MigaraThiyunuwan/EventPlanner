// import './App.css';
// import AdminDashBoard from './components/AdminDashBoard';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/style.css";
import Home from "./pages/Home";
import AdminDashboard from "./pages/AdminDashboard";
import AdminProfile from "./pages/AdminProfile";
import Music from "./pages/Music";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ContactUs from "./pages/ContactUs";
import UserProfile from "./pages/UserProfile";

// import HelloWorld from './HelloWorld';

function App() {
  return (
    // <HelloWorld/>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="admindashbord" element={<AdminDashboard />}></Route>
        <Route path="adminprofile" element={<AdminProfile />}></Route>
        <Route path="music" element={<Music />}></Route>
        <Route path="signup" element={<SignUp />}></Route>
        <Route path="signin" element={<SignIn />}></Route>
        <Route path="contactus" element={<ContactUs />}></Route>
        <Route path="/user_profile" element={<UserProfile />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

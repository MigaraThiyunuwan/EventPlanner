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
import Portfolio from "./pages/Portfolio";
import AdminSignin from "./pages/AdminSignin";
import AdminManage from "./pages/AdminManage";
import AdminMessages from "./pages/AdminMessages";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Service from "./pages/Service";

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
        <Route path="portfolio" element={<Portfolio />}></Route>
        <Route path="user_profile" element={<UserProfile />}></Route>
        <Route path="adminlogin" element={<AdminSignin />}></Route>
        <Route path="managepackages" element={<AdminManage />}></Route>
        <Route path="adminmessages" element={<AdminMessages />}></Route>
        <Route path="aboutus" element={<AboutUs />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="services" element={<Service />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

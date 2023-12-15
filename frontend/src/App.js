
// import './App.css';
// import AdminDashBoard from './components/AdminDashBoard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './css/style.css';
import Home from './pages/Home'
import AdminDashboard from './pages/AdminDashboard';
import AdminProfile from './pages/AdminProfile';

// import HelloWorld from './HelloWorld';




function App() {
  return (
    // <HelloWorld/>
   
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="admindashbord" element={<AdminDashboard/>}></Route>
      <Route path="adminprofile" element={<AdminProfile/>}></Route>
    </Routes>
    </BrowserRouter>
  
  );
}

export default App;

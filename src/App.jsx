import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Respond from "./components/Respond.jsx";
import Info from "./components/Info.jsx";


import "./components/navbar.css";

const App = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false); //added

  // const [alert, setAlert] = useState(null);
  // const showAlert = (message, type) => {
  //   setAlert({
  //     msg: message,
  //     type: type,
  //   });
  //   setTimeout(() => {
  //     setAlert(null);
  //   }, 1500);
  // };

  // //added
  // useEffect(() => {
  //   // Check if user is logged in
  //   const token = localStorage.getItem("token");
  //   setIsLoggedIn(!!token); // Set isLoggedIn to true if token exists
  // }, []);

  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/respond" element={<Respond />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

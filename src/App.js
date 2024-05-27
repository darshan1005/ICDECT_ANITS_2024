import React from "react";
import './App.css';
import Header from './Components/header_nav/Header';
import Home from './Components/Home/Home.jsx';
import Footer from "./Components/Footer/footer";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Submission from './Components/Submission';
import Registration from "./Components/Registration";
import Gallery from "./Components/Gallery";
import Institute from "./Components/Institute";
import Conference from './Components/Conference';
import ScrollUp from "./Components/scoller/ScrollUp";

function App() {
  return (
    <>
    <Router>
          <Header />
      <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Submission" element={<Submission />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/Gallery" element={ <Gallery />} />
          <Route path="/Institute" element={ <Institute />} />
          <Route path="/Conference" element={<Conference />} />
      </Routes>
    </Router>
    <footer>
      <Footer />
      <ScrollUp />
    </footer>
    </>
  );
}

export default App;
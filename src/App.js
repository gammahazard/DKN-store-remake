
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Main from "./components/Main";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import FAQ from "./components/Faq";

import "./App.css"
const App = () =>  {
  return (
    <div className="background">
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
<br></br><br></br>
        <Routes>
          <Route exact path="/" element={<Main />} />

          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/faq" element={<FAQ />} />
        </Routes>

     

        <Footer />
    
     



      </Router>
 
    </div>

  )}






export default App;
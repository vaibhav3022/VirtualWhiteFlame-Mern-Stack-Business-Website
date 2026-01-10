import react from "react";
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Gallery from "./pages/Gallery/Gallery";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
 <>
 <Router>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/about" element={<About></About>}></Route>
    <Route path="/services" element={<Services></Services>}></Route>
    <Route path="/gallery" element={<Gallery></Gallery>}></Route>
    <Route path="/contact" element={<Contact></Contact>}></Route>
   </Routes>
   <Footer/>
 </Router>
 
 </>
  );
}

export default App;

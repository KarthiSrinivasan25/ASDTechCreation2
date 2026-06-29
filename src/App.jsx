import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import Navbar from "./component/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Service from "./pages/Service"
import Portfolio from "./pages/Portfolio"
import Career from "./pages/Career";
import Contact from "./pages/Contact"
import Footer from "./component/Footer"
import AnniversaryWidget from "./component/AnniversaryWidget";
import AnniversaryPopup from "./component/AnniversaryPopup"
import Project_Detail from "./pages/Project_Detail";
import ScrollToTop from "./component/ScrollToTop";


function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project-details/:id" element={<Project_Detail />} />
      </Routes>

      <AnniversaryWidget />
      <AnniversaryPopup />
      <Footer />
    </BrowserRouter>

  )
}

export default App

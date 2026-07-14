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
import ServiceDetail from './pages/ServiceDetail'
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiesPolicy from "./pages/CookiesPolicy";
import Accessibility from "./pages/Accessibility";
import ScrollToTopButton from "./component/ScrollToTopButton";
import HelpCenter from "./pages/HelpCenter";
import TermsConditions from "./pages/TermsConditions";
import ReceiptVerification from "./pages/ReceiptVerification";

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollToTopButton />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project-details/:id" element={<Project_Detail />} />
        <Route path="/service/:serviceId" element={<ServiceDetail />} />
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookies-policy" element={<CookiesPolicy />} />
        <Route path="/accessibility" element={<Accessibility />} />
        <Route path="/terms-and-conditions" element={<TermsConditions />} />

        <Route path="/receipt-verification" element={<ReceiptVerification />} />
      </Routes>

      <AnniversaryWidget />
      <AnniversaryPopup />
      <Footer />
    </BrowserRouter>

  )
}

export default App

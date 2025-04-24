import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Signup from './pages/Signup';
import ReviewAndReadPage from './pages/ReviewAndRead';
import PremiumPage from './pages/PremiumPage'
import {Toaster} from './components/ui/sonner';
import BookRead from './pages/BookRead.tsx';
import ContactUs from './pages/ContactUs';

function App() {

  return (
    <>
      <Toaster position="top-right" richColors />
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/privacypolicy' element={<PrivacyPolicy />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/about/reviewAndread' element={<ReviewAndReadPage />} />
        <Route path='/reviewAndread' element={<ReviewAndReadPage />} />
        <Route path='/reviewAndread/premium' element={<PremiumPage />}></Route>
        <Route path='/reviewAndread/BookRead/:id' element={<BookRead />}></Route>
        <Route path='/about/contactUs' element={<ContactUs />}></Route>
        <Route path='/contactUs' element={<ContactUs />}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App

import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Testimonials from './pages/Testimonials/Testimonials';
import Blogs from './pages/Blogs/Blogs';
import ContactUs from './pages/ContactUs/ContactUs';
import AboutUs from './pages/AboutUs/AboutUs';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
       <Route path="/" element={<AboutUs />} />   {/* this is our main page (desktop 6) */}
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

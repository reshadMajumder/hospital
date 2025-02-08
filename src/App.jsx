import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/common/Navigation';
import Footer from './components/common/Footer';
import Home from './components/home/Home';
import Services from './components/pages/Services';
import Doctors from './components/pages/Doctors';
import Departments from './components/pages/Departments';
import Staff from './components/pages/Staff';
import Reviews from './components/pages/Reviews';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import BottomNavigation from './components/common/BottomNavigation';
import DoctorProfile from './components/doctors/DoctorProfile';
import './styles/SlideCards.css';
import './styles/Sections.css';
import './styles/Reviews.css';
import Spinner3D from './components/common/Spinner3D';
import DoctorProfilePage from './components/doctors/DoctorProfilePage';
import { HelmetProvider } from 'react-helmet-async';
import StructuredData from './components/common/StructuredData';


function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="app-wrapper">
          <StructuredData />
          <Routes>


            {/* Public Routes */}
            <Route path="*" element={
              <>
                <Navigation />
                <main className="main-content">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/doctors" element={<Doctors />} />
                    <Route path="/departments" element={<Departments />} />
                    <Route path="/staff" element={<Staff />} />
                    <Route path="/reviews" element={<Reviews />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/Doctor-profile" element={<DoctorProfile />} />
                    <Route path="/spinner" element={<Spinner3D />} />
                    <Route path="/doctors/:id" element={<DoctorProfilePage />} />
                  </Routes>
                </main>
                <BottomNavigation />
                <Footer />
              </>
            } />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
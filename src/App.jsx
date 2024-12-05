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

function App() {
  return (
    <Router>
      <div className="app-wrapper">
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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
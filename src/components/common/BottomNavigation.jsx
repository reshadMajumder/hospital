import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaUserMd, FaHospital, FaInfoCircle } from 'react-icons/fa';

function BottomNavigation() {
  const location = useLocation();

  return (
    <nav className="bottom-navigation  bg-white">
      <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
        <FaHome />
        <span>Home</span>
      </Link>
      <Link to="/doctors" className={location.pathname === '/doctors' ? 'active' : ''}>
        <FaUserMd />
        <span>Doctors</span>
      </Link>
      <Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>
        <FaHospital />
        <span>Services</span>
      </Link>
      <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
        <FaInfoCircle />
        <span>About</span>
      </Link>
    </nav>
  );
}

export default BottomNavigation;
import { useState, useEffect, useRef } from 'react';
import { Form } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import './SearchBar.css';

function SearchBar({ initialValue = '', onSearchChange }) {
  const [searchTerm, setSearchTerm] = useState(initialValue);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [loading, setLoading] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setSearchTerm(initialValue);
  }, [initialValue]);

  const handleSearchTermChange = (value) => {
    setSearchTerm(value);
    if (onSearchChange) {
      onSearchChange(value);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (searchTerm.length < 2) {
        setSuggestions([]);
        return;
      }

      setLoading(true);
      try {
        const response = await axios.get(`https://hospital-api-tau.vercel.app/api/doctors/search/?query=${searchTerm}`);
        setSuggestions(response.data);
        setShowSuggestions(true);
      } catch (error) {
        console.error('Error fetching suggestions:', error);
      } finally {
        setLoading(false);
      }
    };

    const debounceTimer = setTimeout(fetchSuggestions, 300);
    return () => clearTimeout(debounceTimer);
  }, [searchTerm]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/doctors?search=${searchTerm}`);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (doctor) => {
    handleSearchTermChange(doctor.name);
    if (location.pathname === '/doctors') {
      // If already on doctors page, just update the search term
      onSearchChange?.(doctor.name);
    } else {
      // If not on doctors page, navigate and pass the search term
      navigate('/doctors', { 
        state: { searchTerm: doctor.name }
      });
    }
    setShowSuggestions(false);
  };

  return (
    <Form onSubmit={handleSearch} className="search-bar">
      <div className="position-relative" ref={searchRef}>
        <Form.Control
          type="text"
          placeholder="Search doctors, specialties..."
          value={searchTerm}
          onChange={(e) => handleSearchTermChange(e.target.value)}
          autoComplete="off"
        />
        <FaSearch className="search-icon" />

        {showSuggestions && suggestions.length > 0 && (
          <div className="search-suggestions">
            {loading ? (
              <div className="suggestion-item loading">
                Searching...
              </div>
            ) : (
              suggestions.map((doctor) => (
                <div
                  key={doctor.id}
                  className="suggestion-item"
                  onClick={() => handleSuggestionClick(doctor)}
                >
                  <div className="suggestion-text">
                    <span className="suggestion-name">{doctor.name}</span>
                    <span className="suggestion-info">
                      {doctor.specialty} {doctor.department}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </Form>
  );
}

export default SearchBar; 
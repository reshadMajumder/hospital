import { Form, Row, Col } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

function DoctorSearch({ searchTerm, onSearchChange, selectedDepartment, onDepartmentChange, departments }) {
  return (
    <div className="doctor-search-container bg-white p-4 rounded-lg shadow-sm mb-5">
      <Row>
        <Col md={6} className="mb-3 mb-md-0">
          <Form.Group>
            <Form.Label className="text-secondary fw-bold">Search Doctor</Form.Label>
            <div className="position-relative">
              <Form.Control
                type="text"
                placeholder="Search by name or specialty"
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="ps-4"
              />
              <FaSearch className="position-absolute top-50 translate-middle-y text-muted" style={{ left: '1rem' }} />
            </div>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group>
            <Form.Label className="text-secondary fw-bold">Department</Form.Label>
            <Form.Select
              value={selectedDepartment}
              onChange={(e) => onDepartmentChange(e.target.value)}
            >
              <option value="all">All Departments</option>
              {departments.map((dept) => (
                <option key={dept.id} value={dept.id}>
                  {dept.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
    </div>
  );
}

export default DoctorSearch;
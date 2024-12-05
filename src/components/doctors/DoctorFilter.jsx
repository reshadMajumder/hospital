import { Form } from 'react-bootstrap';
import { departments } from '../../data/departments';

function DoctorFilter({ selectedDepartment, onDepartmentChange }) {
  return (
    <Form.Select
      value={selectedDepartment}
      onChange={(e) => onDepartmentChange(e.target.value)}
    >
      <option value="all">All Departments</option>
      {departments.map((department) => (
        <option key={department.id} value={department.id}>
          {department.name}
        </option>
      ))}
    </Form.Select>
  );
}

export default DoctorFilter;
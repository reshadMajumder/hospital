
export const doctors = [
  {
    id: 1,
    name: "Dr. Sarah k Johnson",
    department: "Cardiology",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500",
    specialization: "Interventional Cardiology",
    experience: "15 years",
    education: "MD - Cardiology, MBBS",
    awards: ["Best Cardiologist 2022", "Research Excellence Award"],
    languages: ["English", "Spanish"],
    availability: {
      days: "Monday - Friday",
      hours: "9:00 AM - 5:00 PM"
    },
    bio: "Dr. Sarah Johnson is a renowned cardiologist with extensive experience in interventional procedures and heart disease management."
  },
  {
    id: 2,
    name: "Dr. Michael kk Chen",
    department: "Neurology",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500",
    specialization: "Neurological Surgery",
    experience: "12 years",
    education: "MD - Neurology, MBBS",
    awards: ["Excellence in Neurosurgery 2023"],
    languages: ["English", "Mandarin"],
    availability: {
      days: "Tuesday - Saturday",
      hours: "10:00 AM - 6:00 PM"
    },
    bio: "Dr. Michael Chen specializes in complex neurological surgeries and has pioneered several innovative surgical techniques."
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    department: "Pediatrics",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=500",
    specialization: "Pediatric Care",
    experience: "10 years",
    education: "MD - Pediatrics, MBBS",
    awards: ["Child Care Excellence Award"],
    languages: ["English", "Spanish"],
    availability: {
      days: "Monday - Friday",
      hours: "8:00 AM - 4:00 PM"
    },
    bio: "Dr. Emily Rodriguez is dedicated to providing compassionate care for children and has extensive experience in pediatric medicine."
  }
];


export const Doctors = async () => {
  const response = await fetch('http://127.0.0.1:8000/api/doctors');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const doctors = await response.json();
  return doctors;
};
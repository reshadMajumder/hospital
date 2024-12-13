import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const reviews = [
  {
    id: 1,
    name: "John Doe",
    rating: 5,
    comment: "Excellent service and caring staff. Highly recommended!",
    date: "2024-02-15"
  },
  {
    id: 2,
    name: "Mary Smith",
    rating: 4,
    comment: "Very professional medical care and modern facilities.",
    date: "2024-02-10"
  },
  {
    id: 3,
    name: "David Wilson",
    rating: 5,
    comment: "Outstanding experience with the cardiology department.",
    date: "2024-02-05"
  }
];

function Reviews() {
  const [formData, setFormData] = useState({
    name: '',
    rating: 5,
    comment: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle review submission
    console.log('Review submitted:', formData);
    setFormData({ name: '', rating: 5, comment: '' });
  };

  return (
    <Container className="py-5 py-4 mt-5">
      <h2 className="text-center mb-5">Patient Reviews</h2>
      
      <Row className="mb-5">
        <Col>
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <div className="review-card p-4 bg-light rounded">
                  <div className="stars mb-2">
                    {'★'.repeat(review.rating)}{'☆'.repeat(5-review.rating)}
                  </div>
                  <p className="mb-3">{review.comment}</p>
                  <div className="text-muted">
                    <small>{review.name} - {new Date(review.date).toLocaleDateString()}</small>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={8}>
          <h3 className="text-center mb-4">Share Your Experience</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Rating</Form.Label>
              <Form.Select
                value={formData.rating}
                onChange={(e) => setFormData({...formData, rating: parseInt(e.target.value)})}
              >
                {[5,4,3,2,1].map(num => (
                  <option key={num} value={num}>{num} Stars</option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Comment</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                value={formData.comment}
                onChange={(e) => setFormData({...formData, comment: e.target.value})}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Submit Review
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Reviews;
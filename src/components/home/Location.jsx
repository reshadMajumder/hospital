import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Container, Row, Col } from 'react-bootstrap';

function Location() {
  const mapStyles = {
    height: "400px",
    width: "100%"
  };

  const defaultCenter = {
    lat: 40.7128,
    lng: -74.0060
  };

  return (
    <section className="location-section">
      <Container>
        <h2 className="text-center mb-5">Find Us</h2>
        <Row>
          <Col md={12}>
            <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
              <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={13}
                center={defaultCenter}
              >
                <Marker position={defaultCenter} />
              </GoogleMap>
            </LoadScript>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Location;
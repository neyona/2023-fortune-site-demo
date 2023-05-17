import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import FortuneCuttlefishFloat from '../assets/FortuneCuttlefishFloat.png';

const Confirmation = () => {
  return (
    <>
      <Card className="card-art">
        <Card.Title>
        <h2>Your message has been sent.</h2>
        <br />
        </Card.Title>
        <Card.Body>
          <Container className="container-cuttlefish" fluid>
            <Image
              src={FortuneCuttlefishFloat}
              className="cuttlefish-animation"
              alt="A yellow Cuttlefish that is animated and is also the one that gives the fortunes."
              fluid
            />
          </Container>
          <Col>
            <Link to={"/home"} className="link-router">
              <button className="btn-blue-green">Back to the home page</button>
            </Link>
          </Col>
        </Card.Body>
      </Card>
    </>
  );
};

export default Confirmation;

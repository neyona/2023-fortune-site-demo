import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { FaUniversalAccess, FaExternalLinkAlt } from 'react-icons/fa';
import { BiConfused, BiBot } from 'react-icons/bi';
import { TbSwords } from 'react-icons/tb';
import Title from '../components/Title';

export default function ErrorNote() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
    <Title
      title="Fortunate Cuttlefish | Error"
      description="The error page for the Fortunate Cuttlefish"
      keywords="fortunate cuttlefish, contact me, cuttlefish, fortune, RedBubble Shop, Etsy Shop, Django, React, SASS, Monster Dreams"
    />
      <Card className="card-dark">
        <Card.Title>
          <h1 align="center">Oh No! An Error has occured . . .</h1>
          <p align="center">This is unexpected. This url does not exist.</p>
        </Card.Title>
        <Card.Body>
          <Container align="center">
            <Row>
              <Col>
                <BiBot className="icon-two" />
                <TbSwords className="icon-three" />
                <BiConfused className="icon-two" />
              </Col>
            </Row>
          </Container>
          <br />
          <hr />
          <br />
          <Row align="center">
            <Col>
              <Link to="/home" className="link-router">
                <button className="btn-black-purple">Home Page</button>
              </Link>
            </Col>
            <Col>
              <Link to="/about" className="link-router">
                <button className="btn-black-purple">About Page</button>
              </Link>
            </Col>
          </Row>
          <Row align="center">
            <i>Error Message is: {error.statusText || error.message}</i>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
}

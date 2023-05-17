import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import dateFormat, { masks } from 'dateformat';
import ReactMarkdown from 'react-markdown';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Title from './Title';
import { FaUniversalAccess, FaExternalLinkAlt } from 'react-icons/fa';
import AliceCarousel from 'react-alice-carousel';


const OneMerch = ({merch}) => {
  // The following is necessary to for prices if they are large
  // I'm leaving it in because it's the kind of thing that might be needed
  // generally in pricing
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const items = [
    <div className={`item-${merch.page_background_type}`} data-value="1">
      <Image
        fluid={false}
        height={250}
        src={merch.photo_one}
        alt={`First ${merch.title} Photo`}
      />
    </div>,
    <div className={`item-${merch.page_background_type}`} data-value="2">
      <Image
        fluid={false}
        height={250}
        src={merch.photo_two}
        alt={`Second ${merch.title} Photo`}
      />
    </div>,
    <div className={`item-${merch.page_background_type}`} data-value="3">
      <Image
        fluid={false}
        height={250}
        src={merch.photo_three}
        alt={`Third ${merch.title} Photo`}
      />
    </div>,
    <div className={`item-${merch.page_background_type}`} data-value="4">
      <Image
        fluid={false}
        height={250}
        src={merch.photo_four}
        alt={`Fourth ${merch.title} Photo`}
      />
    </div>,
    <div className={`item-${merch.page_background_type}`} data-value="5">
      <Image
        fluid={false}
        height={250}
        src={merch.photo_five}
        alt={`Fifth ${merch.title} Photo`}
      />
    </div>,
  ];
  const responsive = {
      0: {
          items: 1
      },
      568: {
          items: 2
      },
      1024: {
          items: 3,
          itemsFit: 'contain'
      },
  };

  return (
    <>
      <Title
        title={`Fortunate Cuttlefish | ${merch.title}`}
        description={`The Page for ${merch.title}`}
        keywords={`${merch.meta_tags}`}
      />
      <Card className={`card-${merch.page_background_type}`}>
        <Card.Title>
          <h1 align="center" className={`title-${merch.page_background_type}`}>{merch.product_name}</h1>
        </Card.Title>
        <Card.Body>
          <Row align="center">
            <AliceCarousel
              responsive={responsive}
              mouseTracking
              items={items}
            />
          </Row>
          <Row>
            <h2>Examples of {merch.product_name}</h2>
            <p>This item is availble at
            <span>{" "}</span>
              <a
                className={`link-${merch.page_background_type}`}
                href={`${merch.company_link}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <u>{merch.company}</u> <FaExternalLinkAlt />
              </a>
              <span>{"  "}</span>
            </p>
            <ReactMarkdown>
              {merch.description}
            </ReactMarkdown>
            <Container>
            <Row>
              <br />
              <h2 className={`title-${merch.page_background_type}`} align="center">
                You can navigate to the product, merchandise page, or the home page using the buttons below
              </h2>
            </Row>
            <Row>
            <p>{' '}</p>
            </Row>
            </Container>
            <Container align="center">
              <Row>
                <Col>
                  <a
                    className="special-link"
                    href={`${merch.product_link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  <button className={`btn-${merch.page_background_type}`}>
                    Go see {merch.title} <FaExternalLinkAlt />
                  </button>
                  </a>
              </Col>
                <Col>
                  <Link to={"/merchandise"} className="link-router">
                    <button className={`btn-${merch.page_background_type}`} >Back to the merch page</button>
                  </Link>
                </Col>
                {"  "}{"  "}
                <Col>
                  <Link to={"/home"} className="link-router">
                    <button className={`btn-${merch.page_background_type}`} >Back to the home page</button>
                  </Link>
                </Col>
              </Row>
            </Container>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default OneMerch;

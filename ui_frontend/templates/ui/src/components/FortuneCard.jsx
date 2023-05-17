import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import PropTypes from 'prop-types';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import axios from 'axios';

import OneFortune from './OneFortune';
import FortuneCuttlefishFloat from '../assets/FortuneCuttlefishFloat.png';


const FortuneCard = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const storedata = useSelector(state => state.nameAura.nameAuraItems);

  const nameGet = storedata.map((justName) => (
    <span className="span-fortune-match" key={justName.name}>{justName.name}</span>
  ));

  const auraGet = String(
    storedata.map((justAura) => justAura.auraColor)
  );
  // The following works better than switch as it also works on Chrome Mobile. regular
  // switch does not work on Chrome Mobile.
  const renderProperCard = (val) =>
    ({
      auraOne: 'card-auraOne',
      auraTwo: 'card-auraTwo',
      auraThree: 'card-auraThree',
      auraFour: 'card-auraFour',
      auraFive: 'card-auraFive',
      auraSix: 'card-auraSix',
      auraSeven: 'card-auraSeven',
      auraEight: 'card-auraEight',
      auraNine: 'card-auraNine',
      auraTen: 'card-auraTen',
      auraEleven: 'card-auraEleven',
      auraTwelve: 'card-auraTwelve',
      auraThirteen: 'card-auraThirteen',
    }[val]);

  const currentCardValue = renderProperCard(auraGet);
  const reRouteAuraValue = nameGet.length;
  // below worked when put in useEffect
  useEffect(() => {
    const reRouteAuraValue = nameGet.length;
    if (reRouteAuraValue === 0) {
      navigate('/home');
    }
  }, []);

  return (
    <>
      <Card className={currentCardValue}>
      <Card.Title align="center">
        {nameGet}
        <OneFortune />
      </Card.Title>
      <Card.Body>
          <br />
          <Row>
            <Col>
              <Container className="container-cuttlefish" fluid>
                <Image
                  src={FortuneCuttlefishFloat}
                  className="cuttlefish-animation"
                  alt="A yellow Cuttlefish that is animated and is also the one that gives the fortunes."
                  fluid
                />
              </Container>
            </Col>
          </Row>
        </Card.Body>
        </Card>
      </>
  );
};

export default FortuneCard;

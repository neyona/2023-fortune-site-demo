import React, {
  useEffect,
  useState } from 'react';
import {
  Link,
  useNavigate,
  useParams,
  useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { FaHeartBroken, FaSadTear } from 'react-icons/fa';
import { ImBaffled } from 'react-icons/im';
import { BiConfused, BiBot } from 'react-icons/bi';
import { TbSwords } from 'react-icons/tb';
import { getAllMerch, getMerch } from '../datacalls/getMerch';
import { isUrl } from '../datacalls/urlLoaders';
import Spinner from '../components/Spinner';
import Title from '../components/Title';
import OneMerch from '../components/OneMerch';


// The merchId is here is attached via useParams. It is set in links and books as well.
export default function MerchItem(props) {
  // useParams is what attaches this to the correct page.
  const { merchId } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const checkMerchUrl = isUrl(merchId);
  if (checkMerchUrl == true) {
    const { isLoading, isError, data, error } = useQuery(['merch', merchId], () =>
      getMerch(merchId),
    );
    if (isLoading) {
      return <div align="center"><Spinner /></div>;
    }
    if (isError) {
      return <p>Error from the Merch Item page: {error.message}</p>;
    }
    let merch = data;

    return (
      <>
        <OneMerch merch={merch} />
      </>
    );
  } else if (checkMerchUrl == false) {
    return (
      <>
        <Card className="card-black-blue">
          <Card.Title>
            <Row>
              <h1>Oh No! An Error has occured . . .</h1>
              <p align="center">This is unexpected. This url does not exist.</p>
            </Row>
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
                <Link to="/home">
                  <button className="btn-black-blue">Home Page</button>
                </Link>
              </Col>
              <Col>
                <Link to="/merch">
                  <button className="btn-black-blue">Merch Main Page</button>
                </Link>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </>
    );
  }
};

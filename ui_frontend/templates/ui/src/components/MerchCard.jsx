
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import {
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Figure from 'react-bootstrap/Figure';
import Row from 'react-bootstrap/Row';
import { FaUniversalAccess, FaExternalLinkAlt } from 'react-icons/fa';

import Spinner from './Spinner';
import { getAllMerch, getMerch } from '../datacalls/getMerch';


const MerchCard = ({merch}) => {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <>
      <Card className={`card-${merch.page_background_type}`}>
        <Container>
          <Row>
            <Col xs={12} sm={5} className="element-wrapper">
              <Figure>
                <Figure.Image
                  width={300}
                  height={400}
                  alt="The first merchandise photo"
                  src={merch.photo_one}
                />
              </Figure>
            </Col>

            <Col xs={12} sm={7}>
              <Row>
                <div className={`title-${merch.page_background_type}`} >{merch.product_name}</div>
                <p>Purchase in the {merch.company} store.</p>
                <p>{merch.description.substring(0,200)}...</p>
              </Row>
              <Row>
                <br />
                <Link to={`/merchandise/${merch.slug}`} className="link-router">
                  <button className={`btn-${merch.page_background_type}`} >Click Here To Find Out More</button>
                </Link>
              </Row>
            </Col>
          </Row>
        </Container>

        <br />

        <Container>
          <Row>
            <Col>
              <Row>
                <p></p>
                <hr />
                <p>This product is available from the
                  <span>
                    <a
                      className={`link-${merch.page_background_type}`}
                      href={merch.company_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <u>{merch.company} Shop</u> <FaExternalLinkAlt />
                    </a>
                  </span>
                  <span> and by following this link: </span>
                  <span>
                    <a
                      className={`link-${merch.page_background_type}`}
                      href={merch.product_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <u>{merch.title}</u> <FaExternalLinkAlt />
                    </a>
                  </span>
                </p>
              </Row>
            </Col>
          </Row>
        </Container>
      </Card>
    </>
  );
};

export default MerchCard;

import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import {
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Figure from 'react-bootstrap/Figure';
import Row from 'react-bootstrap/Row';
import { FaFeatherAlt, FaPaperPlane } from 'react-icons/fa';
import { AiOutlineShop } from 'react-icons/ai';

import Title from '../components/Title';
import FortuneForm from '../components/FortuneForm';
import ToggleDyslexiaSwitch from '../buttons/ToggleDyslexiaSwitch';
import { useDyslexiaTheme } from '../buttons/useDyslexiaTheme';

import FirstPageCuttleFishEye from '../assets/FirstPageCuttlefishEye.jpg';
import BedPatternRedbubble from '../assets/BedPatternRedbubble.jpg';
import NarwhalRedbubble from '../assets/NarwhalRedbubble.jpg';
import Manatee from '../assets/Manatee.jpg';

const Home = () => {
  // The Dyslexia Toggle Hook
  const { isDyslexia, toggleDyslexiaTheme } = useDyslexiaTheme();
  return (
    <>
    <Title
      title="Fortunate Cuttlefish | Home"
      description="The home page for the Fortunate Cuttlefish website"
      keywords="fortunate cuttlefish, demo site, little cthulhu, fortune teller, RedBubble Shop, Etsy Shop, Django, React, SASS, Monster Dreams"
    />
      <Card className="card-dark">
        <Container>
          <Row>
            <Col xs={12} sm={5} className="element-wrapper">
              <Figure>
                <Figure.Image
                  width={300}
                  height={400}
                  alt="A Cuttlefish eye close up from the side"
                  src={FirstPageCuttleFishEye}
                  className="img"
                />
                <Figure.Caption className="figure-caption-custom">
                  It's me, the Fortune Giver
                </Figure.Caption>
              </Figure>
            </Col>

            <Col xs={12} sm={7}>
              <h1>
                Hello I am the Underwater Fortune Giver. Would you like some
                guidance by way of a fortune . . .{' '}
              </h1>
            </Col>
          </Row>

          <Row>
            <Container>
              <p>
                . . . Are you feeling brave? If you would like your fortune,
                please enter your name or a fake name of your choosing (letters,
                spaces, and hyphens only please) with at least 2 letters and less,
                than 30 letters, and choose the CURRENT color of your aura.
              </p>
              <br />
            </Container>
          </Row>

          <Row>
            <Container className="container-center">
              <h2 className="special-title">THEN PUSH THE BUTTON!</h2>
            </Container>
          </Row>

          <Row>
            <Container className="container-center">
              <FortuneForm />
            </Container>
          </Row>

          <br />

          <Container>
            <h2>Dyslexia Friendly</h2>
            <p>
              You can toggle the following switch to change the whole site,
              except for the navigation bar, to the Open Dyslexic font.
            </p>
            <ToggleDyslexiaSwitch
              isDyslexia={isDyslexia}
              onChange={toggleDyslexiaTheme}
            />
          </Container>

          <br />

          <Container>
            <h2>About this Site</h2>
            <p>
              This site isn't just about an aggressive fortune telling cephalopod
              it is also a demo site for me, M. Myers. This site has been programmed
              from scratch using Django, the Django Rest Framework, React, and SASS inside Docker containers
              and using docker-compose. There are many other modules and such involved
              as well, like react-router-dom and webpack. The site also links other
              projects like print-on-demand products and patterned digital paper.
              I am looking for more work, and if you are interested, you can contact
              me using the{' '}
              <a href="/contact" rel="noopener noreferrer">
                <u>Contact Page</u>{' '}
                <FaPaperPlane />
              </a>
              {' '}and to learn more, check out the{' '}
              <a href="/about" rel="noopener noreferrer">
                <u>About Page</u>
              </a>{' '}.
            </p>
          </Container>

          <br />

          <Container>
            <Row>
                <h2>Merchandise Examples</h2>
                  <p>
                    This demo site is also linked to merchandise on other sites,
                    and this was done to show how to use createBrowserRouter from
                    react-router-dom on the frontend with a Django backend. The following
                    images link directly to product pages on other sites, under the{' '}
                    <a href="/merchandise" rel="noopener noreferrer">
                      <u>Merch Menu</u>{' '}
                      <AiOutlineShop />
                    </a>
                    {' '} is where you can see createBrowserRouter integrated well with Django.
                  </p>
            </Row>

            <Row>
              <Col>
                <a
                  href="https://www.redbubble.com/shop/ap/143177490?asc=u"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <Figure>
                  <Figure.Image
                    width={300}
                    height={400}
                    alt="A Manatee that is available on Merchandise, looks like a good linked in profile picture"
                    src={Manatee}
                  />
                  <Figure.Caption className="figure-caption-custom">
                    Manatee Avatar Design
                  </Figure.Caption>
                </Figure>
                </a>
              </Col>
              <Col>
                <a
                  href="https://www.redbubble.com/shop/ap/143225947?asc=u"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <Figure>
                  <Figure.Image
                    width={300}
                    height={400}
                    alt="A purple and blue abstract stained glass pattern printed on a Comforter"
                    src={BedPatternRedbubble}
                  />
                  <Figure.Caption className="figure-caption-custom">
                    Abstract Stained Glass Pattern
                  </Figure.Caption>
                </Figure>
                </a>
              </Col>
              <Col>
                <a
                  href="https://www.redbubble.com/shop/ap/43413697"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <Figure>
                  <Figure.Image
                    width={300}
                    height={400}
                    alt="Hand drawn Narwhals staring into a starry sky"
                    src={NarwhalRedbubble}
                  />
                  <Figure.Caption className="figure-caption-custom">
                    Two Hand Drawn Narwhals
                  </Figure.Caption>
                </Figure>
                </a>
              </Col>
            </Row>
          </Container>
        </Container>
      </Card>
    </>
  );
};

export default Home;

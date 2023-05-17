
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { FaPaperPlane, FaFeatherAlt, FaDragon, FaEtsy, FaUniversalAccess, FaExternalLinkAlt } from 'react-icons/fa';
import { SiRedbubble } from 'react-icons/si';

import Spinner from '../components/Spinner';
import Title from '../components/Title';
import AboutMe from '../components/AboutMe';

import Meg_Avatar from '../assets/Meg_Avatar.jpg';
import MBD_KM_Top_of_Airplane from '../assets/MBD_KM_Top_of_Airplane.jpg';
import MDB_KM_Castle from '../assets/MDB_KM_Castle.jpg';
import BookCoverOverGradient from '../assets/BookCoverOverGradient.jpg';
import RedbubbleCuttlefish from '../assets/RedbubbleCuttlefish.jpg';


const About = () => {
  return (
    <>
      <Title
        title="Fortunate Cuttlefish | About"
        description="The about page for the Fortunate Cuttlefish"
        keywords="fortunate cuttlefish, about me, cuttlefish, fortune, RedBubble Shop, Etsy Shop, Django, React, SASS, Monster Dreams"
      />
      <Card className="card-page-alt">
        <h1>Did you like your fortune, land dweller?</h1>
        <hr />

        <Row>
          <Col xs={12} sm={3} className="sidebar-section">
            <Image src={Meg_Avatar} alt="My Avatar" roundedCircle fluid />
          </Col>

          <Col xs={12} sm={9}>
            <h2>About the site and site maker</h2>
            <AboutMe />
            <p>
              <a
                href="https://github.com/neyona/underwaterfortune-2021-version"
                target="_blank"
                rel="noopener noreferrer"
              >
                <u>2021 Underwaterfortune Demo Code</u> <FaExternalLinkAlt />
              </a>
            </p>
            <p>
              I am looking for more work, and know more Python beyond Django, and
              more programming than what was used in this site. The stack is mainly
              Django, the Django Rest Framwwork, React, and Sass, and it is made in
              docker containers using docker-compose and deployed on heroku with
              another site to hide React variables. I have also deployed on AWS before.
            </p>
            <p>
              If you are interested in the hiring me, contact me using the{' '}
              <a
                href="/contact"
              >
                <u>contact page</u>{' '}
                <FaPaperPlane />
              </a>
              if you have comments or questions. You can check out some of my other work here{' '}
              <a
                href="https://github.com/neyona?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <u>github repo</u> <FaExternalLinkAlt />
              </a>
              and here{' '}
              <a
                href="https://armanisarfeinial.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <u>armanisarfeinial.com</u> <FaExternalLinkAlt />
              </a>
              .
            </p>
          </Col>
        </Row>

        <hr />

        <Row>
          <Col xs={12} sm={3} className="sidebar-section">
              <Image
                width={250}
                height={250}
                src={MBD_KM_Top_of_Airplane}
                alt="Book Airplane Picture"
                fluid
              />

            <hr />

              <Image
                width={250}
                height={250}
                src={MDB_KM_Castle}
                alt="A picture of a small castle in the Monster Dreams Book"
                fluid
              />
          </Col>

          <Col xs={12} sm={6} className="main-section">
            <h2>Other projects by the site maker</h2>
            <p>
              I also wrote a children's book and illustrated it with a friend
              who is an excellent art teacher. Check it out here on
              <a
                href="https://www.amazon.com/Monster-Dreams-Meghan-Myers/dp/1548187410/ref=sr_1_3?keywords=monster+dreams+meghan+myers&qid=1558826227&s=gateway&sr=8-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <u>Amazon</u> <FaExternalLinkAlt />
              </a>
              and on{' '}
              <a
                href="https://www.barnesandnoble.com/w/monster-dreams-meghan-myers/1126678255"
                target="_blank"
                rel="noopener noreferrer"
              >
                <u>Barnes & Noble</u> <FaExternalLinkAlt />
              </a>
              .
            </p>
            <p>
              The main illustrations are by Kerri Marshall and the illustrations around
              the text were done by me.
            </p>
          </Col>

          <Col xs={12} sm={3} className="sidebar-section">
            <a
              href="https://www.amazon.com/Monster-Dreams-Meghan-Myers/dp/1548187410/ref=sr_1_3?keywords=monster+dreams+meghan+myers&qid=1558826227&s=gateway&sr=8-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={BookCoverOverGradient}
                alt="Monster Dreams Book Cover in dark blue"
                fluid
              />
            </a>
          </Col>
        </Row>
        <hr />
          <Row>
            <p>I also run a{'  '}
              <span>
                <a
                  href="https://www.redbubble.com/people/aphelionrhode/shop?asc=u"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiRedbubble />{'  '}<u>Rebubble Shop called aphelionrhode</u> <FaExternalLinkAlt />
                </a>
              </span>
              <span>{'  '}and an{'  '}</span>
              <span>
                <a
                  href="https://www.etsy.com/shop/FortunateCuttlefish?ref=related&listing_id=1450764235#items"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaEtsy />{'  '}<u>Etsy Shop called FortunateCuttlefish</u> <FaExternalLinkAlt />
                </a>
              </span>
            </p>
          </Row>
        <hr />
        <Row>
          <Col>
            <h2>A funny video</h2>
            <p>
              The following is just for fun. It is a cute gerbil video.
            </p>
            <p>
              <a
                href="https://youtu.be/bU5e1HB_C9I?autoplay=false&rel=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDragon /> <u>Cute
                Gerbil Video</u> <FaExternalLinkAlt />
              </a>
            </p>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default About;

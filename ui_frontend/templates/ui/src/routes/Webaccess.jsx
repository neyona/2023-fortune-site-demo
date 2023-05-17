import ToggleDyslexiaSwitch from '../buttons/ToggleDyslexiaSwitch';
import { useDyslexiaTheme } from '../buttons/useDyslexiaTheme';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaPaperPlane, FaEye, FaExternalLinkAlt } from 'react-icons/fa';


import Spinner from '../components/Spinner';
import Title from '../components/Title';


const WebAccess = () => {
  // The dyslexia toggle hook
  const { isDyslexia, toggleDyslexiaTheme } = useDyslexiaTheme();

  return (
    <>
      <Title
        title="Fortunate Cuttlefish | Web Access"
        description="The web access policy and information for the Fortunate Cuttlefish"
        keywords="web access, demo site, fortunate cuttlefish, fortune teller, Django, React, SASS, accessibility, Docker"
      />
        <Card className="card-home">
          <Card.Title>
            <h1 align="center">Web Access Policy</h1>
            <hr />
          </Card.Title>
          <Card.Body>
            <p>
              If you need assistance fill out the{' '}
              <a href="/contact" rel="noopener noreferrer">
              <u>Contact Form</u>{' '}
              <FaPaperPlane />
              </a>{' '}
              and a cuttlefish or human will get back to you. Making sure this
              site is accessible to everyone including those of us with disabilities
              is very important. We are working to be more inclusive and strive to
              make it more ADA (American Disabilities Act) compliant.
            </p>

            <p>The following are some of the ways the site complies.</p>
              <ul>
                <li>All images have alternative (alt) text.</li>
                <li>
                  The site is set up to be optimized for screen readers by using
                  proper headings, and three levels of headings only.
                </li>
                <li>This site can be navigated with a keyboard only.</li>
                <li>
                  Most of the text on the site except for the navigation bar at the
                  top can be switched to the Open Dyslexic font.
                </li>
              </ul>

            <hr />

            <h2>
              You can toggle the following switch to change the whole site to the
              Open Dyslexic font, except for the Navigation Bar
            </h2>
            <br />
            <ToggleDyslexiaSwitch
              isDyslexia={isDyslexia}
              onChange={toggleDyslexiaTheme}
            />
            <br />
            <p>
              You can find the Open Dyslexic Site where the font came from here,
              note, this link does open to a new tab:
            </p>
            <p>
            <a
              href="https://opendyslexic.org"
              target="_blank"
              rel="noopener noreferrer"
            >
            <FaEye />{' '}
            <u>Open Dyslexic Site</u>
            {' '}<FaExternalLinkAlt />
          </a>
          </p>
        </Card.Body>
      </Card>
    </>
  );
};

export default WebAccess;

import Card from 'react-bootstrap/Card';
import { FaFeatherAlt, FaPaperPlane } from 'react-icons/fa';

import Title from '../components/Title';
import ContactForm from '../components/ContactForm';

// this is a wrapper for the contact form. The titles are on this page.
const Contact = () => {
  return (
    <>
      <Title
        title="Fortunate Cuttlefish | Contact"
        description="The contact page for the Fortunate Cuttlefish"
        keywords="fortunate cuttlefish, contact me, cuttlefish, fortune, RedBubble Shop, Etsy Shop, Django, React, SASS, Monster Dreams"
      />
      <Card className="card-dark">
        <Card.Title>
          <h1 align="center">
            Contact Form <FaPaperPlane />
          </h1>
          <hr />
          <h2>
            To send a message to the Fortunate Cuttlefish or the human programmer of
            this site, fill out and submit this form.
          </h2>
        </Card.Title>
        <Card.Body>
          <ContactForm endpoint="five-api-name/v1/" />
        </Card.Body>
      </Card>
    </>
  );
};

export default Contact;

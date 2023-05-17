import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { FaUniversalAccess, FaPinterest, FaGithub, FaEtsy, FaDragon, FaExternalLinkAlt } from 'react-icons/fa';
import { SiRedbubble } from 'react-icons/si';

const Footer = () => {
  return (
      <Container fluid className="footer-custom">
        <Row align="center" className="justify-content-md-center">
          <Col md="auto">
            <a href="/webaccess" rel="noopener noreferrer">
              <span><FaUniversalAccess /> Web Access Policy</span>
            </a>
          </Col>

          <Col md="auto">
            <a
              href="https://www.pinterest.com/mjcmyers/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span><FaPinterest /> Pinterest Page <FaExternalLinkAlt /></span>
            </a>
          </Col>

          <Col md="auto">
            <a
              href="https://github.com/neyona?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span><FaGithub /> Github Repositories <FaExternalLinkAlt /></span>
            </a>
          </Col>

          <Col md="auto">
            <a
              href="https://aphelionrhode.redbubble.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span><SiRedbubble /> Rebubble Shop <FaExternalLinkAlt /></span>
            </a>
          </Col>

          <Col md="auto">
            <a
              href="https://www.etsy.com/shop/FortunateCuttlefish?ref=related&listing_id=1450764235#items"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span><FaEtsy /> Etsy Shop <FaExternalLinkAlt /></span>
            </a>
          </Col>

          <Col md="auto">
            <a
              href="https://www.pbs.org/wgbh/nova/camo/anat-nf.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span><FaDragon /> Nova Cuttlefish Page <FaExternalLinkAlt /></span>
            </a>
          </Col>

        </Row>
        <Row align="center">
          <span><b>Fortunate Cuttlefish {new Date().getFullYear()}</b></span>
        </Row>
    </Container>
  );
};

export default Footer;

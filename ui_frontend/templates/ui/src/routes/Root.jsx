import { useEffect, useState, useCallback } from 'react';
import {
  Outlet,
  Link,
  useNavigation,
  ScrollRestoration,
} from 'react-router-dom';
import { useQuery, useIsFetching } from '@tanstack/react-query';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { GiHouse } from 'react-icons/gi';
import { TiThMenuOutline } from "react-icons/ti";

import { getMerch, getAllMerch } from '../datacalls/getMerch';
import Footer from '../components/Footer';
import Spinner from '../components/Spinner';
import navicon from '../assets/navicon.png';


export default function Root() {
    const navigation = useNavigation();

    const options = {
      particles: {
        number: {
          value: 300,
          density: {
            enable: true,
            area: 800
          }
        },
        color: {
          value: ["#ffc300", "#48cae4", "#9f85ff"]
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000"
          },
          polygon: {
            nb_sides: 5
          }
        },
        opacity: {
          value: 0.2,
          random: false
        },
        size: {
          value: { min: 1, max: 3 }
        },
        move: {
          enable: true,
          speed: 0.3,
          direction: "none",
          random: false,
          straight: false,
          outModes: "out"
        }
      }
    };

    const particlesInit = useCallback(async (engine) => {
      await loadFull(engine);
    }, []);

    // console.log("seeing if this runs more than once, I'm in root BEFORE calling getAllMerch");
    const { isLoading, isError, data, error } = useQuery(['merchs'], getAllMerch);
    if (isLoading) {
      return <div align="center"><Spinner /></div>;
    }
    if (isError) {
      return <p>Error from the Root: {error.message}</p>;
    }

    return (
      <>
      <Navbar collapseOnSelect expand="lg" fixed="top" className="navbar-top">
        <Container fluid>
          <Navbar.Brand href="/home">
            <img
              alt="Fortunate Cuttlefish Navicon Image"
              src={navicon}
              width="30"
              height="30"
              className="d-inline-block align-bottom"
            />{' '}
              The Fortunate Cuttlefish
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="offcanvasNavbar-expand-lg"
            >
              <span><TiThMenuOutline color="#f5f5f7" /></span>
            </Navbar.Toggle>
            <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/merchandise">The Merch</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              <Nav.Link href="/webaccess">Accessibility</Nav.Link>
            </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div className="page-container">
        <Particles options={options} init={particlesInit} />
          <Outlet />
        </div>
      <Footer />
    </>
  );
}

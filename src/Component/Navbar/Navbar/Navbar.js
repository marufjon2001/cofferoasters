import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import img from "../../Images/Navbar/Navbar.svg";
import { Link } from "react-router-dom";

const NavbarCof = () => {
  return (
    <div>
      <Navbar
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        bg="#F2F2F2;"
        expand="lg"
      >
        <br />
        <br />
        <br />
        <div
          style={{
            width: "90%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Navbar.Brand>
            <Link to={'/'}>
            <img src={img} alt="" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                style={{
                  fontFamily: "Barlow",
                  fontWeight: "700",
                  fontSize: "12px",
                  lineHeight: "15px",
                  letterSpacing: "0.92px",
                  color: "#83888F",
                }}
              >
                HOME
              </Nav.Link>

              <Nav.Link
                style={{
                  fontFamily: "Barlow",
                  fontWeight: "700",
                  fontSize: "12px",
                  lineHeight: "15px",
                  letterSpacing: "0.92px",
                  color: "#83888F",
                }}
              >
                <Link
                  style={{
                    fontFamily: "Barlow",
                    fontWeight: "700",
                    fontSize: "12px",
                    lineHeight: "15px",
                    letterSpacing: "0.92px",
                    color: "#83888F",
                    textDecoration: "none",
                  }}
                  to={"Abaut_us/"}
                >
                  {" "}
                  ABOUT US{" "}
                </Link>{" "}
              </Nav.Link>

              <Nav.Link
                style={{
                  fontFamily: "Barlow",
                  fontWeight: "700",
                  fontSize: "12px",
                  lineHeight: "15px",
                  letterSpacing: "0.92px",
                  color: "#83888F",
                }}
              >
                 <Link
                  style={{
                    fontFamily: "Barlow",
                    fontWeight: "700",
                    fontSize: "12px",
                    lineHeight: "15px",
                    letterSpacing: "0.92px",
                    color: "#83888F",
                    textDecoration: "none",
                  }}
                  to={"Subscribe"}
                >
                Create your plan
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default NavbarCof;

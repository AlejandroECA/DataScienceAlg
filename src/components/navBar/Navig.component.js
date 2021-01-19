import React from "react";
import "./Navig.style.css";

import {
  Nav,
  NavbarToggler,
  Collapse,
  Navbar,
  NavbarBrand,
  Col,
  Row,
  Container,
} from "reactstrap";

import { NavigReus } from "./NavigationReus";

class Navig extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };
  }

  openOrClose = () => {
    this.setState((prevState, prevProps) => {
      return { isNavOpen: !prevState.isNavOpen };
    });
  };

  render() {
    return (
      <Container>
        <Navbar light expand="lg">
          <NavbarBrand href="/home">
            <img
              src="https://media.giphy.com/media/JmPabUqU22FAbQYkzN/giphy.gif"
              alt="robotlogo"
              width="50px"
              height="50px"
            />
          </NavbarBrand>

          <NavbarToggler className="text-right" onClick={this.openOrClose} />

          <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav>
              <NavigReus link={"home"} name={"Home"} />
              <NavigReus link={"shop"} name={"Shop"} />
              <NavigReus link={"info"} name={"About Us"} />
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    );
  }
}

export default Navig;

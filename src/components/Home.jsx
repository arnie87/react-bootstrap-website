import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h2>Welcome</h2>
          <p>On this page, I show you some examples of React.</p>
          <Link to="/examples">
            <Button bsStyle="primary">Learn More</Button>
          </Link>
        </Jumbotron>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} xsOffset={4} className="person-wrapper">
            <Image src="assets/arnold.jpg" circle className="profile-pic"/>
            <h3>Arnold</h3>
            <p>I'm a web developer learning React.</p>
          </Col>
        </Row>
      </Grid>
    )
  }
}

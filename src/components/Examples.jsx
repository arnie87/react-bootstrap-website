import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Col, Image, Button } from 'react-bootstrap';
import './Examples.css';

export default class Examples extends Component {
  render() {
    return (
      <div>
        <Image src="assets/react.png" className="header-image" />
        <Grid>
          <Col xs={12} sm={8} smOffset={2}>
            <Image src="assets/form.png" className="example-pic" rounded />
            <h3>Form with validation</h3>
            <Link to="https://cranky-brown-916f65.netlify.com/">
              <Button bsStyle="primary">Open Example</Button>
              <Button bsStyle="link">GitHub</Button>
            </Link>
          </Col>
        </Grid>
        <hr/>
        <Grid>
          <Col xs={12} sm={8} smOffset={2}>
            <Image src="assets/flickr.png" className="example-pic" rounded />
            <h3>Flickr Image Search</h3>
            <Link to="/">
              <Button bsStyle="primary">Open Example</Button>
              <Button bsStyle="link">GitHub</Button>
            </Link>
          </Col>
        </Grid>
      </div>
    )
  }
}

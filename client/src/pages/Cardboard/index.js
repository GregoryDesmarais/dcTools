import React, { Component } from "react";
import "./index.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button'


class Cardboard extends Component {

    state = {
        user: "",
        dc: "",
        cab: "",
        customer: "",
        items: ""
    }

    handleInputChange = event => {
        const { id, value } = event.target;
        this.setState({
            [id]: value
        });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(`

        Sending to ${this.state.user}:

        During a routine walk through of our ${this.state.dc} Data Center, combustible materials were found within your environment.
	    At this time, we kindly request that you remove all cardboard, paper, and like materials from your cabinet/cage immediately to follow our standard best practices for our Data Center.
        Location of combustible material: ${this.state.cab}
        Item found: ${this.state.items}
        Please feel free to respond within this ticket or contact us directly regarding this request:
        Thank you, 
        `);
    }


    render() {
        return (
            <Container>
                <Jumbotron>
                    <h1 className='text-center'>Cardboard Report Generator</h1>
                </Jumbotron>
                <Form autoComplete="off">
                    <Form.Row>
                        <Col lg={1}/>
                        <Col lg={5}>
                            <Form.Group controlId="user">
                                <Form.Label>Select User</Form.Label>
                                <Form.Control onChange={this.handleInputChange} as="select" value="Choose...">
                                    <option value="">Select User</option>
                                    <option value="nihika7263@xmailsme.com">Greg</option>
                                    <option value="joe@test.com">Joe</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col lg={5}>
                            <Form.Group controlId="cab">
                                <Form.Label>Cabinet Location</Form.Label>
                                <Form.Control name='dcCab' onChange={this.handleInputChange} placeholder="AZ-01" />
                            </Form.Group>
                        </Col>
                        <Col lg={1}/>
                    </Form.Row>
                    <Form.Row>
                        <Col lg={1}/>
                        <Col lg={5}>
                            <Form.Group controlId="customer">
                                <Form.Label>Customer</Form.Label>
                                <Form.Control name='dcCust' onChange={this.handleInputChange} placeholder="Joe Customer" />
                            </Form.Group>
                        </Col>
                        <Col lg={5}>
                            <Form.Group controlId="dc">
                                <Form.Label>Data Center</Form.Label>
                                <Form.Control name='dcLoc' onChange={this.handleInputChange} placeholder="CLT" />
                            </Form.Group>
                        </Col>
                        <Col lg={1}/>
                    </Form.Row>
                    <Form.Row>
                        <Col lg={1}/>
                        <Col lg={5}>
                            <Form.Group controlId="items">
                                <Form.Label>Items</Form.Label>
                                <Form.Control name='dcItems' onChange={this.handleInputChange} placeholder="Small Cardboard Box" />
                            </Form.Group>
                        </Col>
                        <Col lg={1}/>
                    </Form.Row>
                    <Form.Row>
                        <Col lg={4} />
                        <Col lg={4} className="text-center">
                            <Button variant="primary" type="submit" onClick={this.handleFormSubmit}>Submit</Button>
                        </Col>
                        <Col lg={4} />
                    </Form.Row>
                </Form>
            </Container>
        );
    }
}

export default Cardboard;

import React, { Component } from "react";
import "./index.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
class Main extends Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Jumbotron>
                            <h1 className="text-center">DC Tools</h1>
                            <h4 className="text-center">Click the headers below for information/usage of each tool.</h4>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Accordion>
                            <Card bg="dark">
                                <Accordion.Toggle as={Card.Header} eventKey="0"><h5>Shift Handoff</h5></Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <p>Allows a user to enter items into a Shift Handoff Template.  Once the user has entered all usual items, they can click "Show Preview" to review.</p>
                                        <p>Once reviewed, the user can submit the handoff.  Upon submission, it will perform the following:</p>
                                        <ol>
                                            <li>Store the Handoff information into the site's database.</li>
                                            <li>Copy the Shift Handoff body to the clipboard.</li>
                                            <li>Open a new e-mail (depends on user's default e-mail application)</li>
                                        </ol>
                                        The user can then paste the contents of the Shift Handoff into the email body, and send to the appropriate recipients.
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card bg="dark">
                                <Accordion.Toggle as={Card.Header} eventKey="1"><h5>View Handoffs</h5></Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                        <p>This tool will allow the user to search for and view Handoffs stored in the Database.</p>
                                        <p>Handoffs can be searched for any combination of the following:</p>
                                        <ul>
                                            <li>Shift - Typically 1st, 2nd, 3rd.</li>
                                            <li>Data Center - The shortname location where the technican works.</li>
                                            <li>Date - To seach for all Handoffs for a specific date.</li>
                                        </ul>
                                        <p>The "Shift" and "Data Center" fields will have a selection based on the submitted Handoffs.</p>
                                        <p>Once the parameters are set (The user can leave all parameters to default to retrieve all Handoffs), Clicking "Search" will display links to the Handoffs in the "Search Results" section.</p>
                                        <p>Clicking a link will display the selected handoff on the page via a Modal.</p>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card bg="dark">
                                <Accordion.Toggle as={Card.Header} eventKey="2"><h5>Amber Lights</h5></Accordion.Toggle>
                                <Accordion.Collapse eventKey="2">
                                    <Card.Body>
                                        <p>Generates a template for use in the creation of Amber Light tickets.</p>
                                        <p>Upon clicking Submit, the tool will complete the following:</p>
                                        <ol>
                                            <li>Copy the user's input data into a template, which is then stored to the clipboard.</li>
                                            <li>Open a new e-mail (depends on user's default e-mail application)</li>
                                        </ol>
                                        The user can then paste the contents of the Template into the email body, and send it to whomever needs it.
                        </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card bg="dark">
                                <Accordion.Toggle as={Card.Header} eventKey="3"><h5>Cardboard Tool</h5></Accordion.Toggle>
                                <Accordion.Collapse eventKey="3">
                                    <Card.Body>
                                        <p>Generates a template for use in the creation of Flammable Materials tickets.</p>
                                        <p>Upon clicking Submit, the following will occur:</p>
                                        <ol>
                                            <li>Copy the user's input data into a template, which is then stored to the clipboard.</li>
                                            <li>Open a new e-mail (depends on user's default e-mail application)</li>
                                        </ol>
                                        The user can then paste the contents of the Template into the email body, and send it to whomever needs it.
                            </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Main;

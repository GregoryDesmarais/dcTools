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
                            {/* <h4 className="text-center">
                                DC Tools is a set of Quality of Life tools created for Data Center Technicians.
                            </h4> */}
                            <h4 className="text-center">Click the headers below for information/usage of each tool.</h4>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Accordion>
                            <Card bg="dark">
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                    <h5>Shift Handoff - <a href="/handoff">Open Tool</a></h5>
                                    <p>Allows a user to enter items to prepare a Shift Handoff.  Items are entered one at a time, and can be anything from Tickets worked, to future maintenances/customer visits/etc.</p>
                                    
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <h5>Shift Info</h5>
                                        <ul>
                                            <li><strong>Shift</strong> - The Shift the user is currently working.</li>
                                            <li><strong>Data Center</strong> - The shortname for the Data Center the user is currently working.</li>
                                            <li><strong>Tech(s)</strong> - The user's name, as well as any other users that share the shift.</li>
                                        </ul>
                                        <h5>Item Input</h5>
                                        <ul>
                                            <li><strong>Item Type</strong> - The type of item to be added to the handoff.  The list is as follows:
                                            <ul>
                                                    <li><strong>Announcements</strong> - Used for when customers/vendors are to be expected on site.</li>
                                                    <li><strong>Events</strong> - Any facility/customer based events that may have happened that may not have a ticket associated with it.</li>
                                                    <li><strong>Scheduled Changes/Maintenance</strong> - Any Customer/Vendor maintenance that will occur on the next shift should be listed here.</li>
                                                    <li><strong>Known Issues</strong> - For any issues that are known, and have a scheduled fix/resolution.</li>
                                                    <li><strong>Tape Rotations</strong> - A Ticket item, for any Tape Rotation tickets that may have been worked.</li>
                                                    <li><strong>Backups</strong> - A Ticket item, for any Backup-related tickets that the user may have interacted with.</li>
                                                    <li><strong>Patching</strong> - A Ticket item, for any Patching tickets worked during the shift.</li>
                                                    <li><strong>Other</strong> - A Ticket item, used for any tickets that don't meet the above criteria.</li>
                                                    <li><strong>Notes</strong> - A generic note field.</li>
                                                </ul>
                                            </li>
                                            <li><strong>Title</strong> - The 'subject' line for the item.  This field changes to "Customer" for Ticket-based items.</li>
                                            <li><strong>TID(Ticket ID)</strong> - The TID for the ticket the user is entering.  NOTE: This field only appears for Ticket items.</li>
                                            <li><strong>Notes</strong> - This is where the user will list any notes for the selected item.</li>
                                        </ul>
                                        <p>NOTE: "Add Item" can only be clicked once all fields in the "Item Input" section are filled.</p>
                                        <p>"Preview Handoff" - used once all shift items have been entered, this will show a pop-up of the generated Shift Handoff for review.</p>
                                        <p>
                                            "Send Report" will save the handoff to the database, copy the handoff to the user's clipboard, then open a new e-mail in their default e-mail client.
                                            The user can then paste the contents of the Shift Handoff into the email body, and send to the appropriate recipients.
                                        </p>
                                        <h5>Edit/Remove Items</h5>
                                        <p>The user can select any item that they have entered previously, then click "Edit Item" to load the Item in the "Item Input" section</p>
                                        <p>"Remove Item" will immediately delete the selected item.</p>
                                        <p>"Remove All" will ask the user if they would like to remove all items from the list.</p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card bg="dark">
                                <Accordion.Toggle as={Card.Header} eventKey="1">
                                    <h5>View Handoffs - <a href="/viewhandoff">Open Tool</a></h5>
                                    <p>This tool will allow the user view any Handoffs in the database.</p>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                        <p>Handoffs can be filtered by the following:</p>
                                        <ul>
                                            <li>Shift - Typically 1st, 2nd, 3rd.</li>
                                            <li>Data Center - The shortname location where the technican works.</li>
                                            <li>Date - To seach for all Handoffs for a specific date.</li>
                                        </ul>
                                        <p>The "Shift" and "Data Center" fields will have a selection based on Handoffs stored in the Database.</p>
                                        <p>Clicking an entry will display the selected handoff.</p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card bg="dark">
                                <Accordion.Toggle as={Card.Header} eventKey="2">
                                    <h5>Amber Lights - <a href="/amber">Open Tool</a></h5>
                                    <p>
                                        Generates a template for use in the creation of Amber Light tickets.
                                        Alerts will be saved to the database until removed.
                                    </p>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="2">
                                    <Card.Body>
                                        <h5>Add New Alert</h5>
                                        <ul>
                                            <li><strong>Cabinet Location</strong> - Name of the cabinet of the device in alarm.</li>
                                            <li><strong>RMU</strong> - Rack Mount Unit, the numrical level that the device is mounted at.</li>
                                            <li><strong>Customer</strong> - The Customer that owns the device.</li>
                                            <li><strong>Device Type</strong> - The Make and Model of the device, if available.</li>
                                            <li><strong>Device Label</strong> - The device's external label, if available.</li>
                                            <li><strong>SN/Service Tag</strong> - Device's serial number or service tag, if available.</li>
                                            <li><strong>Alert</strong> - The alert on the device.  The more detail you can provide (readings from a built in panel), the better for the customer for troubleshooting.</li>
                                        </ul>
                                        <h5>View Alerts</h5>
                                        <p>
                                            This section will show the current alerts in the database, which should be used to create customer-facing tickets/emails.  The user can click each header to show the related alert.
                                            The user can then use the "Copy Alert" button to copy the text to the clipboard for easy pasting into a ticket/email.  Once a ticket is opened, the user should follow their standard
                                            procedure (marking the device, etc), then delete the alert in the system.
                                        </p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card bg="dark">
                                <Accordion.Toggle as={Card.Header} eventKey="3">
                                    <h5>Combustible Report - <a href="/combustible">Open Tool</a></h5>
                                    <p>Generates a template for use in the creation of Combustible Materials tickets. Reports will be saved to the database until removed.</p>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="3">
                                    <Card.Body>
                                        <h5>Add New Report</h5>
                                        <ul>
                                            <li><strong>Cabinet Location</strong> - Name of the cabinet of the device in alarm.</li>
                                            <li><strong>Customer</strong> - The Customer that owns the device.</li>
                                            <li><strong>Data Center</strong> - Site shortname.</li>
                                            <li><strong>Items</strong> - Description of combustible items in the cabinet.</li>
                                        </ul>
                                        <h5>View Active Reports</h5>
                                        <p>
                                            As the same with the Amber Light tool, this section will show all active combustible reports in the database.  The user can click each header to show the related alert.
                                            The user can then use the "Copy Alert" button to copy the text to the clipboard for easy pasting into a ticket/email.  Once a ticket is opened, the user should follow their standard
                                            procedure, then delete the alert in the system.
                                        </p>
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

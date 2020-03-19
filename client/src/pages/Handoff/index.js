import React, { Component } from "react";
import "./index.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import HandoffTemplate from "../../components/HandoffTemplate";
import Modal from "react-bootstrap/Modal"


class Handoff extends Component {

    state = {
        show: false,
        date: new Date(),
        names: "",
        shift: "",
        dc: "",
        items: [],
        type: "",
        title: "",
        TID: "",
        body: "",
        modify: "",
        add: true
    }

    //On load, states are set to localStorage if there are values saved.
    componentDidMount = () => {
        this.setState({
            names: localStorage.names || "",
            shift: localStorage.shift || "",
            dc: localStorage.dc || "",
            items: (localStorage.items ? JSON.parse(localStorage.items) : [])
        })
    }

    //Save state data to LocalStorage whenever state changes
    componentDidUpdate = (prevProps, prevStates) => {
        this.saveData();
        this.setSelectSize();
    }

    handleInputChange = event => {
        const { id, value } = event.target;
        this.setState({
            [id]: value,
        });
    }


    setSelectSize = () => {
        if (this.state.items.length < 4)
            document.querySelector("#modify").size = 4;
        else
            document.querySelector("#modify").size = this.state.items.length + 1;
    }

    //Save item to state.  Update fields accordingly.
    addItem = event => {
        event.preventDefault();
        let item = {
            type: this.state.type,
            title: this.state.title,
            TID: this.state.TID,
            body: this.state.body
        };
        let items = this.state.items;
        items.push(item);
        this.setState({
            items: items,
            type: "",
            title: "",
            TID: "",
            body: ""
        })
    }

    saveData() {
        localStorage.items = JSON.stringify(this.state.items);
        localStorage.names = this.state.names;
        localStorage.shift = this.state.shift;
        localStorage.dc = this.state.dc;
    }

    //Edit selected item.  Selecting "edit" button will put the data back into the appropriate fields for updating and saving.
    //Remove will remove one.
    editItem(event, edit) {
        event.preventDefault();
        //Remove all will remove all.
        if (edit === "all") {
            let verify = window.confirm("Are you sure you want to clear all tickets?")
            if (verify) {
                this.setState({
                    items: []
                })
                return;
            }
            else {
                return;
            }
        }
        //Get values of selected ticket
        let modify = this.state.items[this.state.modify];
        //Make copy of the state.items array
        let tempArray = [...this.state.items];
        //Remove the index of the selected ticket to edit/remove
        tempArray.splice(this.state.modify, 1);
        //Update the items and modify states to update the ticket list and set the Edit ticket dropdown
        this.setState({
            items: tempArray,
            modify: ""
        })
        //If edit was selected, change the states below to update the appropriate fields.
        if (edit === "edit") {
            this.setState({
                type: modify.type,
                title: modify.title,
                TID: modify.TID,
                body: modify.body,
            })
        }
    }

    checkitems = () => {
        const { title, body, TID, type } = this.state;
        if (type === "")
            return false;
        else if (["tapes", "backup", "patch", "other"].includes(type)) {
            console.log("Ticket Selected")
            return (title.length > 0 && body.length > 0 && TID.length > 0)
        }
        else {
            return (title.length > 0 && body.length > 0)
        }
    }

    showPreview = () => this.setState({ show: true });
    hidePreview = () => this.setState({ show: false });

    render() {
        const enable = this.checkitems()
        return (
            <Container>
                <Row>
                    <Col lg={6} className="pb-6">
                        <Row>
                            <Col>
                                <h4 className="text-center">Shift Info</h4></Col>
                        </Row>
                        <Row>
                            <Col lg={6} className="shift">
                                <Form.Group>
                                    <Form.Label>
                                        Shift
                                    </Form.Label>
                                    <FormControl
                                        required
                                        id="shift"
                                        onChange={this.handleInputChange}
                                        placeholder="1st, 2nd, etc"
                                        aria-label="Shift"
                                        value={this.state.shift}
                                    />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group>
                                    <Form.Label>
                                        Data Center
                                    </Form.Label>
                                    <FormControl
                                        required
                                        id="dc"
                                        onChange={this.handleInputChange}
                                        placeholder="CLT1"
                                        aria-label="Enter Data Center name"
                                        value={this.state.dc}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>
                                        Tech(s)
                                    </Form.Label>
                                    <FormControl
                                        required
                                        id="names"
                                        onChange={this.handleInputChange}
                                        placeholder="Tech(s) on Site"
                                        aria-label="Tech(s) on Site"
                                        value={this.state.names}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h4 className='text-center'>Item Input</h4></Col>
                        </Row>
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Group controlId="type">
                                        <Form.Label>Item Type</Form.Label>
                                        <Form.Control required onChange={this.handleInputChange} as="select" value={this.state.type}>
                                            <option value="">Select Item Type</option>
                                            <option value="announce">Announcements</option>
                                            <option value="events">Events</option>
                                            <option value="maint">Changes/Maintenance</option>
                                            <option value="issues">Known Issue</option>
                                            <option value="tapes">Tape Rotation</option>
                                            <option value="backup">Backups</option>
                                            <option value="patch">Patching</option>
                                            <option value="other">Other</option>
                                            <option value="notes">Notes</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group controlId="title">
                                        <Form.Label>{["tapes", "backup", "patch", "other"].includes(this.state.type) ? "Customer" : "Title"}</Form.Label>
                                        <Form.Control required name="dcTitle" onChange={this.handleInputChange} value={this.state.title}></Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col className={["tapes", "backup", "patch", "other"].includes(this.state.type) ? "" : "hide"}>
                                    <Form.Group controlId="TID">
                                        <Form.Label>TID</Form.Label>
                                        <Form.Control
                                            name="dcTID"
                                            onChange={this.handleInputChange}
                                            value={this.state.TID}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group controlId="body">
                                        <Form.Label>Notes</Form.Label>
                                        <Form.Control required name="dcbody" onChange={this.handleInputChange} as="textarea" rows="4" value={this.state.body}></Form.Control>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="text-center">
                                    <Button variant="primary" type="submit" onClick={this.addItem} disabled={!enable}>Add Item</Button>
                                </Col>
                                <Col lg={4} />
                                <Col>
                                    <Button onClick={this.showPreview}>Preview Handoff</Button>
                                </Col>
                                <Col lg={4} />
                            </Row>
                        </Form>
                    </Col>
                    <Col lg={6}>
                        <Row>
                            <Col>
                                <h4 className='text-center'>Edit/Remove Items</h4>
                            </Col>
                        </Row>
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Group controlId="modify">
                                        <Form.Label>Edit/Remove Items</Form.Label>
                                        <Form.Control as="select" onChange={this.handleInputChange}>
                                            {/* <option value="">Select Item</option> */}
                                            {this.state.items.map((item, i) => {
                                                return (
                                                    <option key={i} value={i}>{item.type} - {item.TID !== "" ? `${item.TID} - ` : ""}{item.title}</option>
                                                )
                                            })}
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className="text-center">
                                <Col>
                                    <Button type="submit" disabled={!this.state.modify} onClick={(event) => this.editItem(event, "edit")}>Edit Item</Button>
                                </Col>
                                <Col>
                                    <Button type="submit" disabled={!this.state.modify} variant="warning" onClick={(event) => this.editItem(event, "remove")}>Remove Item</Button>
                                </Col>
                                <Col>
                                    <Button type="submit" variant="danger" onClick={(event) => this.editItem(event, "all")}>Remove All</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                    <Modal show={this.state.show} onHide={this.hidePreview}>
                        <Modal.Header closeButton className="dark">
                            <Modal.Title>Viewing Handoff</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="dark">
                            <HandoffTemplate
                                hidePreview={this.hidePreview}
                                createEmail={this.props.createEmail}
                                date={`${this.state.date.getMonth() + 1}/${this.state.date.getDate()}/${this.state.date.getFullYear()}`}
                                names={this.state.names}
                                shift={this.state.shift}
                                dc={this.state.dc}
                                items={this.state.items}
                            />
                        </Modal.Body>
                    </Modal>
                </Row>
            </Container>);
    }
}

export default Handoff;

import React, { Component } from "react";
import "./index.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Jumbotron from "react-bootstrap/Jumbotron";
import Template from "../../components/Template";


class Handoff extends Component {

    state = {
        names: "",
        shift: "",
        dc: "",
        items: [],
        type: "announce",
        title: "",
        TID: "",
        body: "",
        modify: "",
    }

    componentDidMount = () => {
        
        this.setState({
            names: localStorage.names || "",
            shift: localStorage.shift || "",
            dc: localStorage.dc || "",
            items: (localStorage.items ? JSON.parse(localStorage.items) : [])
        })
    }

    componentDidUpdate = (prevProps, prevStates) => {
        this.saveData()
    }

    handleInputChange = event => {
        const { id, value } = event.target;
        this.setState({
            [id]: value
        });
    }

    handleSubmitButton = event => {
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
            type: "announce",
            title: "",
            TID: "",
            body: ""
        })
    }

    saveData(){
        localStorage.items = JSON.stringify(this.state.items);
        localStorage.names = this.state.names;
        localStorage.shift = this.state.shift;
        localStorage.dc = this.state.dc;
    }

    editItem(event, edit){
        event.preventDefault();
        this.setState({
            type: "events",
            title: "Test Title", 
            TID: "", 
            body: "Testing this stufff"
        })
        return;
        console.log(this.state.items)
        let tempItems = [...this.state.items];
        console.log(tempItems);
        let removed = tempItems.splice(this.state.modify,1);
        console.log(removed);
        this.setState({
            type: removed.type,
            title: removed.title,
            TID: removed.TID,
            body: removed.body,
        })
        console.log(this.state)

            // this.setState({
            //     items: tempItems
            // })

    }

    render() {
        return (<>
            <Container>
                <Jumbotron>
                    <Col className="text-center"><h1>Shift Handoff Portal</h1></Col>
                </Jumbotron>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <Row>
                            <Col lg={6}>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>Shift</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        id="shift"
                                        onChange={this.handleInputChange}
                                        placeholder="1st, 2nd, etc"
                                        aria-label="Shift"
                                        value={this.state.shift}
                                    />
                                </InputGroup>
                            </Col>
                            <Col lg={6}>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>Data Center</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        id="dc"
                                        onChange={this.handleInputChange}
                                        placeholder="CLT1"
                                        aria-label="Enter Data Center name"
                                        value={this.state.dc}
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>Tech(s)</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        id="names"
                                        onChange={this.handleInputChange}
                                        placeholder="Tech(s) on Site"
                                        aria-label="Tech(s) on Site"
                                        value={this.state.names}
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                        <br/><br/>
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Group controlId="type">
                                        <Form.Label>Item Type</Form.Label>
                                        <Form.Control onChange={this.handleInputChange} as="select" value={this.state.type}>
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
                                    <Form.Label>Title/Customer</Form.Label>
                                    <Form.Control name="dcTitle" onChange={this.handleInputChange} value={this.state.title}></Form.Control>
                                </Form.Group>
                                </Col>
                                <Col>
                                <Form.Group controlId="TID">
                                    <Form.Label>TID (If Applicable)</Form.Label>
                                    <Form.Control name="dcTID" onChange={this.handleInputChange} value={this.state.TID}></Form.Control>
                                </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                <Form.Group controlId="body">
                                    <Form.Label>Notes</Form.Label>
                                    <Form.Control name="dcbody" onChange={this.handleInputChange} as="textarea" rows="4" value={this.state.body}></Form.Control>
                                </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={4}/>
                                <Col>
                                <Button variant="primary" type="submit" onClick={this.handleSubmitButton}>Add Item</Button>
                                </Col>
                                <Col lg={4}/>
                            </Row>
                        </Form>
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Group controlId="modify">
                                        <Form.Label>Edit/Remove Items</Form.Label>
                                        <Form.Control as="select" onChange={this.handleInputChange}>
                                            <option value="">Select Ticket</option>
                                            {this.state.items.map((item, i) => {
                                                return(
                                                    <option key={i} value={i}>{item.title}</option>
                                                )
                                            })}
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className="text-center">
                                <Col>
                                    <Button type="submit" onClick={(event)=> this.editItem(event, true)}>Edit Item</Button>
                                </Col>
                                <Col>
                                    <Button type="submit" onClick={(event) => this.editItem(event,false)}>Remove Item</Button>
                                </Col>
                            </Row>
                            </Form>
                    </Col>
                    <Col>
                        <Template
                            names={this.state.names}
                            shift={this.state.shift}
                            dc={this.state.dc}
                            items={this.state.items}
                        />
                    </Col>
                </Row>
            </Container >
        </>);
    }
}

export default Handoff;

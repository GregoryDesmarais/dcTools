import React, { Component } from "react";
import "./index.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import API from "../../utils/API";

class Main extends Component {

    state = {
        user: "",
        password: ""
    }

    handleInputChange = event => {
        const { id, value } = event.target;
        this.setState({
            [id]: value
        });
    }

    createUser = event => {
        event.preventDefault();
        const body = {
            username: this.state.user,
            password: this.state.password
        }
        API.newUser(body)
        .then(res => {
            alert(res.data)
        })

        this.setState({
            user: "",
            password: ""
        })
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Jumbotron>
                            <h1 className="text-center">
                                Add/Remove Users
                            </h1>
                            <h3>
                                User: {this.state.user} Password: {this.state.password}
                            </h3>
                        </Jumbotron>
                    </Col>
                </Row>
                <Form>
                    <Form.Row>
                        <Col>
                            <Form.Group controlId="user">
                                <Form.Label>Username</Form.Label>
                                <Form.Control name="dcAddUser" onChange={this.handleInputChange} placeholder="Joe Customer" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name="dcAddUserPass" onChange={this.handleInputChange} placeholder="password" />
                            </Form.Group>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col lg={4} />
                        <Col lg={4} className="text-center">
                            <Button variant="primary" type="submit" onClick={this.createUser}>Add User</Button>
                        </Col>
                        <Col lg={4} />
                    </Form.Row>
                </Form>
                <Form>
                    <Form.Row>
                        <Col>
                            <Form.Group controlId="dcRemoveUser">
                                <Form.Label>Select User</Form.Label>
                                <Form.Control name="dcRemoveUser" onChange={this.handleInputChange} as="select" value="Choose...">
                                    <option>Select...</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
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

export default Main;

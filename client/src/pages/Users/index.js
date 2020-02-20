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
        password: "",
        users: [],
        dcRemoveUser: ""
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
            .then(() => {
                this.setState({
                    user: "",
                    password: ""
                });
                this.getUsers()
            })
    }

    removeUser = event => {
        event.preventDefault();
        if (this.state.dcRemoveUser !== '') {
            const body = {
                _id: this.state.dcRemoveUser
            }
            API.removeUser(body)
                .then(res => console.log(res))

            this.setState({
                dcRemoveUser: ""
            })

            this.getUsers();
        }
    }

    getUsers = () => {
        API.getUsers()
            .then(res => {
                this.setState({
                    users: res.data
                });
            })
    }

    componentDidMount() {
        this.getUsers()
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
                        </Jumbotron>
                    </Col>
                </Row>
                <Form>
                    <Form.Row>
                        <Col>
                            <Form.Group controlId="user">
                                <Form.Label>Username</Form.Label>
                                <Form.Control name="dcAddUser" onChange={this.handleInputChange} placeholder="Joe Customer" value={this.state.user} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name="dcAddUserPass" onChange={this.handleInputChange} placeholder="Password" value={this.state.password} />
                            </Form.Group>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col lg={4} />
                        <Col lg={4} className="text-center">
                            <Button 
                                variant="primary" 
                                type="submit" 
                                onClick={this.createUser}
                                disabled={!this.state.user || !this.state.password}>Add User</Button>
                        </Col>
                        <Col lg={4} />
                    </Form.Row>
                </Form>
                <Form>
                    <Form.Row>
                        <Col>
                            <Form.Group controlId="dcRemoveUser">
                                <Form.Label>Remove User</Form.Label>
                                <Form.Control name="dcRemoveUser" onChange={this.handleInputChange} as="select" value={this.state.dcRemoveUser}>
                                    <option value=''>Select...</option>
                                    {this.state.users.map(user => {
                                        return (
                                            <option key={user._id} value={user._id}>{user.username}</option>
                                        )
                                    })}
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col lg={4} />
                        <Col lg={4} className="text-center">
                            <Button
                                variant="primary"
                                type="submit"
                                onClick={this.removeUser}
                                disabled={!this.state.dcRemoveUser}
                            >
                                Remove User
                        </Button>
                        </Col>
                        <Col lg={4} />
                    </Form.Row>
                </Form>

            </Container>
        );
    }
}

export default Main;

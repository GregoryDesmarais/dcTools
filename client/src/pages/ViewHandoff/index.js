import React, { Component } from "react";
import API from "../../utils/HandoffAPI"
import "./index.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import HandoffTemplate from "../../components/HandoffTemplate"
import Modal from 'react-bootstrap/Modal'


class ViewHandoff extends Component {

    state = {
        show: false,
        shift: "",
        datacenter: "",
        date: "",
        shiftList: [],
        dcList: [],
        data: [],
        preview: {
            date: "",
            names: "",
            shift: "",
            dc: "",
            items: ""
        },
    }

    // clearFilter = () => {
    //     this.setState({
    //         shift: "",
    //         datacenter: "",
    //         date: "",
    //     }, ()=> {this.getData()})
    // }

    getData = () => {
        let tempDate = new Date(this.state.date);
        let date = `${tempDate.getUTCMonth() + 1}/${tempDate.getUTCDate()}/${tempDate.getUTCFullYear()}`;
        let body = {};
        if (this.state.shift.length > 0)
            body.shift = this.state.shift;
        if (this.state.datacenter.length > 0)
            body.datacenter = this.state.datacenter;
        if (this.state.date.length > 0)
            body.date = date;
        API.getHandoffs(body)
            .then(res => {
                this.setState({
                    data: res.data
                });
            })
    }

    handleInputChange = event => {
        const { id, value } = event.target;
        this.setState({
            [id]: value
        }, () => { this.getData() });
    }

    componentDidMount = () => {
        this.getData();
        API.getShifts()
            .then(res => {
                this.setState({
                    shiftList: res.data.sort()
                })
            });
        API.getDCs()
            .then(res => {
                this.setState({
                    dcList: res.data.sort()
                })
            });
    }

    showPreview = (id) => {
        let data = this.state.data.filter(item => { return item._id === id })
        this.setState({
            preview: {
                date: data[0].date,
                names: data[0].names,
                shift: data[0].shift,
                dc: data[0].datacenter,
                items: data[0].items,
            },
            show: true
        })
    }

    hidePreview = () => {
        this.setState({ show: false })
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col lg={6}>
                        <Row>
                            <Col>
                                <h4 className="text-center">Filter By</h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group controlId='shift'>
                                    <Form.Label>Shift</Form.Label>
                                    <FormControl as="select" onChange={this.handleInputChange}>
                                        <option value=''>Select Shift</option>
                                        {this.state.shiftList.map((item, i) => {
                                            return (<option key={i} value={item}>{item}</option>)
                                        })}
                                    </FormControl>
                                </Form.Group>
                                <Form.Group controlId='datacenter' onChange={this.handleInputChange}>
                                    <Form.Label>Data Center</Form.Label>
                                    <FormControl as="select">
                                        <option value=''>Select Data Center</option>
                                        {this.state.dcList.map((item, i) => {
                                            return (<option key={i} value={item}>{item}</option>)
                                        })}
                                    </FormControl>
                                </Form.Group>
                                <Form.Group controlId='date' onChange={this.handleInputChange}>
                                    <Form.Label>Handoff Date</Form.Label>
                                    <FormControl
                                        type='date'
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Row>
                                        <Col>
                                            <Button onClick={this.getData}>
                                                Filter
                                            </Button>
                                        </Col>
                                        {/* <Col className="text-right">
                                            <Button onClick={this.clearFilter}>Clear Filters</Button>
                                        </Col> */}
                                    </Row>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={6}>
                        <Row>
                            <Col>
                                <h4 className="text-center">Results</h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                {
                                    this.state.data.length === 0 ? <h5>There are no reports for the filters you have selected.</h5>
                                        : this.state.data.map(item => {
                                            return (
                                                <Row
                                                    key={item._id}
                                                    style={{ padding: "0" }}
                                                    className="btnRow"
                                                >
                                                    <Col>
                                                        <Button
                                                            variant="dark"
                                                            className="reportBtn"
                                                            onClick={() => this.showPreview(item._id)}
                                                        >
                                                            <h5>{item.date} - {item.datacenter} - {item.shift} Shift</h5>
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            )
                                        })}
                            </Col>
                        </Row>
                    </Col>
                    <Modal show={this.state.show} onHide={this.hidePreview}>
                        <Modal.Header closeButton className="dark">
                            <Modal.Title>Viewing Handoff</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="dark">
                            <HandoffTemplate
                                date={this.state.preview.date}
                                names={this.state.preview.names}
                                shift={this.state.preview.shift}
                                dc={this.state.preview.dc}
                                items={this.state.preview.items}
                            />
                        </Modal.Body>
                    </Modal>
                </Row>
            </Container>
        )
    }



}
export default ViewHandoff;

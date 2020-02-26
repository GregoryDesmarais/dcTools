import React, { Component } from "react";
import API from "../../utils/API"
// import "./index.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Template from "../../components/Template"


class ViewHandoff extends Component {

    state = {
        shift: "",
        shiftList: [],
        datacenter: "",
        dcList: [],
        date: "",
        data: [],
        preview: {
            date: "",
            names: "",
            shift: "",
            dc: "",
            items: ""
        }
    }
    

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
                console.log(res.data);
                this.setState({
                    data: res.data
                });
            })
    }

    handleInputChange = event => {
        const { id, value } = event.target;
        this.setState({
            [id]: value
        });
    }


    componentDidMount = () => {
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
        let data = this.state.data.filter(item => {return item._id === id})
        this.setState({
            preview: {
                date: data[0].date,
                names: data[0].names,
                shift: data[0].shift,
                dc: data[0].datacenter,
                items: data[0].items
            }
        })
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col lg={6}>
                        <Row>
                            <Col>
                                <p>Search By</p>
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
                                    <Button onClick={this.getData}>
                                        Search
                                    </Button>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                Handoff Results
                                {this.state.data.map(item => {
                                    return (
                                        <Row key={item._id}>
                                            <Col>
                                                {item.date} - {item.datacenter} - {item.shift} Shift
                                            </Col>
                                            <Col>
                                                <Button onClick={() => this.showPreview(item._id)}>Preview</Button>
                                            </Col>
                                        </Row>
                                    )
                                })}
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={6}>
                    <Template
                            date={this.state.preview.date}
                            names={this.state.preview.names}
                            shift={this.state.preview.shift}
                            dc={this.state.preview.dc}
                            items={this.state.preview.items}
                        />
                    </Col>
                </Row>
            </Container>
        )
    }



}
export default ViewHandoff;

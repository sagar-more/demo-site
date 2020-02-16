import React, { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { EDIT_DETAILS, SET_INDEX } from "../actions/TeamActions";

function EditCardDetails() {
    const dispatch = useDispatch();
    const { teams, currentSelected } = useSelector(state => state.TeamsReducer);
    const editDetails = teams.find(member => member.id === currentSelected);

    const [show, setShow ] = useState(!!currentSelected);
    const [name, setName] = useState(editDetails.name);
    const [email, setEmail] = useState(editDetails.email);
    const [city, setCity] = useState(editDetails.address.city);
    const [phone, setPhone] = useState(editDetails.phone);
    const [website, setWebsite] = useState(editDetails.website);
    const [companyName, setCompanyName] = useState(editDetails.company.name);

    const saveHandler = () => {
        const payload = {
            id: currentSelected,
            name,
            email,
            city,
            phone,
            website,
            companyName
        };
        dispatch({type: EDIT_DETAILS, payload});
        hideHandler();
    }
    const hideHandler = () => {
        dispatch({type: SET_INDEX, payload: undefined});
        setShow(false);
    }

    return <Modal centered show={show} onHide={hideHandler}>
        <Modal.Header closeButton>
            <Modal.Title>Edit Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group as={Row}>
                    <Form.Label column sm={2} lg={3} md={3} xl={3} >Name: </Form.Label>
                    <Col sm={10} lg={9} md={9} xl={9}>
                        <Form.Control type="text" placeholder="Name" value={name} onChange={({ target })=> setName(target.value) }></Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm={2} lg={3} md={3} xl={3} >Email ID: </Form.Label>
                    <Col sm={10} lg={9} md={9} xl={9}>
                        <Form.Control type="text" placeholder="Email ID" value={email} onChange={({ target })=> setEmail(target.value) }></Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm={2} lg={3} md={3} xl={3} >City: </Form.Label>
                    <Col sm={10} lg={9} md={9} xl={9}>
                        <Form.Control type="text" placeholder="City Name" value={city} onChange={({ target })=> setCity(target.value) }></Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm={2} lg={3} md={3} xl={3} >Phone: </Form.Label>
                    <Col sm={10} lg={9} md={9} xl={9}>
                        <Form.Control type="text" placeholder="Phone Number" value={phone} onChange={({ target })=> setPhone(target.value) }></Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm={2} lg={3} md={3} xl={3} >Website: </Form.Label>
                    <Col sm={10} lg={9} md={9} xl={9}>
                        <Form.Control type="text" placeholder="Website" value={website} onChange={({ target })=> setWebsite(target.value) }></Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm={2} lg={3} md={3} xl={3} >Company name: </Form.Label>
                    <Col sm={10} lg={9} md={9} xl={9}>
                        <Form.Control type="text" placeholder="Company Name" value={companyName} onChange={({ target })=> setCompanyName(target.value) }></Form.Control>
                    </Col>
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button type="submit" onClick={saveHandler}>Save</Button>
        </Modal.Footer>
    </Modal>
}

export default EditCardDetails;
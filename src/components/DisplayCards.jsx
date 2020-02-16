import React from "react";
import { Card, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import EditCardDetails from "./EditCardDetails";
import { SET_INDEX } from "../actions/TeamActions";
import { HTTPS } from "../constants/constants";

function DisplayCards() {
    const dispatch = useDispatch();
    const setIndex = (id) => dispatch({ type: SET_INDEX, payload: id });
    const { teams, currentSelected } = useSelector(state => state.TeamsReducer);;

    const websiteLink = (website) => <a href={`${HTTPS}${website}`} target="_blank" rel="noopener noreferrer" >{website}</a>;
    const mailLink = (link) => <a target="_blank" rel="noopener noreferrer" href={`mailto:${link}`}>{link}</a>
    return <div className="container-fluid">
        <Row>
            {
                teams.map(cardProps => <Card key={cardProps.id}
                    className="col-md-5 col-sm-5 col-xs-1 col-lg-5 col-xl-3 text-center"
                    bg="dark" text="white"
                    onDoubleClick={() => currentSelected === undefined && setIndex(cardProps.id)}
                    >
                        <Card.Header>{cardProps.name}</Card.Header>
                        <Card.Body className="opacity-low">
                            <Card.Text>{mailLink(cardProps.email)}</Card.Text>
                            <Card.Text>{cardProps.address.city}</Card.Text>
                            <Card.Text>{cardProps.phone}</Card.Text>
                            <Card.Text>{websiteLink(cardProps.website)}</Card.Text>
                            <Card.Text>{cardProps.company.name}</Card.Text>
                        </Card.Body>
                </Card>)
            }
        </Row>
        {currentSelected && <EditCardDetails />}
    </div>
};

export default DisplayCards;
import React from "react";
import { Card } from "react-bootstrap";
import { imageSite } from "../constants/constants";

export default ({ src, photographer, photographerLink }) => {
    photographerLink = photographerLink || photographer;
    const link = <a rel="noopener noreferrer" target="_blank" href={`${imageSite}@${photographerLink}`}>{photographer}</a>;
    const siteLink = <a rel="noopener noreferrer" target="_blank" href={`${imageSite}`}>Pexels</a>;

    return <Card className="col-md-5 col-sm-12 col-lg-5 col-xl-5 col-xs-12" >
        <Card.Img variant="top" src={src}></Card.Img>
        <Card.Body>
            <Card.Text>Photo by {link} from {siteLink}</Card.Text>
        </Card.Body>
    </Card>
}
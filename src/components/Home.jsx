import React from "react";
import { Container, Row } from "react-bootstrap";
import ImageCards from "./ImageCards";

export default () => {
    return <Container fluid>
        <Row>
            <ImageCards src="/images/bay-beach.jpg" photographer="Pixabay"></ImageCards>
            <ImageCards src="/images/chapel.jpg" photographer="Pixabay"></ImageCards>
            <ImageCards src="/images/chairs-outside.jpg" photographer="Igor Starkov" photographerLink="igor-starkov-233202"></ImageCards>
            <ImageCards src="/images/caves.jpg" photographer="Pixabay"></ImageCards>
            <ImageCards src="/images/white-store.jpg" photographer="Igor Starkov" photographerLink="igor-starkov-233202"></ImageCards>
            <ImageCards src="/images/mug-filled-with-coffee.jpg" photographer="Igor Starkov" photographerLink="igor-starkov-233202"></ImageCards>
        </Row>
    </Container>
}
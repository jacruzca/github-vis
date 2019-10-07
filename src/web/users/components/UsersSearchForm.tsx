import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

const UsersSearchForm = () => {
    return (
        <Form>
            <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                    GH Username
                </Form.Label>
                <Col sm={8}>
                    <Form.Control type="username" placeholder="ex. jacruzca" />
                </Col>
                <Col sm={2}>
                    <Button type="submit">Search</Button>
                </Col>
            </Form.Group>
        </Form>
    );
};

export default UsersSearchForm;

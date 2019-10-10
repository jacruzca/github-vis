import React, { FunctionComponent, memo, useEffect } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import useForm from 'react-hook-form';
import { connect } from 'react-redux';
import { compose, Dispatch } from 'redux';
import { ApiPagination } from '../../../business/common/common-types';
import { loadUsers, LoadUsers } from '../../../business/users/users-list-actions';

type Props = {
    loadUsers: (login?: string, pagination?: ApiPagination) => void;
    login?: string;
};

const UsersSearchForm: FunctionComponent<Props> = ({ loadUsers, login = 'jacruz' }: Props) => {
    useEffect(() => {
        loadUsers(login);
    }, [login]);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data: any) => {
        loadUsers(data.login);
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                    GH Username
                </Form.Label>
                <Col sm={8}>
                    <Form.Control
                        name="login"
                        type="text"
                        placeholder="ex. jacruzca"
                        defaultValue={login}
                        ref={register}
                    />
                    <Form.Control.Feedback type="invalid">{errors.login}</Form.Control.Feedback>
                </Col>
                <Col sm={2}>
                    <Button type="submit">Search</Button>
                </Col>
            </Form.Group>
        </Form>
    );
};

const mapDispatchToProps = (dispatch: Dispatch<LoadUsers>): Partial<Props> => {
    return {
        loadUsers: (login?: string, pagination?: ApiPagination) => {
            dispatch(loadUsers(login, pagination));
        },
    };
};

const withConnect = connect(
    null,
    mapDispatchToProps,
);

export default compose(
    withConnect,
    memo,
)(UsersSearchForm) as React.ComponentType;

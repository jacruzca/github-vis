import React, { FunctionComponent, useEffect, useMemo } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import useForm from 'react-hook-form';
import { ApiPagination } from '../../../../business/common/common-types';

export type UsersSearchFormProps = {
    loadUsers: (login?: string, pagination?: ApiPagination) => void;
    login?: string;
};

const UsersSearchForm: FunctionComponent<UsersSearchFormProps> = ({
    loadUsers,
    login,
}: UsersSearchFormProps) => {
    useEffect(() => {
        loadUsers(login);
    }, [loadUsers, login]);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = useMemo(
        () => (data: any) => {
            loadUsers(data.login);
        },
        [loadUsers],
    );

    return (
        <Form data-testid="users-search-form" onSubmit={handleSubmit(onSubmit)}>
            <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                    GH Username
                </Form.Label>
                <Col sm={8}>
                    <Form.Control
                        data-testid="login-input"
                        name="login"
                        type="text"
                        placeholder="ex. jacruzca"
                        defaultValue={login}
                        ref={register}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.login}
                    </Form.Control.Feedback>
                </Col>
                <Col sm={2}>
                    <Button type="submit">Search</Button>
                </Col>
            </Form.Group>
        </Form>
    );
};

export default UsersSearchForm;

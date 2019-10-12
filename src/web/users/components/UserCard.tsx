import React, { FunctionComponent } from 'react';
import { Button, Card } from 'react-bootstrap';
import { User } from '../../../business/users/users-types';

type Props = {
    user: User;
};

const UserCard: FunctionComponent<Props> = ({ user }: Props) => {
    return (
        <Card>
            <Card.Img variant="top" src={user.avatarUrl} />
            <Card.Body>
                <Card.Title data-testid="login">{user.login}</Card.Title>
                <Card.Text data-testid="name">{user.name}</Card.Text>
                <Button variant="primary">Visit profile</Button>
            </Card.Body>
        </Card>
    );
};

export default UserCard;

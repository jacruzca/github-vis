import React, { FunctionComponent } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { User } from '../../../../business/users/users-types';
import { USER_ROUTE } from '../../../utils/Constants';

type Props = {
    user: User;
};

const UserCard: FunctionComponent<Props> = ({ user }: Props) => {
    return (
        <Card>
            <Card.Img variant="top" src={user.avatarUrl} />
            <Card.Body>
                <Card.Title className="text-center" data-testid="login">
                    {user.login}
                </Card.Title>
                <Card.Text data-testid="name">{user.name}</Card.Text>
                <Button
                    block
                    as={Link}
                    to={USER_ROUTE(user.login)}
                    variant="primary"
                >
                    Visit profile
                </Button>
            </Card.Body>
        </Card>
    );
};

export default UserCard;

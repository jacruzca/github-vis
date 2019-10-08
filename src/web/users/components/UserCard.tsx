import React, { FunctionComponent } from 'react';
import { Button, Card } from 'react-bootstrap';
import styled from 'styled-components';
import { User } from '../../../business/users/users-types';

type Props = {
    user: User;
};

const Img = styled(Card.Img)``;

const SmallCard = styled(Card)``;

const UserCard: FunctionComponent<Props> = ({ user }: Props) => {
    return (
        <SmallCard>
            <Img variant="top" src={user.avatarUrl} />
            <Card.Body>
                <Card.Title>{user.login}</Card.Title>
                <Card.Text>{user.name}</Card.Text>
                <Button variant="primary">Visit profile</Button>
            </Card.Body>
        </SmallCard>
    );
};

export default UserCard;

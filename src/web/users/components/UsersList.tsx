import React, { FunctionComponent } from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { User } from '../../../business/users/users-types';
import UserCard from './UserCard';

type Props = {
    usersList: User[];
};

const CenteredCol = styled(Col)`
    justify-content: 'center';
    padding: 10px;
    flex-shrink: 0;
`;

const UsersList: FunctionComponent<Props> = ({ usersList }: Props) => {
    if (usersList.length > 0) {
        return (
            <Row>
                {usersList.map((user: User) => (
                    <CenteredCol xs={3} key={user.id}>
                        <UserCard user={user}></UserCard>
                    </CenteredCol>
                ))}
            </Row>
        );
    }
    return null;
};

export default UsersList;

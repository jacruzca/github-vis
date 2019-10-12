import React, { FunctionComponent } from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { User } from '../../../business/users/users-types';
import DisplayNoResultsComponent from '../../utils/components/DisplayNoResultsComponent';
import UserCard from './UserCard';

type Props = {
    usersList: User[];
    login?: string;
};

const CenteredCol = styled(Col)`
    justify-content: 'center';
    padding: 10px;
    flex-shrink: 0;
`;

const UsersList: FunctionComponent<Props> = ({ usersList, login }: Props) => {
    if (usersList.length > 0) {
        return (
            <Row data-testid="users-list">
                {usersList.map((user: User) => (
                    <CenteredCol xs={3} key={user.id}>
                        <UserCard user={user}></UserCard>
                    </CenteredCol>
                ))}
            </Row>
        );
    }
    return (
        <DisplayNoResultsComponent
            isEmpty={true}
            error={`No users for query: ${login}`}
        ></DisplayNoResultsComponent>
    );
};

export default UsersList;

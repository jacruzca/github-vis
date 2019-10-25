import React, { FunctionComponent } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { User } from '../../../../business/users/users-types';

type Props = {
    user: User;
};

const UserComponent: FunctionComponent<Props> = ({ user }: Props) => {
    return (
        <div>
            <Row>
                <Col xs={3} className="justify-content-md-center">
                    <Card>
                        <Card.Img variant="top" src={user.avatarUrl} />
                        <Card.Body>
                            <Card.Title data-testid="login">
                                {user.login}
                            </Card.Title>
                            <Card.Text data-testid="name">
                                {user.name}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    Total commits:{' '}
                    {user.contributionsCollection
                        ? user.contributionsCollection.totalCommitContributions
                        : 0}
                    <br />
                    Total repo contributions:{' '}
                    {user.contributionsCollection
                        ? user.contributionsCollection
                              .totalRepositoryContributions
                        : 0}
                    <br />
                </Col>
            </Row>
        </div>
    );
};

export default UserComponent;

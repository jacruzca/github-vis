import React from 'react';
import { Col, Nav, Row } from 'react-bootstrap';
import styled from 'styled-components';

const HeaderContainer = styled(Row)`
    border-bottom: 1px #dcdcdc solid;
`;

const Header = () => {
    return (
        <HeaderContainer>
            <Col sm={3}>
                <h1>Github-Vis</h1>
            </Col>
            <Col>
                <Nav className="justify-content-end" activeKey="/users">
                    <Nav.Item>
                        <Nav.Link href="/users">Users</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/repositories">Repositories</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Col>
        </HeaderContainer>
    );
};

export default Header;

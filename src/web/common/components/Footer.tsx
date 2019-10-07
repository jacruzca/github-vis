import React from 'react';
import { Nav } from 'react-bootstrap';
import styled from 'styled-components';

const Link = styled(Nav.Link)`
    color: gray;
`;

const Footer = () => {
    return (
        <Nav className="justify-content-center" activeKey="/home">
            <Nav.Item>
                <Link target="_blank" href="https://github.com/jacruzca/">
                    Built by J Cruz
                </Link>
            </Nav.Item>
            <Nav.Item>
                <Link target="_blank" href="https://github.com/jacruzca/github-vis">
                    See code
                </Link>
            </Nav.Item>
        </Nav>
    );
};

export default Footer;

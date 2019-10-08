import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';

type Props = {
    children: JSX.Element;
};

const Body = styled.div`
    padding-top: 30px;
    padding-bottom: 30px;
`;

const Layout = ({ children }: Props) => {
    return (
        <Container>
            <Header />
            <Body>{children}</Body>
            <Footer />
        </Container>
    );
};

export default Layout;

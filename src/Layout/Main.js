import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Header/Footer/Footer';
import Header from '../Shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg="4">
                    </Col>

                    <Col lg="8">
                        <Outlet></Outlet>
                    </Col>
                   
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Description from './description';
import SideBar from './sidebar';

const Content = () => {
    return (
      <Container>
        <Row>
          <Col lg="3" md='3' sm='12'>
             <SideBar/>
          </Col>
          <Col lg="9" md='9' sm='12'>
             <Description/>
          </Col>
        </Row>
      </Container>
    );
};

export default Content;
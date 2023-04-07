import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import IPhone13PM from './Images/Iph13promax.jpg';
import mi10 from './Images/mi10promax.jpg';
import mi12 from './Images/mi12.jpg';
import airpods1 from './Images/airpods11.jpg';
import airpods3 from './Images/airpods3.jpg';
import Form from './Form1';

export const ProductList = () => (
    <>

<Container style={{ paddingTop: '2rem', paddingBottom: '2rem' }}  >
            <Row>
                <Col>
                    <Card style={{ width: '19rem', marginBottom: '20px' }}>
                        <Card.Img variant="top" src={IPhone13PM.substring(1)} alt="Telephone" />
                        <Card.Body>
                            <Card.Title> Iphone 13 Pro Max 256gb </Card.Title>
                            <Card.Text>
                                ...
                            </Card.Text>
                            <Link to="/Form1"><button type="button" class="btn btn-warning">Купить</button></Link>
                            
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '19rem', marginBottom: '20px' }}>
                    <Card.Img variant="top" src={airpods1.substring(1)} alt="Headphones" />
                        <Card.Body>
                            <Card.Title> AirPods </Card.Title>
                            <Card.Text>
                                ...
                            </Card.Text>
                            <Link to="/Form1">
                            <Button variant="warning">
                                Купить
                            </Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '19rem', marginBottom: '20px' }}>
                    <Card.Img variant="top" src={airpods3.substring(1)} alt="Headphones" />
                        <Card.Body>
                            <Card.Title> AirPods 3 </Card.Title>
                            <Card.Text>
                                ...
                            </Card.Text>
                            <Link to="/Form1">
                            <Button variant="warning">
                                Купить 
                            </Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Card style={{ width: '19rem' }}>
                        <Card.Img variant="top" src={mi10.substring(1)} alt="Telephone" />
                        <Card.Body>
                            <Card.Title> Mi 10 Pro Max 128gb </Card.Title>
                            <Card.Text>
                                ...
                            </Card.Text>
                            <Link to="/Form1">
                            <Button variant="warning">
                                Купить
                            </Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '19rem' }}>
                    <Card.Img variant="top" src={mi12.substring(1)} alt="Telephone" />
                        <Card.Body>
                            <Card.Title> Mi 12 128gb </Card.Title>
                            <Card.Text>
                                ...
                            </Card.Text>
                            <Link to="/Form1">
                            <Button variant="warning">
                                Купить 
                            </Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '19rem'}}>
                        <Card.Img variant="top" src={IPhone13PM.substring(1)} alt="Telephone" />
                        <Card.Body>
                            <Card.Title> Iphone 13 Pro 128gb </Card.Title>
                            <Card.Text>
                                ...
                            </Card.Text>
                            <Link to="/Form1">
                            <Button variant="warning">
                                
                                Купить
                               
                            </Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        </>
)

export default ProductList;
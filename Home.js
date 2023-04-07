import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import pokupka from './Images/pokupka.jpg'
import vanek from './Images/vanek.jpg'
import { Link } from 'react-router-dom';
import Slider from './Slider';

const ColoredLine = ({ color }) => (
  
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 5
        }}
    />)


    
export const Home = () => (
    <>
        <Slider/>
        <ColoredLine color="dark" />
        <Container style={{ paddingTop: '2rem', paddingBottom: '2rem' }}  >
        <Row >
                <Col mr={7}>
                    <img src={vanek} height={400} />
                </Col>
                <Col mr={7}>
                    <h1 style = {
              {
                paddingTop: '20px'
              }
            } >
                А это мой одногруппник Ванек. Он любит спать и смотреть аниме. Типичный программист...
                                            </h1>

                </Col>
            </Row>
        </Container>
        <ColoredLine color="dark" />
        <Container style={{ marginBottom: '100px' }}>

            <Row >
                <Col mr={7}>
                    <img src={pokupka} height={400} />
                </Col>
                <Col mr={7}>
                  <h3> Интернет-магазин Ipro®</h3>

                    <p style = {
              {
                paddingTop: '20px'
              }
            } >
                        "Ipro®" привык радовать своих клиентов, создавая уют и сервис для вас и делая любую покупку приятной. Стильный дизайн магазина, низкие цены и приветливый персонал - всё это как нельзя лучше отражает политику работы нашего магазина.
                        Мы стремимся сократить время, которое вы тратите на поиск и покупку полюбившиеся техники, создавая вокруг вас сервис.
                    </p>
                    <p>Мы хотим, чтобы вы стали "постоянными".</p>

                </Col>
            </Row>
        </Container>
    </>
)
export default Home;
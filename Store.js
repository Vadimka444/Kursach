import React from "react";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import store1 from './Images/store1.jpg';
import store2 from './Images/store2.jpg';
import store3 from './Images/store3.jpg';
import partners from './Images/partners.png';
import { Link } from "react-router-dom";


const ColoredLine = ({ color }) => (
  
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 5
        }}
    />)


    
export const Store = () => (
    <>

        <ColoredLine color="dark" />
        <Container style={{ marginBottom: '20px' }}>

            <Row >
            <Col mr={7}>
                    <img src={store1} height={400} />
                </Col>
                <Col mr={7}>
                  <h3> Миссия </h3>

                    <p style = {
              {
                paddingTop: '20px'
              }
            } >
                    Сделать доступным для каждого лучшие бренды электроники.
                    </p>

                </Col>
            </Row>
        </Container>


        <ColoredLine color="dark" />
        <Container style={{ marginBottom: '20px' }}>

            <Row >
            <Col mr={7}>
                    <img src={store2} height={400} />
                </Col>
                <Col mr={7}>
                  <h3> История </h3>

                    <p style = {
              {
                paddingTop: '20px'
              }
            } >
                    "Ipro®" работает с 2011 года, была создана в эпоху прихода техники Apple в Россию. Компания продает весь ассортимент продукции Apple и зарекомендовала себя как один из первых продавцов яблочной продукции в России, в 2014 одни из первых продавцов техники Xiaomi. Сегодня мы продаем множество брендов в таких категориях как мобильная техника, телевизоры, электротранспорт и все возможные гаджеты для жизни.
                    </p>

                </Col>
            </Row>
        </Container>


        <ColoredLine color="dark" />
        <Container style={{ marginBottom: '20px' }}>

            <Row >
            <Col mr={7}>
                    <img src={store3} height={400} />
                </Col>
                <Col mr={7}>
                  <h3> Сервис </h3>

                    <p style = {
              {
                paddingTop: '20px'
              }
            } >
                    Мы всегда стараемся учесть все ваши пожелания и быть максимально близки к вам. Наш магазин даёт понять своими низкими ценами, что вы не переплачиваете - это и есть сервис.
                    </p>

                </Col>
            </Row>
        </Container>


<h1 className="text-center">Наши партнеры</h1>
<div class="p-5 mb-4 bg-light rounded-0" style={{ background: `url(${partners})` }}>
<div class="container-fluid py-5">
</div>
</div>
    </>
)
export default Store;
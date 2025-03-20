import React from "react";
import { Row, Col, Container } from "reactstrap";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Services.css";
import { serviceCards } from "../constants/ServicesData.js";
import Heading from "./common/Heading.js";
import Text from "./common/Text.js";
import ImageComponent from "./common/ImageComponent.js";
import Card from "./common/Card.js";

// Reusable Service Card Component
const ServiceCard = ({ card }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: card.delay }}
      viewport={{ once: true }}
      className="w-100"
    >
      <Card className="shadow custom-card w-100 h-100 d-flex flex-column">
        <ImageComponent src={card.image} alt={`${card.title} service`} className="card-img" />
        <div className="card-body d-flex flex-column flex-grow-1">
          <Heading level={3} className="card-txt">{card.title}</Heading>
          <Text className="text-center flex-grow-1">{card.description}</Text>
          <Text>
            <span className="sub-hed">Services</span>
            <ul className="list">
              {card.services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </Text>
        </div>
      </Card>
    </motion.div>
  );
};

// Main Services Component
const Services = () => {
  return (
    <Container fluid className="home-cards-container my-4">
      <Heading level={1} className="title">Services</Heading>
      <Row className="g-4 justify-content-center">
        {serviceCards.map((card, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={4} xl={3} className="d-flex">
            <ServiceCard card={card} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Services;

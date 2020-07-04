import React from "react";
import styles from "./Footer.module.css"
import { Container, Row, Col } from 'react-bootstrap';

function Footer(){
  return (
  <footer class={styles.footer}>
    <Container fluid class={styles.footer}>

      <Row>
        <Col>
            background photo by <a href="https://unsplash.com/@anna_yenina?utm_source=your_app_name&utm_medium=referral">Anna Yenina</a> on <a href="https://unsplash.com/?utm_source=your_app_name&utm_medium=referral">Unsplash</a> ;  card photo by <a href="https://unsplash.com/@_k_arinn?utm_source=your_app_name&utm_medium=referral">Karina Vorozheeva</a> on <a href="https://unsplash.com/?utm_source=your_app_name&utm_medium=referral">Unsplash</a>;           card by siriwatknp on <a href="https://mui-treasury.com/">MUI Treasury</a>
        </Col>
      </Row>


    </Container>
  </footer>
  )
};

export default Footer;
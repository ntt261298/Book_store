import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './layout/Menu.js';
import Login from './layout/Login.js';
import ForgetPwd from './layout/ForgetPwd.js';
import Footer from './layout/Footer.js';
import ShoppingHistory from './userpage/ShoppingHistory.js';
import { Container } from 'reactstrap';

export default class userPage extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Menu />
        </header>
        <main>
          <Container>
            <Login />
            <ForgetPwd />
            <ShoppingHistory />
          </Container>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

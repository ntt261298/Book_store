import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './layout/Menu.js';
import Login from './layout/Login.js'
import Navs from './layout/Navs.js';
import Content from './homepage/Content.js';
import Footer from './layout/Footer.js';
import { Container } from 'reactstrap';

export default class homePage extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Menu />
        </header>
        <main className="clearfix">
          <Container>
            <Login />
            <Navs />
            <Content />
          </Container>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

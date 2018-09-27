import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './layout/Menu.js';
import Login from './layout/Login.js';
import BookDetail from './detailpage/BookDetail.js';
import Footer from './layout/Footer.js';
import { Container } from 'reactstrap';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';

export default class detailPage extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Menu />
        </header>
        <main className="clearfix">
          <Container>
            <Login />
            <BookDetail id={this.props.match.params.id}/>
          </Container>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

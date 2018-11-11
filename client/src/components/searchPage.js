import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './layout/Menu.js';
import Login from './layout/Login.js'
import Navs from './layout/Navs.js';
import SearchResults from './searchPage/SearchResults.js';
import Footer from './layout/Footer.js';
import { Container } from 'reactstrap';

export default class searchPage extends React.Component {
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
            <SearchResults name={this.props.match.params.name} type={this.props.match.params.type}/>
          </Container>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

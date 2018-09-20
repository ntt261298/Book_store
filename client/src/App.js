import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavBar from './components/AppNavBar.js';
import ShoppingList from './components/ShoppingList.js';
import ItemModal from './components/ItemModal.js';
import Menu from './components/Menu.js';
import Login from './components/Login.js'
import Navs from './components/Navs.js';
import Content from './components/Content.js';
import Cart from './components/Cart.js';
import Footer from './components/Footer.js';
import { Container } from 'reactstrap';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact render={
              () => {
                return (
                  <div>
                    <AppNavBar />
                    <Container>
                      <ItemModal />
                      <ShoppingList />
                    </Container>
                  </div>
                )
              }
          }/>
          <Route path="/about" exact render={
              () => {
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
                )
              }
          }/>
          <Route path="/cart" exact render={
            () => {
              return (
                <div>
                  <header>
                    <Menu />
                  </header>
                  <main>
                    <Container>
                      
                    </Container>
                  </main>
                  <footer>
                    <Footer />
                  </footer>
                </div>
              )
            }
          } />
        </div>
      </Router>
    );
  }
}

export default App;

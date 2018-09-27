import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavBar from './components/AppNavBar.js';
import ShoppingList from './components/ShoppingList.js';
import ItemModal from './components/ItemModal.js';
import homePage from './components/homePage.js';
import detailPage from './components/detailPage.js';
import cartPage from './components/cartPage.js';
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
          <Route path="/about" exact component={homePage} />
          <Route path="/cart" exact  component={cartPage}/>
          <Route path="/detail/:id" exact component={detailPage}/>
        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/config.css';
import './App.css';
import homePage from './components/homePage.js';
import detailPage from './components/detailPage.js';
import cartPage from './components/cartPage.js';
import searchPage from './components/searchPage.js';
import contactPage from './components/contactPage.js';
import userPage from './components/userPage.js';
import { Container } from 'reactstrap';
import {Redirect, BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import { toggleLogin } from './actions/itemsAction';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';


const PrivateRoute = ({ component: Component, token, ...rest }) => (
  <Route {...rest} render={(props) =>
    (
      !token
        ? <Redirect to="/cart"/>
        : <Component {...props} />
    )
  } />
)

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={homePage} />
          <Route path="/cart" exact  component={cartPage}/>
          <Route path="/detail/:id" exact component={detailPage}/>
          <Route path="/search/:name" exact component={searchPage}/>
          <PrivateRoute
            path='/contact'
            exact component={contactPage}
            token={this.props.account.token}
           />
           <PrivateRoute
             path='/user'
             exact component={userPage}
             token={this.props.account.token}
            />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  account: state.account
})

export default connect(mapStateToProps, { toggleLogin })(App);

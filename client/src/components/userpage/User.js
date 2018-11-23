import React from 'react';
import { getShoppingHistory } from '../../actions/accountsAction.js';
import Item from './Item.js';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import currency from '../../helpers/currency.js';
import total from '../../helpers/total.js';

class User extends React.Component {
  componentDidMount() {
    this.props.getShoppingHistory(this.props.account.token);
  }

  convertDate(date) {
    let year = date.slice(0, 4);
    let month = date.slice(5, 7);
    let day = date.slice(8, 10);
    let result = day + '-' + month + '-' + year;
    return result;
  }

  render() {
    const allItems  = this.props.account;
    return (
        <div class="htr-grid-container">
          <div style={{gridRow: '1/5'}}>
          </div>
          <div class="prf-navbar-user" style={{maxWidth:'100%', textAlign: 'center', display: 'flex', alignItems: 'center'}}>
              <img class="prf-avt" style={{width: '80px'}} src="../image/account-circle.svg" />
              <p class="prf-p" style={{marginTop: '15px', fontWeight: 'bold'}}>{allItems.name}</p>
          </div>
          <div class="htr-properties">
              Order ID
          </div>
          <div class="htr-properties">
              Date
          </div>
          <div class="htr-properties">
              Products
          </div>
          <div class="htr-properties">
              Price
          </div>
          <div class="htr-properties" >
              Status
          </div>
          <div></div>
          <div class="merged-row-1">
              <a class="prf-navbar" style={{marginTop: '30px' }} href="information.html">
                  <img src="../image/baseline-person-24px-white.svg" style={{paddingRight: '20px'}}/>
                  Information
              </a>

              <a class="prf-navbar" href="history.html">
                  <img src="../image/history.svg" style={{paddingRight: '20px'}}/>
                  History
              </a>

              <a class="prf-navbar" href="library.html">
                  <img src="../image/library-books.svg" style={{paddingRight: '20px'}}/>
                  Library
              </a>
          </div>
          { allItems.history.length ? (
            allItems.history.map((order, index) => (
              <React.Fragment>
                <div class="htr-properties-value">
                    {order._id}
                </div>
                <div class="htr-properties-value">
                    {this.convertDate(order.orderDate)}
                </div>
                <div class="htr-properties-value">
                    {order.cart.map((item, index) => (
                      <p>{item.name}</p>
                    ))}
                </div>
                <div class="htr-properties-value">
                    {currency(total(order.cart))}
                </div>
                <div class="htr-properties-value" >
                    {order.status}
                </div>
                <div></div>
              </React.Fragment>
            ))
          ) : (<h2>You have not bought something yet...</h2>) }
      </div>

    );
  }
};

User.propTypes = {
  getShoppingHistory: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  account: state.account
})

export default connect(mapStateToProps, {getShoppingHistory})(User);

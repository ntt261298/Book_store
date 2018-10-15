import React from 'react';
import { getCart } from '../../actions/cartAction.js';
import { toggleLogin } from '../../actions/itemsAction.js';
import Loading from 'react-loading-animation';
import currency from '../../helpers/currency.js';
import total from '../../helpers/total.js';
import CartItem from './CartItem.js';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

class Cart extends React.Component {
  state = {
    message: ''
  }
  componentDidMount() {
    this.props.getCart();
  }

  onCheckoutClick(token) {
    if(!token) {
      this.setState({
        message: 'You must login to checkout'
      })
    } else {
      this.setState({
        message: ''
      })
    }
  }

  onCheckout(message){
    if(message) {
      return <div className="alert alert-danger mt-2">{message}</div>
    }
    return null;
  }

  render() {
    const allcart  = this.props.cart;
    const token = this.props.account.token;
    console.log(allcart);
    console.log(this.state.message);
    // if (isLoading) return <div className='loading'><Loading /></div>;
    if(allcart.carts.length === 0) return <h2>You have not bought something yet...</h2>;
    return (
        <div className="container-mini">
          <div className="cart">
              <div>
                <h2>Your Cart Items</h2>
                  <table className="table table-hover checkout">
                    <tbody>
                      <tr>
                        <th className="text-center"></th>
                        <th className="text-center">No.</th>
                        <th className="text-center">Name</th>
                        <th className="text-center">Qty.</th>
                        <th className="text-right">Price</th>
                        <th className="text-right">Total</th>
                      </tr>
                      {allcart.carts.map((item, index) => (
                        <CartItem key={index} item={item} index={index} className="fade-exit"/>
                      ))}
                      <tr>
                        <th colSpan="3">Total</th>
                        <th className="text-center"></th>
                        <th></th>
                        <th className="text-right price">
                          { currency(total(allcart)) }
                        </th>
                      </tr>
                    </tbody>
                  </table>
                  {
                    !token ? (
                      <div>
                        <button className="btn" onClick={this.onCheckoutClick.bind(this, token)}>Checkout</button>
                      </div>
                    ) : (
                      <Link to="/contact" >
                        <button className="btn">Checkout</button>
                      </Link>
                    )
                  }
                  {this.onCheckout(this.state.message)}
            </div>
          </div>
        </div>
    );
  }
};

Cart.propTypes = {
  getCart: PropTypes.func.isRequired,
  toggleLogin: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  cart: state.cart,
  account: state.account
})

export default connect(mapStateToProps, {getCart, toggleLogin})(Cart);

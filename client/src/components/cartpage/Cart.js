import React from 'react';
import { getCart } from '../../actions/cartAction.js';
import Loading from 'react-loading-animation';
// import currency from '../helpers/currency.js';
// import total from '../helpers/total.js';
import CartItem from './CartItem.js';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.checkout = this.checkout.bind(this);
    // this.state = {
    //   allcart: [],
    // }
  }

  componentDidMount() {
    this.props.getCart();
  }

  checkout() {
    let cart = {
      all: [],
      totalItem: 0
    };
    // setCart(cart);

    this.setState({
      allcart: [],
      totalItem: 0,
    });
  }

  render() {
    const allcart  = this.props.cart;
    console.log(allcart);
    // if (isLoading) return <div className='loading'><Loading /></div>;
    if(allcart.carts.length === 0) return <h2>You have not bought something yet...</h2>;
    return (
        <div className="container-mini">
          <div className="cart">
            {/* {allcart.length === 0 ? <h2>You have not bought something yet...</h2> : */}
              <div>
                <h2>Your Cart Items</h2>
                  <table className="table table-hover checkout">
                    <tbody>
                      <tr>
                        <th className="text-center">No.</th>
                        <th className="text-center">Name</th>
                        <th className="text-center">Qty.</th>
                        <th className="text-right">Price</th>
                        <th className="text-right">Total</th>
                      </tr>
                      {allcart.carts.map((item, index) => (
                        <CartItem key={index} item={item} index={index}/>
                      ))}
                      <tr>
                        <th colSpan="2">Total</th>
                        <th className="text-center"></th>
                        <th></th>
                        <th className="text-right price">
                          {/* { currency(total(allcart)) } */}
                        </th>
                      </tr>
                    </tbody>
                  </table>
                <button onClick={this.checkout} className="btn">Checkout</button>
            </div>
          </div>
        </div>
    );
  }
};

Cart.propTypes = {
  getCart: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  cart: state.cart
})

export default connect(mapStateToProps, {getCart})(Cart);

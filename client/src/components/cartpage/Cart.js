import React from 'react';
import '../../style/cart.css';
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
    // if(allcart.carts.length === 0) return <h2>You have not bought something yet...</h2>;
    return (

      <div class="main-content">
      <div class="between-information">
        <div class="book-cart">
          <div class="book-1">
            <div class="image-book-1">
              <img src="../image/harry-book.jpg" alt="" />
            </div>
            <div class="quickview-book-1">
              <span>Harry Potter and the Deathly Hallows</span>
              <h5>J.K Rowling</h5>
              <span class="star"><img src="../image/full-star.png" alt=""/></span>
              <span class="star"><img src="../image/full-star.png" alt=""/></span>
              <span class="star"><img src="../image/full-star.png" alt=""/></span>
              <span class="star"><img src="../image/full-star.png" alt=""/></span>
              <span class="star"><img src="../image/full-star.png" alt=""/></span><br/>
              <span class="library-add" ><img src="../image/outline-library_add-24px.svg" /></span>
              <span class="remove-book" ><img src="../image/outline-remove_shopping_cart-24px.svg"/></span>
            </div>
            <span class="price-1">$50</span>
            <div class="change-quantity-1">
              <img src="../image/minus.svg" alt=""/>
              <span>3</span>
              <img src="../image/plus.svg" alt=""/>
              <span>$150</span>
            </div>
          </div>
          <div class="book-2">
            <div class="image-book-2">
              <img src="../image/codeDao.gif" alt=""/>
            </div>
            <div class="quickview-book-2">
              <span>Code Dạo Kí Sự Lập trình viên đâu phải chỉ biết code</span>
              <h5>Phạm Huy Hoàng</h5>
              <span class="star"><img src="../image/full-star.png" alt=""/></span>
              <span class="star"><img src="../image/full-star.png" alt=""/></span>
              <span class="star"><img src="../image/full-star.png" alt=""/></span>
              <span class="star"><img src="../image/full-star.png" alt=""/></span>
              <span class="star"><img src="../image/full-star.png" alt=""/></span><br/>
              <span class="library-add" ><img src="../image/outline-library_add-24px.svg"/></span>
              <span class="remove-book" ><img src="../image/outline-remove_shopping_cart-24px.svg"/></span>
            </div>
            <span class="price-2">$10</span>
            <div class="change-quantity-2">
              <span class="minus"><img src="../image/minus.svg" alt=""/></span>
              <span>2</span>
              <span class="plus"><img src="../image/plus.svg" alt=""/></span>
              <span>$20</span>
            </div>
          </div>
          <div class="book-3">
            <div class="image-book-3">
              <img src="../image/tuoiTre.jpg" alt=""/>
            </div>
            <div class="quickview-book-3">
              <span>Tuổi trẻ đáng giá bao nhiêu</span>
              <h5>Rosie Nguyễn</h5>
              <span class="star"><img src="../image/full-star.png" alt=""/></span>
              <span class="star"><img src="../image/full-star.png" alt=""/></span>
              <span class="star"><img src="../image/full-star.png" alt=""/></span>
              <span class="star"><img src="../image/full-star.png" alt=""/></span>
              <span class="star"><img src="../image/half-star.png" alt=""/></span><br/>
              <span class="library-add" ><img src="../image/outline-library_add-24px.svg"/></span>
              <span class="remove-book" ><img src="../image/outline-remove_shopping_cart-24px.svg"/></span>
            </div>
            <span clas="price-3">$20</span>
            <div class="change-quantity-3">
              <img src="../image/minus.svg" alt=""/>
              <span>1</span>
              <img src="../image/plus.svg" alt=""/>
              <span>$20</span>
            </div>
          </div>
        </div>
      </div>
      <div class="result">
        <h2>Total : $190</h2>
        <input type="submit"  value="Buy"/>
        <input type="submit"  value="Send gift"/>
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

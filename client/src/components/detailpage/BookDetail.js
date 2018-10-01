import React from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { getBooks} from '../../actions/itemsAction';
import { addToCart } from '../../actions/cartAction';
import { PropTypes } from 'prop-types';
import uuid from 'uuid';

class BookDetail extends React.Component {
  state = {
    qty: 1
  }
  componentDidMount() {
    this.props.getBooks()
  }

  onMinusQtyClick() {
    const qty = this.state.qty;
    if(qty === 1) return;
    this.setState({
      qty: qty - 1
    })
  }

  onAddQtyClick() {
    this.setState({
      qty: this.state.qty + 1
    })
  }

  onAddToCartClick(name, price) {
    this.props.addToCart(uuid(), this.state.qty, name, price);
  }

  render() {
    const { books } = this.props.book;
    return (
      <div>
        { books.map(({_id, name, author, price, bookImage}) => {if(_id === this.props.id) return (
          <div className="product-summary clearfix" key={_id}>
            <div className="product-image">
              <img className="img-book" alt={name} src={`http://localhost:5000/${bookImage}`}></img>
            </div>
            <div className="product-cart">
              <h1>{name}</h1>
              <div className="product-brand">
                <h6>Author: {author}</h6>
                <h3>${price}</h3>
              </div>
              <label>Quantity</label>
              <div className="item-quantity">
                <button type="submit" onClick={this.onMinusQtyClick.bind(this)} className="change-quantity">-</button>
                <input type="text" value={this.state.qty} id="quantity" name="quantity" pattern="[0-9]*" data-line readOnly/>
                <button type="submit" onClick={this.onAddQtyClick.bind(this)} className="change-quantity">+</button>
              </div>
              <div className="item-submit">
                <Button color="primary" onClick={this.onAddToCartClick.bind(this, name, price)}>Add To Cart</Button>
              </div>
            </div>
          </div>
        )})}
      </div>
    );
  }
}

BookDetail.propTypes = {
  getBooks: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  book: state.book
})


export default connect(mapStateToProps, {getBooks, addToCart})(BookDetail);

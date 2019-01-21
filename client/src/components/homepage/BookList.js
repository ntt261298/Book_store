import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody } from 'reactstrap';
import { connect } from 'react-redux';
import { getBooks} from '../../actions/itemsAction';
// import { addToCart} from '../actions/cartAction';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

class BookList extends React.Component {
  componentDidMount() {
    this.props.getBooks()
  }

  renderStar(rating) {
    let star = [];
    for(let i = 0; i < parseInt(rating); i++) {
      star.push(<span class="star"><img src="../image/baseline-star_rate-18px.svg" alt=""/></span>)
    };
    if(rating - parseInt(rating)) {
      star.push(<span class="star"><img src="../image/baseline-half-star_rate-18px.svg" alt=""/></span>)
    }
    return star;
  }

  render() {
    const { books } = this.props.book;
    console.log(books);
    return (
      <div className="book-home">
        { books.slice(0, 12).map(({_id, bookImage, name, author, price, rating, des}, index) => (
          <div className={`book-information book${index+1}`} key={_id}>
              <div className="book-img">
                <a href={'/detail/' + _id}>
                  <img className="image-book" src={`https://intense-temple-58166.herokuapp.com/uploads/${bookImage}`} alt=""/>
                </a>
              </div>
              <div className="book-inf">
                <h2 className="name">{name}</h2>
                {
                  this.renderStar(rating)
                }
                <h5 className="author">{author}</h5>
                <h1 className="name">${price}</h1>
                <p className="detail-infor">{des.slice(0, 100)}...</p>
                </div>
          </div>
        )) }
      </div>
    );
  };
}

BookList.propTypes = {
  getBooks: PropTypes.func.isRequired,
  // addToCart: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  book: state.book
})

export default connect(mapStateToProps, {getBooks})(BookList);

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

  // onAddToCart() {
  //   this.props.addtoCart();
  // }
  render() {
    const { books } = this.props.book;
    console.log(books);
    return (
      <div className="book-list">
        { books.slice(0, 12).map(({_id, bookImage}, index) => (
          <CardDeck className={`book${index+1}`} key={_id}>
            <Card>
              <Link to={'/detail/' + _id}>
                <CardImg top width="100%" src={`http://localhost:5000/uploads/${bookImage}`} alt="Card image cap" />
              </Link>
            </Card>
          </CardDeck>
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

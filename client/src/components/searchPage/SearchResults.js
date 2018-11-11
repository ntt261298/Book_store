import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody } from 'reactstrap';
import { connect } from 'react-redux';
import { getSearchResults } from '../../actions/searchAction';
// import { addToCart} from '../actions/cartAction';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

class SearchResults extends React.Component {
  componentDidMount() {
    this.props.getSearchResults(this.props.type, this.props.name);
  }
  // onAddToCart() {
  //   this.props.addtoCart();
  // }
  render() {
    const results = this.props.search.results;
    return (
      <div className="book-list">
        { results.slice(0, 12).map(({_id, bookImage}, index) => (
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

SearchResults.propTypes = {
  getSearchResults: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  search: state.search
})

export default connect(mapStateToProps, { getSearchResults })(SearchResults);

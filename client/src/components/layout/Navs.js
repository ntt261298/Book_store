import React from 'react';
import '../../style/nav.css';
import { getCate } from '../../actions/itemsAction';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

class Navs extends React.Component {
  componentDidMount() {
    this.props.getCate()
  }

  render() {
    const cate = this.props.book.cate;
    console.log(cate);
    return (
        <nav className="nav-bar">
          <div className="category">
            <h2>CATEGORIES</h2>
            <ul>
              {
                cate.map(({_id, name}) => (
                  <li>
                    <a href={`/search/category/${name}`}>{name}</a>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className="price">
            <h2>PRICES</h2>
            <div className="price-bar">
              <div className="bar">
                <div className="circle-price circle-price-1"></div>
                <div className="circle-price circle-price-2"></div>
              </div>
            </div>
            <ul>
              <li>
                <a href={`/search/price/00-10`}>0$ - 10$</a>
              </li>
              <li>
                <a href={`/search/price/10-20`}>10$ - 20$</a>
              </li>
              <li>
                <a href={`/search/price/20-30`}>20$ - 30$</a>
              </li>
            </ul>
          </div>
        </nav>
    );
  }
}

Navs.propTypes = {
  getCate: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  book: state.book
})

export default connect(mapStateToProps, { getCate })(Navs);

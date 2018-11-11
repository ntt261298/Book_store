import React from 'react';
import '../../style/detail.css';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { getBooks } from '../../actions/itemsAction';
import { addToCart } from '../../actions/cartAction';
import { PropTypes } from 'prop-types';
import uuid from 'uuid';

class BookDetail extends React.Component {
  state = {
    qty: 1,
    active1: 'active',
    active2: ''
  }
  componentDidMount() {
    this.props.getBooks();
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

  active1() {
    if(this.state.active1) return;
    this.setState({
      active1: 'active',
      active2: ''
    })
  }

  active2() {
    if(this.state.active2) return;
    this.setState({
      active2: 'active',
      active1: ''
    })
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
    console.log(this.state.active1);
    const { books } = this.props.book;
    return (
      <div class="main-content">
        { books.map(({_id, name, author, price, bookImage, rating, category, des, company, contentImage}) => {if(_id === this.props.id) return (
            <div>
              <div class="book-direct">
                <span>{category}</span>
                <img src="../image/baseline-chevron_right-24px.svg" alt=""/>
                <span>{name}</span>
              </div>
              <div class="book-infor">
                <div class="book-slide">
                  {this.state.active1 ? (
                    <img class="image-slide" src={`http://localhost:5000/uploads/${bookImage}`} alt=""/>
                  ) : (
                    <img class="image-slide" src={`http://localhost:5000/uploads/${contentImage}`} alt=""/>
                  )}
                  <div class="circle">
                    <span class={`${this.state.active1} circle-slide`}  onClick={this.active1.bind(this)}></span>
                    <span class={`${this.state.active2} circle-slide`} onClick={this.active2.bind(this)}></span>
                  </div>
                </div>
                <div class="book-detail">
                  <h2>{name}</h2>
                  {
                    this.renderStar(rating)
                  }
                  <h5>{author}</h5>
                  <h1>${price}</h1>
                  <div class="change-account">
                    <div class="option">
                      <img class="minus" src="../image/minus.svg" onClick={this.onMinusQtyClick.bind(this)} alt=""/>
                      <span>{this.state.qty}</span>
                      <img class="plus" src="../image/plus.svg" onClick={this.onAddQtyClick.bind(this)} alt=""/>
                    </div>
                    <div class="add-cart">
                      <img src="../image/baseline-add_shopping_cart-24px.svg" onClick={this.onAddToCartClick.bind(this, name, price)} alt=""/>
                    </div>
                  </div>
                  <p class="detail-infor">{des.slice(0, 200)}...</p>
                  </div>
                </div>
        <div class="comment-nav">
            <input type="text" placeholder="Your comment about this book..." class="comment-input"/>
              <input type="submit" value="SEND" class="comment-button"/>
          </div>
          <div>
            <span><img class="star-static" src="../image/baseline-star_rate-18px.svg" alt=""/></span>
            <span><img class="star-static" src="../image/baseline-star_rate-18px.svg" alt=""/></span>
            <span><img class="star-static" src="../image/baseline-star_rate-18px.svg" alt=""/></span>
            <span><img class="star-static" src="../image/baseline-star_rate-18px.svg" alt=""/></span>
            <span><img class="star-static" src="../image/baseline-star_rate-18px.svg" alt=""/></span>
          </div>
          <div class="comment comment-1">
            <div class="user user-1">
              <img src="../image/account-circle.svg" alt=""/>
              <h4>Nguyễn Tiến Trường</h4>
              <p>2 days ago</p>
            </div>
            <div class="comment-detail">
              <div>
                <span class="star"><img src="../image/baseline-star_rate-18px.svg" alt=""/></span>
                <span class="star"><img src="../image/baseline-star_rate-18px.svg" alt=""/></span>
                <span class="star"><img src="../image/baseline-star_rate-18px.svg" alt=""/></span>
                <span class="star"><img src="../image/baseline-star_rate-18px.svg" alt=""/></span>
                <span class="star"><img src="../image/baseline-star_rate-18px.svg" alt=""/></span>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis veritatis qui
                iste quod placeat, voluptate, dignissimos repudiandae rem unde incidunt quidem dicta
                doloribus in animi, nostrum nulla eum minima sequi ullam numquam iusto eos commodi.
                Praesentium temporibus optio totam. Necessitatibus explicabo, blanditiis impedit, omnis
                illum ducimus molestias. Qui, quod, itaque.</p>
                <img src="../image/thumb-up.svg" alt=""/>
                <img src="../image/comment.svg" alt=""/>
              </div>
            </div>
            <div class="comment comment-2">
              <div class="user user-2">
                <img src="../image/account-circle.svg" alt=""/>
                <h4>Nguyễn Đức Trọng</h4>
                <p>2 days ago</p>
              </div>
              <div class="comment-detail">
                <div>
                  <span><img class="star" src="../image/baseline-star_rate-18px.svg" alt=""/></span>
                  <span><img class="star" src="../image/baseline-star_rate-18px.svg" alt=""/></span>
                  <span><img class="star" src="../image/baseline-star_rate-18px.svg" alt=""/></span>
                  <span><img class="star" src="../image/baseline-star_rate-18px.svg" alt=""/></span>
                  <span><img class="star" src="../image/baseline-star_rate-18px.svg" alt=""/></span>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis veritatis qui
                  iste quod placeat, voluptate, dignissimos repudiandae rem unde incidunt quidem dicta
                  doloribus in animi, nostrum nulla eum minima sequi ullam numquam iusto eos commodi.
                  Praesentium temporibus optio totam. Necessitatibus explicabo, blanditiis impedit, omnis
                  illum ducimus molestias. Qui, quod, itaque.</p>
                  <img src="../image/thumb-up.svg" alt=""/>
                  <img src="../image/comment.svg" alt=""/>
                </div>
              </div>
              <div class="comment comment-3">
                <div class="user user-3">
                  <img src="../image/account-circle.svg" alt=""/>
                  <h4>Đoàn Duy Đạt</h4>
                  <p>2 days ago</p>
                </div>
                <div class="comment-detail">
                  <div>
                    <span><img class="star" src="../image/baseline-star_rate-18px.svg" alt=""/></span>
                    <span><img class="star" src="../image/baseline-star_rate-18px.svg" alt=""/></span>
                    <span><img class="star" src="../image/baseline-star_rate-18px.svg" alt=""/></span>
                    <span><img class="star" src="../image/baseline-star_rate-18px.svg" alt=""/></span>
                    <span><img class="star" src="../image/baseline-star_rate-18px.svg" alt=""/></span>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis veritatis qui
                    iste quod placeat, voluptate, dignissimos repudiandae rem unde incidunt quidem dicta
                    doloribus in animi, nostrum nulla eum minima sequi ullam numquam iusto eos commodi.
                    Praesentium temporibus optio totam. Necessitatibus explicabo, blanditiis impedit, omnis
                    illum ducimus molestias. Qui, quod, itaque.</p>
                    <img src="../image/thumb-up.svg" alt=""/>
                    <img src="../image/comment.svg" alt=""/>
                  </div>
                </div>
                <div class="comment comment-4">
                  <div class="user user-4">
                    <img src="../image/account-circle.svg" alt=""/>
                    <h4>Trần Thị Hoài</h4>
                    <p>2 days ago</p>
                  </div>
                  <div class="comment-detail">
                    <div>
                      <span><img class="star" src="../image/baseline-star_rate-18px.svg" alt=""/></span>
                      <span><img class="star" src="../image/baseline-star_rate-18px.svg" alt=""/></span>
                      <span><img class="star" src="../image/baseline-star_rate-18px.svg" alt=""/></span>
                      <span><img class="star" src="../image/baseline-star_rate-18px.svg" alt=""/></span>
                      <span><img class="star" src="../image/baseline-star_rate-18px.svg" alt=""/></span>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis veritatis qui
                      iste quod placeat, voluptate, dignissimos repudiandae rem unde incidunt quidem dicta
                      doloribus in animi, nostrum nulla eum minima sequi ullam numquam iusto eos commodi.
                      Praesentium temporibus optio totam. Necessitatibus explicabo, blanditiis impedit, omnis
                      illum ducimus molestias. Qui, quod, itaque.</p>
                      <img src="../image/thumb-up.svg" alt=""/>
                      <img src="../image/comment.svg" alt=""/>
                    </div>
                  </div>
                  <div class="comment comment-5">
                    <div class="user user-5">
                      <img src="../image/account-circle.svg" alt=""/>
                      <h4>Nguyễn Văn Huy</h4>
                      <p>1 month ago</p>
                    </div>
                    <div class="comment-detail">
                      <div>
                        <span><img class="star" src="../image/baseline-star_rate-18px.svg" alt=""/></span>
                        <span><img class="star" src="../image/baseline-star_rate-18px.svg" alt=""/></span>
                        <span><img class="star" src="../image/baseline-star_rate-18px.svg" alt=""/></span>
                        <span><img class="star" src="../image/baseline-star_rate-18px.svg" alt=""/></span>
                        <span><img class="star" src="../image/baseline-star_rate-18px.svg" alt=""/></span>
                      </div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis veritatis qui
                        iste quod placeat, voluptate, dignissimos repudiandae rem unde incidunt quidem dicta
                        doloribus in animi, nostrum nulla eum minima sequi ullam numquam iusto eos commodi.
                        Praesentium temporibus optio totam. Necessitatibus explicabo, blanditiis impedit, omnis
                        illum ducimus molestias. Qui, quod, itaque.</p>
                        <img src="../image/thumb-up.svg" alt=""/>
                        <img src="../image/comment.svg" alt=""/>
                      </div>
                    </div>
                    <div class="numeric">
                      <img src="../image/baseline-chevron_left-24px.svg" alt=""/>
                      <img src="../image/page-first.svg" alt=""/>
                      <img src="../image/numeric-1-box.svg" alt=""/>
                      <img src="../image/numeric-2-box-outline.svg" alt=""/>
                      <img src="../image/numeric-3-box-outline.svg" alt=""/>
                      <img src="../image/numeric-4-box-outline.svg" alt=""/>
                      <img src="../image/numeric-5-box-outline.svg" alt=""/>
                      <img src="../image/page-last.svg" alt=""/>
                      <img src="../image/baseline-chevron_right-24px.svg" alt=""/>
                    </div>
                    <h1 class="suggest">Suggestions</h1>
                    <div class="suggest-book">
                      <div class="book book-1">
                        <img src="../image/Harry-2.gif" alt=""/>
                        <h4>Harry Potter</h4>
                        <span class="star"><img src="../image/baseline-star_rate-18px.svg" alt=""/></span>
                        <span class="star"><img src="../image/baseline-star_rate-18px.svg" alt=""/></span>
                        <span class="star"><img src="../image/baseline-star_rate-18px.svg" alt=""/></span>
                        <span class="star"><img src="../image/baseline-haft-star_rate-18px.svg" alt=""/></span>
                        <span>$12</span>
                      </div>
                      <div class="book book-2">
                        <img src="../image/Harry-2.gif" alt=""/>
                        <h4>Harry Potter</h4>
                        <span class="star"><img src="../image/baseline-star_rate-18px.svg" alt=""/></span>
                        <span class="star"><img src="../image/baseline-star_rate-18px.svg" alt=""/></span>
                        <span class="star"><img src="../image/baseline-star_rate-18px.svg" alt=""/></span>
                        <span class="star"><img src="../image/baseline-star_rate-18px.svg" alt=""/></span>
                        <span>$10</span>
                      </div>
                      <div class="book book-3">
                        <img src="../image/Harry-2.gif" alt=""/>
                        <h4>Harry Potter</h4>
                        <span class="star"><img src="../image/baseline-star_rate-18px.svg" alt=""/></span>
                        <span class="star"><img src="../image/baseline-star_rate-18px.svg" alt=""/></span>
                        <span class="star"><img src="../image/baseline-star_rate-18px.svg" alt=""/></span>
                        <span class="star"><img src="../image/baseline-star_rate-18px.svg" alt=""/></span>
                        <span class="star"><img src="../image/baseline-haft-star_rate-18px.svg" alt=""/></span>
                        <span>$10</span>
                      </div>
                      <div class="book book-4">
                        <img src="../image/Harry-2.gif" alt=""/>
                        <h4>Harry Potter</h4>
                        <span class="star"><img src="../image/baseline-star_rate-18px.svg" alt=""/></span>
                        <span class="star"><img src="../image/baseline-star_rate-18px.svg" alt=""/></span>
                        <span class="star"><img src="../image/baseline-star_rate-18px.svg" alt=""/></span>
                        <span class="star"><img src="../image/baseline-star_rate-18px.svg" alt=""/></span>
                        <span>$15</span>
                      </div>
                    </div>
                    <h1>Detail Information</h1>
                    <div class="detail">
                      <div class="entity">
                        <ul>
                          <li>Pulisher</li>
                          <li>Author</li>
                          <li>Publishing Company</li>
                          <li>Cover</li>
                          <li>SKU</li>
                        </ul>
                      </div>
                      <div class="infor-entity">
                        <ul>
                          <li>NineBook</li>
                          <li>{author}</li>
                          <li>{company}</li>
                          <li>Soft</li>
                          <li>{_id}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                // </div>
              )})}
            </div>
          // <div className="product-summary clearfix" key={_id}>
          //   <div className="product-image">
          //     <img className="img-book" alt={name} src={`http://localhost:5000/${bookImage}`}></img>
          //   </div>
          //   <div className="product-cart">
          //     <h1>{name}</h1>
          //     <div className="product-brand">
          //       <h6>Author: {author}</h6>
          //       <h3>${price}</h3>
          //     </div>
          //     <label>Quantity</label>
          //     <div className="item-quantity">
          //       <button type="submit" onClick={this.onMinusQtyClick.bind(this)} className="change-quantity">-</button>
          //       <input type="text" value={this.state.qty} id="quantity" name="quantity" pattern="[0-9]*" data-line readOnly/>
          //       <button type="submit" onClick={this.onAddQtyClick.bind(this)} className="change-quantity">+</button>
          //     </div>
          //     <div className="item-submit">
          //       <Button color="primary" onClick={this.onAddToCartClick.bind(this, name, price)}>Add To Cart</Button>
          //     </div>
          //   </div>
          // </div>

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

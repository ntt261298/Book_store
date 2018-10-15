import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { userCheckout } from '../../actions/cartAction';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

class Contact extends React.Component {
  state = {
    Email: '',
    Phone: '',
    Address: ''
  }

  onChanged(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmitClick(e) {
    const token = this.props.account.token;
    const email = this.state.Email;
    const phone = this.state.Phone;
    const address = this.state.Address;
    e.preventDefault();
    this.props.cart.carts.map(cart => {
      console.log(cart);
      this.props.userCheckout(token, email, phone, address, cart.count, cart.name, cart.price);
    })
  }

  render() {
    return (
      <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="Email">Email</Label>
              <Input type="email" name="Email" onChange={this.onChanged.bind(this)} placeholder="Your email..." />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="phoneNumber">Password</Label>
              <Input type="text" name="Phone" onChange={this.onChanged.bind(this)} placeholder="Your phone number..." />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="address">Address</Label>
          <Input type="text" name="Address" onChange={this.onChanged.bind(this)} placeholder="So 1 Giai Phong Hanoi"/>
        </FormGroup>
        <Button onClick={this.onSubmitClick.bind(this)}>Checkout</Button>
      </Form>
    );
  }
}

Contact.propTypes = {
  userCheckout: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  account: state.account,
  cart: state.cart
})

export default connect(mapStateToProps, { userCheckout })(Contact);

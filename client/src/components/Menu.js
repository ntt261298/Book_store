import React from 'react';
import { Container, Row, Col, Button, Navbar, NavbarBrand, InputGroup, Input, InputGroupAddon, InputGroupText } from 'reactstrap';
import { toggleLogin } from '../actions/itemsAction';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.onLoginClick = this.onLoginClick.bind(this);
  }
  onLoginClick() {
    this.props.toggleLogin();
  }
  render() {
    return (
      <div>
        <Navbar  color="dark" dark>
          <Container>
            <NavbarBrand href="/" className="mr-auto">NotMine</NavbarBrand>
            <InputGroup>
              <Input placeholder="Find product..."/>
              <InputGroupAddon addonType="append">
                <Button color="secondary">Search</Button>
              </InputGroupAddon>
            </InputGroup>
            <Button
              color="secondary"
              style={{margin:'0 5px'}}
              onClick={this.onLoginClick}>Login</Button>{' '}
            <Button color="secondary">Shopping Cart</Button>{' '}
          </Container>
        </Navbar>
      </div>
    );
  }
}

Menu.propTypes = {
  toggleLogin: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  item: state.item
})
export default connect(mapStateToProps, { toggleLogin })(Menu);

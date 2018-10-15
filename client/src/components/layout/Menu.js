import React from 'react';
import { Container, Button, Navbar, NavbarBrand, InputGroup, Input, InputGroupAddon, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { toggleLogin } from '../../actions/itemsAction';
import { userLogout } from '../../actions/accountsAction';
import { getSearchResults } from '../../actions/searchAction';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

class Menu extends React.Component {
  state = {
    searching: false
  }
  constructor(props) {
    super(props);
    this.onLoginClick = this.onLoginClick.bind(this);
  }

  onLoginClick() {
    this.props.toggleLogin();
  }

  onLogoutClick() {
    this.props.toggleLogin();
    this.props.userLogout(this.props.account.token);
  }

  showResults(e) {
    const val = e.target.value;
    if(val === '') {
      this.setState({
        searching: false
      })
    } else {
      this.setState({
        searching: true
      });
      this.props.getSearchResults(val);
    }
  }
  render() {
    const token = this.props.account.token;
    const searching = this.state.searching;
    const results = this.props.search.results;
    return (
      <div>
        <Navbar  color="dark" dark>
          <Container>
            <NavbarBrand href="/" className="mr-auto">NotMine</NavbarBrand>
            <InputGroup>
              <Input placeholder="Find product..." onChange={this.showResults.bind(this)}/>
              <InputGroupAddon addonType="append">
                <Button color="secondary">Search</Button>
              </InputGroupAddon>
              <div className="search-results">
              {
                searching ? (
                  results.map(({_id, name}) => (
                    <Link to={`/search/${name}`}>
                      <p  key={_id}>{name}</p>
                    </Link>
                  ))
                ) : null
              }
              </div>
            </InputGroup>
            {
              !token ? (
                <Button
                  color="secondary"
                  style={{margin:'0 5px'}}
                  onClick={this.onLoginClick}>Login</Button>
              ) : (
                <UncontrolledDropdown
                  style={{margin:'0 5px'}}
                  >
                  <DropdownToggle caret>
                    Hello
                  </DropdownToggle>
                  <DropdownMenu>
                    <Link to='/user'>
                      <DropdownItem>
                        Shopping History
                      </DropdownItem>
                    </Link>
                    <DropdownItem divider />
                    <DropdownItem onClick={this.onLogoutClick.bind(this)}>Logout</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              )
            }

            <Link to={`/cart`}>
              <Button color="secondary">Shopping Cart</Button>{' '}
            </Link>
          </Container>
        </Navbar>
      </div>
    );
  }
}

Menu.propTypes = {
  toggleLogin: PropTypes.func.isRequired,
  userLogout: PropTypes.func.isRequired,
  getSearchResults: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  item: state.item,
  account: state.account,
  search: state.search
})
export default connect(mapStateToProps, { toggleLogin, userLogout, getSearchResults })(Menu);

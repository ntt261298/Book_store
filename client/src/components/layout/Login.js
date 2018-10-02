import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, Input, Label, Form, FormGroup } from 'reactstrap';
import { toggleLogin } from '../../actions/itemsAction';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      login: 'active',
      signup: '',
      box: '',
      loginusername: '',
      loginpassword: '',
      signupusername: '',
      signuppassword: '',
      signuprepassword: ''
    };

    this.toggle = this.toggle.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onAddClick = this.onAddClick.bind(this);
  }

  toggle() {
    this.props.toggleLogin();
  }

  signupClick(e) {
    e.preventDefault();
    this.setState({
      login: '',
      signup: 'active',
      box: 'second-box'
    })
  }

  loginClick(e) {
    e.preventDefault();
    this.setState({
      login: 'active',
      signup: '',
      box: ''
    })
  }

  onAddClick() {
    this.toggle();
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const newItem = {
      name: this.state.name
    }
    if(newItem.name) {
      this.props.addItem(newItem);
    }

    this.toggle();
  }

  onLoginUsernameChanged(e) {
    this.setState({
      loginusername: e.target.value
    })
  }

  onLoginPasswordChanged(e) {
    this.setState({
      loginpassword: e.target.value
    })
  }

  onSignupUsernameChanged(e) {
    this.setState({
      signupusername: e.target.value
    })
  }

  onSignupPasswordChanged(e) {
    this.setState({
      signuppassword: e.target.value
    })
  }

  onReSignupPasswordChanged(e) {
    this.setState({
      signuprepassword: e.target.value
    })
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.props.item.modal} toggle={this.toggle}>
          <div className="panel">
            <ul className={`panel__menu ${this.state.box}`} id="menu">
              <hr />
              <li onClick={this.loginClick.bind(this)}><a href="#">Login</a></li>
              <li onClick={this.signupClick.bind(this)}><a href="#">SignUp</a></li>
            </ul>
            <div className="panel__wrap">
              <div className={`panel__box ${this.state.login}`} id="signInBox">
                <label>Username: </label>
                  <input
                    type="email"
                    value={this.state.loginusername}
                    onChange={this.onLoginUsernameChanged.bind(this)}/>
                <label>Password: </label>
                  <input
                    type="password"
                    value={this.state.loginpassword}
                    onChange={this.onLoginPasswordChanged.bind(this)}/>
                <input type="submit"/>
              </div>
              <div className={`panel__box ${this.state.signup}`} id="signUpBox">
                <label>Username: </label>
                  <input
                    type="email"
                    value={this.state.signupusername}
                    onChange={this.onSignupUsernameChanged.bind(this)}/>
                <label>Password: </label>
                  <input
                    type="password"
                    value={this.state.signuppassword}
                    onChange={this.onSignupPasswordChanged.bind(this)}/>
                <label>Confirm Password: </label>
                  <input
                    type="password"
                    value={this.state.resignuppassword}
                    onChange={this.onReSignupPasswordChanged.bind(this)}/>
                <input type="submit"/>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

Login.propTypes = {
  toggleLogin: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  item: state.item
})

export default connect(mapStateToProps, { toggleLogin })(Login);

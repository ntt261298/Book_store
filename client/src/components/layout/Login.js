import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, Input, Label, Form, FormGroup } from 'reactstrap';
import { toggleLogin } from '../../actions/itemsAction';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };

    this.toggle = this.toggle.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onAddClick = this.onAddClick.bind(this);
  }

  toggle() {
    this.props.toggleLogin();
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
  render() {
    return (
      <div>
        <Modal isOpen={this.props.item.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle} className="btn btn-danger">Login</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label>Username:</Label>
                <Input type="text" name="username" placeholder="" onChange={this.onChange} />
                <Label>Password: </Label>
                <Input type="text" name="password" placeholder="" onChange={this.onChange} />
                <Button color="primary" style={{marginTop: '1rem'}} block>Submit</Button>
              </FormGroup>
            </Form>
          </ModalBody>
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

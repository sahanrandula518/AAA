import React, { Component } from 'react';
import { Button, FormText } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const number = value =>
  value && isNaN(Number(value)) ? 'Must be a number' : undefined;
const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined;
const minValue18 = minValue(18);
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;
const tooOld = value =>
  value && value > 65 ? 'You might be too old for this' : undefined;
const aol = value =>
  value && /.+@aol\.com/.test(value)
    ? 'Really? You still use AOL for your email?'
    : undefined;

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitting: this.props.processing,
      error_msg: ''
    };
  }

  onSubmit(values) {
    this.props.sign_up(values);
    //console.log("sign up now");
    //console.log("name", values.target.company_name);
  }

  renderField(field) {
    const {
      meta: { touched, error }
    } = field;
    // console.log("textFeild", field);
    return (
      <div>
        <label>{field.label}</label>
        <input
          className='form-control'
          type={field.type || 'text'}
          {...field.input}
        />
        <div className='text-help' color='danger'>
          {touched && error && <FormText color='danger'>{error}</FormText>}
        </div>
      </div>
    );
  }

  renderFieldContact(field) {
    const {
      meta: { touched, error }
    } = field;
    // console.log("textFeild", field);
    return (
      <div>
        <label>{field.label}</label>
        <input
          className='form-control'
          type={field.type || 'text'}
          {...field.input}
          onKeyDown={evt =>
            (evt.key === 'e' ||
              evt.key === 'E' ||
              evt.key === '+' ||
              evt.key === '-' ||
              evt.key === '.') &&
            evt.key.match(/[0-9]*/) &&
            evt.preventDefault()
          }
        />
        <div className='text-help' color='danger'>
          {touched && error && <FormText color='danger'>{error}</FormText>}
        </div>
      </div>
    );
  }

  render() {
    // const {handleSubmit, submitting} = this.props;
    // const {login} = this.props;
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div className='text-center'>
          <h1>Sign up</h1>
          <p className='text-muted'>Create a new account, it's free</p>
        </div>
        <FormText color='danger'>{this.state.error_msg}</FormText>
        <Field
          component={this.renderField}
          type='text'
          label='Email'
          size='lg'
          name='email'
          validate={email}
          warn={aol}
        />

        <Field
          component={this.renderFieldContact}
          type='number'
          label='Contact Number '
          size='lg'
          name='Contact_Number'
          validate={number}
          warn={aol}
        />

        <Field
          component={this.renderField}
          type='password'
          label='Password'
          size='lg'
          name='password'
        />
        <Field
          component={this.renderField}
          type='password'
          label='Confirm Password'
          size='lg'
          name='passwordConfirmation'
        />

        <Button
          color='success'
          block
          type='submit'
          size='lg'
          style={{ marginTop: 15, border: '1px solid white' }}
        >
          Sign Up
        </Button>
      </form>
    );
  }
}
const validate = values => {
  const errors = {};
  if (!values.Contact_Number) {
    errors.Contact_Number = 'Please enter Contact Number';
  }
  if (!values.address) {
    errors.address = 'Please enter the company address';
  }
  if (!values.email) {
    errors.email = 'Please enter the E-mail';
  }
  if (!values.password) {
    errors.password = 'Please enter the password';
  } else if (values.password.length < 8) {
    errors.password = 'Passwords must contain at least 8 characters';
  }
  if (!values.passwordConfirmation) {
    errors.passwordConfirmation = 'Please re enter the password';
  }
  if (!values.company_name) {
    errors.company_name = 'Please enter the company name';
  }
  if (!values.contact_person) {
    errors.contact_person = 'Please enter the contact person';
  }
  if (!values.designation) {
    errors.designation = 'Please enter the designation';
  }
  return errors;
};

export default reduxForm({ validate, form: 'SignUpForm' })(SignUpForm);

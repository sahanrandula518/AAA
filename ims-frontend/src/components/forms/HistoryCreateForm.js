import { Field, reduxForm } from "redux-form";

import React, { Component } from "react";

export class HistoryCreateForm extends Component {
  renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div class="form-group">
      <label>{label}</label>

      <input {...input} type={type} class="form-control" />
      {touched && error && <span>{error}</span>}
    </div>
  );

  onSubmit = formValues => {
    console.log(formValues);
  };

  renderDropDownField = ({label, meta: { touched, error } }) => (
    <div class="form-group">
      <label>{label}</label>
      <select
        class="form-control"
        id="exampleFormControlSelect1"
        onChange={e => {
          console.log(e.target.value);
        }}
      >
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
  );
  render() {
    const { handleSubmit, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <Field
          name=" h id"
          type="text"
          component={this.renderField}
          label="H ID"
        />
        <Field
          name="Item Name"
          component={this.renderField}
          label="item Name"
        />
       
        <Field
          name="Item Code"
          type="select"
          component={this.renderField}
          label="Item Code"
        />
          
          <Field
          name="Event"
          type="select"
          component={this.renderField}
          label="Event"
        />

        <Field
          name="Discription"
          type="select"
          component={this.renderField}
          label="Discription"
        />

        <Field
          name="Conducted By"
          type="select"
          component={this.renderField}
          label="Conducted by"
        />

        <Field
          name="Date"
          type="select"
          component={this.renderField}
          label="Date"
        />  

        <Field
          name="Status"
          type="select"
          component={this.renderDropDownField}
          label="Status"
        />


       
        <div style={{visibility: 'hidden'}}>
          <button type="submit" disabled={submitting}>
            Submit
          </button>
        </div>
      </form>
    );
  }
}
const validate = values => {
  const errors = {};
  if (!values.itemcode) {
    errors.itemcode = "Required";
  } 
 

  return errors;
};

export default reduxForm({
  form: "HistoryCreateForm",
  validate
})(HistoryCreateForm);

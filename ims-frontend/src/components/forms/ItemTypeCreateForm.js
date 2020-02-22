import { Field, reduxForm } from "redux-form";

import React, { Component } from "react";
import axio from 'axios';

export class ItemTypeCreateForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      item_type: '',
      status: ''
    }

    
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.submitFrom = this.submitFrom.bind(this);
  }


  renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div class="form-group">
      <label>{label}</label>

      <input {...input} type={type} class="form-control" />
      {touched && error && <span>{error}</span>}
    </div>
  );

  

   
  //onSubmit = formValues => {
   // console.log(formValues);
  //};

  onChangeName(e){
    e.preventDefault();
    const value = e.target.value
    this.setState({item_type: value})
  }
  onChangeStatus(e){
    e.preventDefault();
    const value = e.target.value
    this.setState({status: value})
  }
 
/*
  handleChange(e){
    e.preventDefault();
    const name = e.target.name
    const value = e.target.value
    this.setState({[name]: value})
  }
 
  */
  submitFrom(e){
    e.preventDefault();
 
    const item_typeObj = {
      item_type: this.state.item_type,
      status: this.state.status
    };
 
    axio.post('http://localhost:5000/api/item_type', item_typeObj)
         .then(res => {
           console.log(res.data)
         })
         .catch(err => {
           console.log(err.response)
         });
 
         this.setState({
           item_type: '',
           status:''
         })
 
  } 

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
  //  const { handleSubmit, submitting } = this.props;
    return (
      /*
      <form onSubmit={handleSubmit(this.onSubmit)}>
        
        <Field
          name="Item Type"
          component={this.renderField}
          label="Item Type"
        />
       
        <Field
          name="Status"
          type="select"
          component={this.renderField}
          label="Status"
        />
       
        <div style={{visibility: 'hidden'}}>
          <button type="submit" disabled={submitting}>
            Submit
          </button>
        </div>
      </form>
    );

    */
   <form onSubmit={this.submitForm}>
   <div className="form-group">
     <lable>ItemType</lable>
     <input type="text" name="item_type" className="form-control" onChange={this.onChangeName} value={this.state.item_type} placeholder="ItemType"/>
   </div>

   <div className="form-group">
          <label>Status</label>

          <div className="form-group">
          <select onChange={this.onChangeStatus}class="custom-select custom-select- mb-3">
          <option selected>Status</option>
          <option value="1">Active</option>
         <option value="0">Inactive</option>
           
          </select>
          </div>

          </div>

   <div className="modal-footer">
     <button className="btn btn-success" onClick={this.submitFrom} type="submit">Submit</button>
   </div>
 </form>
);
  }
}
const validate = values => {
  const errors = {};
  if (!values.item_type) {
    errors.item_type = "Required";
  } 
 

  return errors;
};

export default reduxForm({
  form: "ItemTypeCreateForm",
  validate
})(ItemTypeCreateForm);

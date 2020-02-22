import { Field, reduxForm } from "redux-form";

import React, { Component } from "react";
import axio from 'axios';

export class VendorsCreateForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      vendor_name: '',
      registered_date:'',
      status:''
    }

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeRegisteredDate = this.onChangeRegisteredDate.bind(this);
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
  //  console.log(formValues);
 // };

 onChangeName(e){
  e.preventDefault();
  const value = e.target.value
  this.setState({ vendor_name: value})
}
onChangeRegisteredDate(e){
  e.preventDefault();
  const value = e.target.value
  this.setState({registered_date: value})
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

  const vendorsObj = {
    vendor_name: this.state.vendor_name,
    registered_date: this.state.registered_date,
    status: this.state.status
  };

  axio.post('http://localhost:5000/api/vendor', vendorsObj)
       .then(res => {
         console.log(res.data)
       })
       .catch(err => {
         console.log(err.response)
       });

       this.setState({
        vendor_name: '',
         registered_date:'',
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
          name="Vendor Name"
          component={this.renderField}
          label="Vendor Name"
        />
       
        <Field
          name="Registerd Date"
          type="select"
          component={this.renderField}
          label="Registerd Date"
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
      */

     <form onSubmit={this.submitForm}>
     <div className="form-group">
       <lable>Vendors</lable>
       <input type="text" name="vendors" className="form-control" onChange={this.onChangeName} value={this.state.vendors} placeholder="Vendors"/>
     </div>

     <div className="form-group">
       <lable>Registered Date</lable>
       <input type="text" name="registered_date" className="form-control" onChange={this.onChangeRegisteredDate} value={this.state.registered_date} placeholder="Registered Date"/>
     </div>
  
     <div className="form-group">
            <label>Status</label>
  
            <div className="form-group">
            <select class="custom-select custom-select- mb-3">
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
  if (!values.vendor_name) {
    errors.vendor_name = "Required";
  } 

  const validate = values => {
    const errors = {};
    if (!values.registered_date) {
      errors.registered_date = "Required";
    }
  }
 

  return errors;
};

export default reduxForm({
  form: "VendorsCreateForm",
  validate
})(VendorsCreateForm);

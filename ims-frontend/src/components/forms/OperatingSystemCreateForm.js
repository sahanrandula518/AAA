import { Field, reduxForm } from "redux-form";

import React, { Component } from "react";
import axio from 'axios';

export class OperatingSystemCreateForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      operating_system: '',
      bit_version: '',
      status:''
    }

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeBitVersion = this.onChangeBitVersion.bind(this);
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
//  };

onChangeName(e){
  e.preventDefault();
  const value = e.target.value
  this.setState({ operating_system: value})
}
onChangeBitVersion(e){
  e.preventDefault();
  const value = e.target.value
  this.setState({ bit_version: value})
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

  const operating_systemObj = {
    operating_system: this.state.operating_system,
    bit_version: this.state. bit_version,
    status: this.state.status
  };

  axio.post('http://localhost:5000/api/operating_system', operating_systemObj)
       .then(res => {
         console.log(res.data)
       })
       .catch(err => {
         console.log(err.response)
       });

       this.setState({
         operating_system: '',
         bit_version:'',
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
    //const { handleSubmit, submitting } = this.props;
    return (

      /*
      <form onSubmit={handleSubmit(this.onSubmit)}>
        
        <Field
          name="Operating System"
          component={this.renderField}
          label="Operating System"
        />
       
        <Field
          name="Bit Version"
          type="select"
          component={this.renderField}
          label="Bit Version"
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
       <lable>OperatingSystem</lable>
       <input type="text" name="operating_system" className="form-control" onChange={this.onChangeName} value={this.state.operating_system} placeholder="OperatingSystem"/>
     </div>

     <div className="form-group">
              <label>Bit Version</label>
             <input type="text" name="bit_version" className="form-control" onChange={this.onChangeBitVersion} value={this.state.bit_version} placeholder="BitVersion"/>
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
  if (!values.operating_system) {
    errors.operating_system = "Required";
  } 

  const validate = values => {
    const errors = {};
    if (!values.bit_version) {
      errors.bit_version = "Required";
    }
  }
 

  return errors;
};

export default reduxForm({
  form: "OperatingSystemCreateForm",
  validate
})(OperatingSystemCreateForm);

import { Field, reduxForm } from "redux-form";

import React, { Component } from "react";
import axio from 'axios';

export class ItemCreateForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      item_code: '',
      item_type_id:'',
      item_model_id:'',
      serial_no:'',
      ram:'',
      hdd:'',
      operating_system_id:'',
      license_status:'',
      product_key:'',
      purchased_date:'',
      warranty_expire_date:'',
      vendor_id:'',
      battery_serial_number:'',
      charger_ct_number:'',
      user_id:'',
      Invoice_number:'',
      status:''
    }

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeItemTypeId = this.onChangeItemTypeId.bind(this);
    this.onChangeItemModelId = this.onChangeItemModelId.bind(this);
    this.onChangeSerialNo = this.onChangeSerialNo.bind(this);
    this.onChangeRam = this.onChangeRam.bind(this);
    this.onChangeHdd = this.onChangeHdd.bind(this);
    this.onChangeOperatingSystemId = this.onChangeOperatingSystemId.bind(this);
    this.onChangeLicenseStatus = this.onChangeLicenseStatus.bind(this);
    this.onChangeProductKey = this.onChangeProductKey.bind(this);
    this.onChangePurchasedDate = this.onChangePurchasedDate.bind(this);
    this.onChangeWarrantyExpireDate = this.onChangeWarrantyExpireDate.bind(this);
    this.onChangeVendorId = this.onChangeVendorId.bind(this);
    this.onChangeBatterySerialNumber = this.onChangeBatterySerialNumber.bind(this);
    this.onChangeChargerCtNumber = this.onChangeChargerCtNumber.bind(this);
    this.onChangeUserID = this.onChangeUserID.bind(this);
    this.onChangeInvoiceNumber = this.onChangeInvoiceNumber.bind(this);

    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.submitFrom = this.submitFrom.bind(this);
  }


  renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
      <div class="col">
      <label>{label}</label>

      <input {...input} type={type} class="form-control" />
      {touched && error && <span>{error}</span>}
    </div>
    </div>
  );

  //onSubmit = formValues => {
   // console.log(formValues);
 // };

 onChangeName(e){
  e.preventDefault();
  const value = e.target.value
  this.setState({ item_code: value})
}
onChangeItemTypeId(e){
  e.preventDefault();
  const value = e.target.value
  this.setState({item_type_id: value})
}
onChangeItemModelId(e){
  e.preventDefault();
  const value = e.target.value
  this.setState({item_model_id: value})
}
onChangeSerialNo(e){
  e.preventDefault();
  const value = e.target.value
  this.setState({serial_no: value})
}
onChangeRam(e){
  e.preventDefault();
  const value = e.target.value
  this.setState({ram: value})
}
onChangeHdd(e){
  e.preventDefault();
  const value = e.target.value
  this.setState({hdd: value})
}
onChangeOperatingSystemId(e){
  e.preventDefault();
  const value = e.target.value
  this.setState({operating_system_id: value})
}
onChangeLicenseStatus(e){
  e.preventDefault();
  const value = e.target.value
  this.setState({license_status: value})
}
onChangeProductKey(e){
  e.preventDefault();
  const value = e.target.value
  this.setState({product_key: value})
}
onChangePurchasedDate(e){
  e.preventDefault();
  const value = e.target.value
  this.setState({purchased_date: value})
}
onChangeWarrantyExpireDate(e){
  e.preventDefault();
  const value = e.target.value
  this.setState({warranty_expire_date: value})
}
onChangeVendorId(e){
  e.preventDefault();
  const value = e.target.value
  this.setState({vendor_id: value})
}
onChangeBatterySerialNumber(e){
  e.preventDefault();
  const value = e.target.value
  this.setState({battery_serial_number: value})
}
onChangeChargerCtNumber(e){
  e.preventDefault();
  const value = e.target.value
  this.setState({charger_ct_number: value})
}
onChangeUserID(e){
  e.preventDefault();
  const value = e.target.value
  this.setState({user_id: value})
}
onChangeInvoiceNumber(e){
  e.preventDefault();
  const value = e.target.value
  this.setState({Invoice_number: value})
}

onChangeStatus(e){
  e.preventDefault();
  const value = e.target.value
  this.setState({status: value})
}

submitFrom(e){
  e.preventDefault();

  const itemObj = {
    item_code: this.state.item_code,
    item_type_id: this.state.item_type_id,
    item_model_id: this.state.item_model_id,
    serial_no:this.state.serial_no,
    ram:this.state.ram,
    hdd:this.state.hdd,
    operating_system_id:this.state.operating_system_id,
    license_status:this.state.license_status,
    product_key:this.state.product_key,
    purchased_date:this.state.purchased_date,
    warranty_expire_date:this.state.warranty_expire_date,
    vendor_id:this.state.vendor_id,
    battery_serial_number:this.state.battery_serial_number,
    charger_ct_number:this.state.charger_ct_number,
    user_id:this.state.user_id,
    Invoice_number:this.state.Invoice_number,
    status: this.state.status
  };
  

  console.log(itemObj);
  

  axio.post('http://localhost:5000/api/item', itemObj)
       .then(res => {
         console.log(res.data)
       })
       .catch(err => {
         console.log(err.response)
       });

       this.setState({
        item_code: '',
        item_type_id:'',
        item_model_id:'',
        serial_no:'',
        ram:'',
        hdd:'',
        operating_system_id:'',
        license_status:'',
        product_key:'',
        purchased_date:'',
        warranty_expire_date:'',
        vendor_id:'',
        battery_serial_number:'',
        charger_ct_number:'',
        user_id:'',
        Invoice_number:'',
        status:''
       })

}


  renderDropDownField = ({label, meta: { touched, error } }) => (
    <div >
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

  renderTextArea = ({ input, label, type, meta: { touched, error } }) =>{
      return(<div>
        <div class="col">
        <label>{label}</label>
  
        <textarea  {...input}  class="form-control" />
        {touched && error && <span>{error}</span>}
      </div>
      </div>)
  }
  render() {
  // const { handleSubmit, submitting } = this.props;
    return (
      
      /*
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div className='form-row'>
        <Field
          name="itemcode"
          type="text"
          component={this.renderField}
          label="Item Code"
        /> 
      
        <Field 
          name="itemType id"
          component={this.renderDropDownField}
          label="Item Type ID"
        />
             
        <Field
          name="itemModel id"
          type="select"
          component={this.renderDropDownField}
          label="Item Model ID"
        />
        
        <Field
          name="serialno"
          type="text"
          component={this.renderField}
          label="Serial No"
        />
        <Field
          name="ram"
          type="text"
          component={this.renderField}
          label="RAM"
        />
        <Field
          name="hdd"
          type="text"
          component={this.renderField}
          label="HDD"
        />
        <Field
          name="os"
          type="text"
          component={this.renderDropDownField}
          label="Operating System"
        />
        <Field
          name="licenseStatus"
          type="text"
          component={this.renderDropDownField}
          label="License Status"
        />
        <Field
          name="productKey"
          type="text"
          component={this.renderField}
          label="Product Key"
        />
        <Field
          name="purchaseDate"
          type="text"
          component={this.renderField}
          label="Purchase Date"
        />
        <Field
          name="warrentyExpireDate"
          type="text"
          component={this.renderField}
          label="Warrenty Expire Date"
        />
        <Field
          name="vendor"
          type="text"
          component={this.renderDropDownField}
          label="Vendor"
        />
        <Field
          name="batterySerialNo"
          type="text"
          component={this.renderField}
          label="Battery Serial No:"
        />
        <Field
          name="chagerCT"
          type="text"
          component={this.renderField}
          label="Charger CT No:"
        />
        <Field
          name="username"
          type="text"
          component={this.renderDropDownField}
          label="UserName"
        />
         <Field
          name="Invoice Number"
          type="text"
          component={this.renderField}
          label="Invoice Number"
        />
         <Field
         
       
          name="Discription"
          type="text"
          component={this.renderTextArea}
          label="Discription"
        />
      
         <Field
          name="Reson"
          type="text"
          component={this.renderField}
          label="Reson"
        />
        </div>
        <div className='modal-footer' >
          <button className='btn btn-success ' type="submit" disabled={submitting}>
            Submit
          </button>
        </div>
      </form>
      */
     <form onSubmit={this.submitForm}>
       <div className='form-row'></div>
     <div className="form-group">
       <lable>Item Code</lable>
       <input type="text" name="item_code" className="form-control" onChange={this.onChangeName} value={this.state.item_code} placeholder="Item Code"/>
     </div>

     <div className="form-group">
       <lable>Item Type ID</lable>
       <input type="text" name="item_type_id" className="form-control" onChange={this.onChangeItemTypeId} value={this.state.item_type_id} placeholder="Item Type Id"/>
     </div>

     <div className="form-group">
       <lable>Item Model ID</lable>
       <input type="text" name="item_model_id" className="form-control" onChange={this.onChangeItemModelId} value={this.state.item_model_id} placeholder="Item Model Id"/>
     </div>

     <div className="form-group">
       <lable>Serial No</lable>
       <input type="text" name="serial_no" className="form-control" onChange={this.onChangeSerialNo} value={this.state.serial_no} placeholder="Serial No"/>
     </div>

     <div className="form-group">
       <lable>Ram</lable>
       <input type="text" name="ram" className="form-control" onChange={this.onChangeRam} value={this.state.ram} placeholder="Ram"/>
     </div>

     <div className="form-group">
       <lable>HDD</lable>
       <input type="text" name="hdd" className="form-control" onChange={this.onChangeHdd} value={this.state.hdd} placeholder="HDD"/>
     </div>

     <div className="form-group">
       <lable>Operating System Id</lable>
       <input type="text" name="operating system id" className="form-control" onChange={this.onChangeOperatingSystemId} value={this.state.operating_system_id} placeholder="Operating System Id"/>
     </div>

     <div className="form-group">
       <lable>License Status</lable>
       <input type="text" name="license status" className="form-control" onChange={this.onChangeLicenseStatus} value={this.state.license_status} placeholder="License Status"/>
     </div>

     <div className="form-group">
       <lable>Product Key</lable>
       <input type="text" name="product key" className="form-control" onChange={this.onChangeProductKey} value={this.state.product_key} placeholder="Product Key"/>
     </div>

     <div className="form-group">
       <lable>Purchased Date</lable>
       <input type="text" name="purchased date" className="form-control" onChange={this.onChangePurchasedDate} value={this.state.purchased_date} placeholder="Purchased Date"/>
     </div>

     <div className="form-group">
       <lable>Warranty Expire Date</lable>
       <input type="text" name="warranty expire date" className="form-control" onChange={this.onChangeWarrantyExpireDate} value={this.state.warranty_expire_date} placeholder="Warranty Expire Date"/>
     </div>

     <div className="form-group">
       <lable>Vendor ID</lable>
       <input type="text" name="vendor_id" className="form-control" onChange={this.onChangeVendorId} value={this.state.vendor_id} placeholder="Vendor Id"/>
     </div>

     <div className="form-group">
       <lable>Battery Serial Number</lable>
       <input type="text" name="battery_serial_number" className="form-control" onChange={this.onChangeBatterySerialNumber} value={this.state.battery_serial_number} placeholder="Battery Serial Number"/>
     </div>

     <div className="form-group">
       <lable>Charger Ct Number</lable>
       <input type="text" name="Charger_ct_number" className="form-control" onChange={this.onChangeChargerCtNumber} value={this.state.charger_ct_number} placeholder="Charger Ct Number"/>
     </div>

     <div className="form-group">
       <lable>User ID</lable>
       <input type="text" name="user_id" className="form-control" onChange={this.onChangeUserID} value={this.state.user_id} placeholder="User ID"/>
     </div>

     <div className="form-group">
       <lable>Invoice Number</lable>
       <input type="text" name="invoice number" className="form-control" onChange={this.onChangeInvoiceNumber} value={this.state.Invoice_number} placeholder="Invoice Number"/>
     </div>

     <div className="form-group">
       <lable>Discription</lable>
       <input type="text" name="discription" className="form-control" onChange={this.onChangeDiscription} value={this.state.discription} placeholder="Discription"/>
     </div>

     <div className="form-group">
       <lable>Reson</lable>
       <input type="text" name="reson" className="form-control" onChange={this.onChangeReson} value={this.state.reson} placeholder="Reson"/>
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
  if (!values.itemcode) {
    errors.itemcode = "Required";
  } 
 

  return errors;
};

export default reduxForm({
  form: "ItemCreateForm",
  validate
})(ItemCreateForm);

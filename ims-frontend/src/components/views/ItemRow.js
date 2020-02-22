/*
    SAHAN

 */

import React from "react";
import axio from "axios";

class ItemRow extends React.Component{

    constructor(props){
        super(props);
        this.deleteItem = this.deleteItem.bind(this);
        this.state={
            activeStatus: false,
        }
    }

    componentWillMount() {
        axio.get('http://localhost:5000/api/item')
            .then(res => {
                this.setState({
                    Items: res.data
                })
                // console.log(res.data)
            })
            .catch(res => {
                console.log(res.error)
            });
    }

    deleteItem(){
        axio.delete('http://localhost:5000/api/item/' + this.props.obj.id)
            .then(response => {
                console.log("item Deleted" + response.data);
            })
            .catch(error => {
                console.log(error.response)
            });
    }

    render() {
        return(
            <tr className="positive">
                <td>{this.props.obj.item_code}</td>
                <td>{this.props.obj.item_type_id}</td>
                <td>{this.props.obj.item_model_id}</td>
                <td>{this.props.obj.serial_no}</td>
                <td>{this.props.obj.ram}</td>
                <td>{this.props.obj.hdd}</td>
                <td>{this.props.obj.operating_system_id}</td>
                <td>{this.props.obj.license_status}</td>
                <td>{this.props.obj.product_key}</td>
                <td>{this.props.obj.purchased_date}</td>
                <td>{this.props.obj.warrenty_expire_date}</td>
                <td>{this.props.obj.vendor_id}</td>
                <td>{this.props.obj.battery_serial_number}</td>
                <td>{this.props.obj.charge_ct_number}</td>
                <td>{this.props.obj.user_id}</td>
                <td>{this.props.obj.Invoice_number}</td>
                
                <td>
                <div class="custom-control custom-switch">
                        {/* <label>Inactive</label> */}
                        <input type="checkbox" checked={this.state.activeStatus} ref="status" class="custom-control-input" id="activeStatus" />
                        <label class="custom-control-label" for="activeStatus">Active</label>
                </div>
                {/*
                    <i className="icon checkmark"></i>
                    <span className="badge badge-success">Approved</span>
                */}
                </td>
                <td>

                      <span>
                        <button type="button" onClick={this.deleteItem} className="btn btn-outline-danger btn-sm"><i className="trash icon"></i></button>
                        <button type="button" className="btn btn-outline-primary btn-sm" style={{ marginLeft: 5 }}><i className="pencil alternate icon"></i></button>
                      </span>
                </td>
            </tr>


        )
    }
}
export default ItemRow;


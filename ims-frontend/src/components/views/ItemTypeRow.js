/*
    SAHAN

 */

import React from "react";
import axio from "axios";

class ItemTypeRow extends React.Component{

    constructor(props){
        super(props);
        this.deleteItemType = this.deleteItemType.bind(this);
        this.state={
            activeStatus: false,
        }
    }

    componentWillMount() {
        axio.get('http://localhost:5000/api/item_type')
            .then(res => {
                this.setState({
                    ItemType: res.data
                })
               // console.log(res.data)
            })
            .catch(res => {
                console.log(res.error)
            });
    }

    deleteItemType(){
        axio.delete('http://localhost:5000/api/item_type/' + this.props.obj.id)
            .then(response => {
                console.log("item_type Deleted" + response.data);
            })
            .catch(error => {
                console.log(error.response)
            });
    }

    render() {
        return(
            <tr className="positive">
                <td>{this.props.obj.id}</td>
                <td>{this.props.obj.item_type}</td>
                
                <td>
                    {/*
                    <i className="icon checkmark"></i>
                    <span className="badge badge-success">Approved</span>
                    */}
                     <div class="custom-control custom-switch">
                       {/* <label>Inactive</label> */}
                       <input type="checkbox" checked={this.state.activeStatus} ref="status" class="custom-control-input" id="activeStatus" />
                        <label class="custom-control-label" for="activeStatus">Active</label>  
                    </div>
                </td>
                <td>
                      <span>
                        <button type="button" onClick={this.deleteItemType} className="btn btn-outline-danger btn-sm"><i className="trash icon"></i></button>
                        <button type="button" className="btn btn-outline-primary btn-sm" style={{ marginLeft: 5 }}><i className="pencil alternate icon"></i></button>
                      </span>
                </td>
            </tr>


        )
    }
}
export default ItemTypeRow;

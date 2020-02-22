/*
    SAHAN

 */

import React from "react";
import axio from "axios";

class OperatingSystemRow extends React.Component{

    constructor(props){
        super(props);
        this.deleteOperatingSystem = this.deleteOperatingSystem.bind(this);
        this.state={
            activeStatus: false,
        }
    }

    componentWillMount() {
        axio.get('http://localhost:5000/api/operating_system')
            .then(res => {
                this.setState({
                    OperatingSystem: res.data
                })
               // console.log(res.data)
            })
            .catch(res => {
                console.log(res.error)
            });
    }

    deleteOperatingSystem(){
        axio.delete('http://localhost:5000/api/operating_system/' + this.props.obj.id)
            .then(response => {
                console.log("operating_system Deleted" + response.data);
            })
            .catch(error => {
                console.log(error.response)
            });
    }

    render() {
        return(
            <tr className="positive">
                <td>{this.props.obj.id}</td>
                <td>{this.props.obj.operating_system}</td>
                <td>{this.props.obj.bit_version}</td>
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
                        <button type="button" onClick={this.deleteOperatingSystem} className="btn btn-outline-danger btn-sm"><i className="trash icon"></i></button>
                        <button type="button" className="btn btn-outline-primary btn-sm" style={{ marginLeft: 5 }}><i className="pencil alternate icon"></i></button>
                      </span>
                </td>
            </tr>


        )
    }
}
export default OperatingSystemRow;

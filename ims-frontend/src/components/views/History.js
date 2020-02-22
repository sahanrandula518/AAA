import React, { Component } from "react";
import backgroundImage from "../../assets/images/backgorund/loginImage.jpg";

import HistoryCreateForm from '../forms/HistoryCreateForm';
import '../../style.css';
// /, backgroundColor:  'rgb(239,240,241)'

export class History extends Component {
  render() {
    return (
      <div style={{marginLeft: '64px'}}>
      <div
        className='container-fluid'
      >
        <div
          className="card"
          style={{
            border: "none",
            padding: '30px',
            marginTop: '20px'
          }}
        >
          <div className="row  mt-3" >
            <div className="col">
              <h2 className="ui header">
                <i class="circular  inverted users  icon"></i>
                <div className="content">
                  Item History
                  <div className="sub header">
                    Manage History accounts and store
                  </div>
                </div>
              </h2>
            </div>
          </div>
          <div className="row  mt-3" style={{ paddingBottom: 10 }}>
            <div className="col tableContainer">
             

              <div
                class="modal fade"
                id="exampleModalCenter"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLongTitle">
                        Add a History
                      </h5>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <HistoryCreateForm/>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-danger"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" class="btn btn-success">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row  mt-3">
            <div className="col">
              <div className="ui buttons">
                <button className="btn btn-secondary">
                  <span>
                    <i class="file alternate icon"></i>
                  </span>
                  CSV
                </button>
                <button className="btn btn-secondary" style={{ marginLeft: 8 }}>
                  <span>
                    <i class="file alternate icon"></i>
                  </span>
                  Excel
                </button>
                <button className="btn btn-secondary" style={{ marginLeft: 8 }}>
                  <span>
                    <i class="print icon"></i>
                  </span>
                  Print
                </button>
              </div>
            </div>
            <div className="col">
              <div class="ui category search">
                <div class="ui icon input float-right">
                  <input
                    class="prompt"
                    type="text"
                    placeholder="Search user..."
                  />
                  <i class="search icon"></i>
                </div>
                <div class="results"></div>
              </div>
            </div>
          </div>

          <div className="row  mt-3">
            <div className="col">
              <table className="ui celled  table table-bordered ">
                <thead>
                  <tr>
                   
                    <th>Item Name</th>
                    <th>Item code</th>
                    <th>Reson</th>
                    <th>Discription</th>
                    <th>Conducted By</th>
                    <th>Date</th>
                   
                  </tr>
                </thead>
                <tbody>
                  <tr className="positive">
                   
                    <td>Name</td>
                    <td>None</td>
                    <td>None</td>
                    <td>None</td>
                    <td>None</td>
                    <td>None</td>
                   
                   
                  </tr>{" "}

                  <tr className="positive">
                   
                    <td>Name</td>
                    <td>None</td>
                    <td>None</td>
                    <td>None</td>
                    <td>None</td>
                    <td>None</td>
                    
                  
                  </tr>{" "}
                  <tr className="positive">
                    
                    <td>Name</td>
                    <td>None</td>
                    <td>None</td>
                    <td>None</td>
                    <td>None</td>
                    <td>None</td>
                    
                    
                  </tr>{" "}

                 
                  
 
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default History;

import React, { Component } from 'react';
import {connect} from 'react-redux';
import axio from 'axios';
import {fetchoperating_system} from '../../actions/operating_system';
import OperatingSystemCreateForm from '../forms/OperatingSystemCreateForm';
import '../../style.css';
import OperatingSystemRow from './OperatingSystemRow';

export class OperatingSystem extends Component {

  constructor(props){
    super(props);

    this.state = {
      operating_system : []
    }
  }

  componentDidMount(){
    axio.get('http://localhost:5000/api/operating_system')
    .then(res => {
      this.setState({
        operating_system: res.data
      })
    console.log(res.data)
    })
    .catch(res => {
      console.log(res.error)
    });
  }

  operating_system_row(){
    return this.state.operating_system.map(function (object, i){
      return <OperatingSystemRow obj={object} key={i}/>
    });
  }

  render() {
    return (
      <div
        style={{
         marginLeft: '64px'
        }}
      >
        <div className='container-fluid'>
        <div
          className='card'
          style={{
            padding: 30,
            border: 'none',
            marginTop: '25px'
          }}
        >
          <div className='row mt-3' >
            <div className='col'>
              <h2 className='ui header'>
                <i className='circular inverted windows  icon'></i>
                <div className='content'>
                 Operating System
                  <div className='sub header'>Manage operating system and store</div>
                </div>
              </h2>
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col tableContainer'>
              <button
                className='btn btn-success'
                data-toggle='modal'
                data-target='#exampleModalCenter'
              >
                <span style={{ paddingRight: 2 }}>
                  <i className='plus  icon'></i>
                </span>
                Add Os
              </button>
              <div
                className='modal fade'
                id='exampleModalCenter'
                tabindex='-1'
                role='dialog'
                aria-labelledby='exampleModalCenterTitle'
                aria-hidden='true'
              >
                <div className='modal-dialog modal-dialog-centered' role='document'>
                  <div className='modal-content'>
                    <div className='modal-header'>
                      <h5 className='modal-title' id='exampleModalLongTitle'>
                        Operating System Details
                      </h5>
                      <button
                        type='button'
                        className='close'
                        data-dismiss='modal'
                        aria-label='Close'
                      >
                        <span aria-hidden='true'>&times;</span>
                      </button>
                    </div>
                    <div className='modal-body'>
                      <OperatingSystemCreateForm/>
                    </div>
                    {/*
                    <div className='modal-footer'>
                      <button
                        type='button'
                        className='btn btn-danger'
                        data-dismiss='modal'
                      >
                        Close
                      </button>
                      <button type='button' className='btn btn-success'>
                        Save changes
                      </button>
                    </div>
          */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col'>
              <div className='ui buttons'>
                <button className='btn btn-secondary'>
                  <span>
                    <i className='file alternate icon'></i>
                  </span>
                  CSV
                </button>
                <button className='btn btn-secondary' style={{ marginLeft: 8 }}>
                  <span>
                    <i className='file alternate icon'></i>
                  </span>
                  Excel
                </button>
                <button className='btn btn-secondary' style={{ marginLeft: 8 }}>
                  <span>
                    <i className='print icon'></i>
                  </span>
                  Print
                </button>
              </div>
            </div>
            <div className='col'>
              <div className='ui category search'>
                <div className='ui icon input float-right'>
                  <input
                    className='prompt'
                    type='text'
                    placeholder='Search item model...'
                  />
                  <i className='search icon'></i>
                </div>
                <div className='results'></div>
              </div>
            </div>
          </div>

          <div className='row mt-3'>
            <div className='col'>
              <table className='ui celled  table table-bordered'>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Operating System</th>
                    <th>Bit version</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.operating_system_row()}
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div></div>
    );
  }
}

const mapStateToProps = state => {
  return {
    operating_system: state.operating_system
  }
}

export default connect(mapStateToProps,{fetchoperating_system}) (OperatingSystem);



/*
<tr className='positive'>
                    <td>Jimmy</td>
                    <td>Operating</td>
                    <td>version</td>
                    <td>
                      <span className='badge badge-success'>Active</span> /{' '}
                      <span className='badge badge-secondary'>Inactive</span>
                    </td>
                    <td>
                      <span>
                        <button
                          type='button'
                          className='btn btn-outline-danger btn-sm'
                        >
                          <i className='trash icon'></i>
                        </button>
                        <button
                          type='button'
                          className='btn btn-outline-primary btn-sm'
                          style={{ marginLeft: 5 }}
                        >
                          <i className='pencil alternate icon'></i>
                        </button>
                      </span>
                    </td>
                  </tr>

                  */
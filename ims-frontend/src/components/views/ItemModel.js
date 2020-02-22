import React, { Component } from 'react';
import {connect} from 'react-redux';
import axio from 'axios';
import {fetchitem_model} from '../../actions/item_model';
import ItemModelCreateForm from '../forms/ItemModelCreateForm';
import '../../style.css';
import ItemModelRow from './ItemModelRow';

export class ItemModel extends Component {

  constructor(props){
    super(props);

    this.state = {
      item_model : []
    }
  }

  componentDidMount(){
    axio.get('http://localhost:5000/api/item_model')
    .then(res => {
      this.setState({
        item_model: res.data
      })
    console.log(res.data)
    })
    .catch(res => {
      console.log(res.error)
    });
  }

  item_model_row(){
    return this.state.item_model.map(function (object, i){
      return <ItemModelRow obj={object} key={i}/>
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
                <i className='circular inverted hdd outline icon'></i>
                <div className='content'>
                  Item Model
                  <div className='sub header'>Manage item model and store</div>
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
                  <i className='wrench  icon'></i>
                </span>
                Add item model
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
                        Modal title
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
                      <ItemModelCreateForm/>
                      
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
                    <th>Item ID</th>
                    <th>Item model</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {this.item_model_row()}
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
    item_model: state.item_model
  }
}

export default connect(mapStateToProps,{fetchitem_model}) (ItemModel);

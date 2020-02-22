import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../../style.css';
import image1 from '../../assets/images/dashboard/1.png';
import image2 from '../../assets/images/dashboard/2.png';
import image3 from '../../assets/images/dashboard/3.png';
import image4 from '../../assets/images/dashboard/4.png';
import image5 from '../../assets/images/dashboard/5.png';
import image6 from '../../assets/images/dashboard/6.png';

const styling = {
  cardContainer: {
    position: 'absolute',
    top: '50%',
    left: '21%',
    width: '60%',
    padding: '20px',

    margin: ' -15% 0 0 -25%'
  },
  card: {
    cursor: 'pointer'
  },
  cardHeader: {
    textAlign: 'center'
  }
};

export class Dashboard extends Component {
  render() {
    return (
      <div className=' ui container ' style={styling.cardContainer}>
        <div className='ui three column grid'>
          <div className='column '>
            <div className='ui fluid card' style={styling.card}>
              <div className='image'>
                <img src={image1} />
              </div>
              <div className='content'>
                <Link to='/users' className='header' style={styling.cardHeader}>
                  User management
                </Link>
              </div>
            </div>
          </div>
          <div className='column animated  slower '>
            <div className='ui fluid card' style={styling.card}>
              <div className='image'>
                <img src={image2} />
              </div>
              <div className='content'>
                <Link to='/tools' className='header' style={styling.cardHeader}>
                  Item management
                </Link>
              </div>
            </div>
          </div>
          <div className='column animated  slower '>
            <div className='ui fluid card' style={styling.card}>
              <div className='image'>
                <img src={image3} />
              </div>
              <div className='content'>
                <a className='header' style={styling.cardHeader}>
                  History management
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='ui three column grid'>
          <div className='column animated  slower '>
            <div className='ui fluid card' style={styling.card}>
              <div className='image'>
                <img src={image4} />
              </div>
              <div className='content'>
                <a className='header' style={styling.cardHeader}>
                  Item Model management
                </a>
              </div>
            </div>
          </div>
          <div className='column animated  slower '>
            <div className='ui fluid card' style={styling.card}>
              <div className='image'>
                <img src={image5} />
              </div>
              <div className='content'>
                <a className='header' style={styling.cardHeader}>
                  Item Type management
                </a>
              </div>
            </div>
          </div>
          <div className='column animated  slower '>
            <div className='ui fluid card' style={styling.card}>
              <div className='image'>
                <img src={image6} />
              </div>
              <div className='content'>
                <a className='header' style={styling.cardHeader}>
                  Department management
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Row,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import backgroundImage from '../../assets/images/backgorund/loginImage.jpg';
import LoginForm from '../forms/LoginForm';
import SignUpForm from '../forms/SignUpForm';
const containerStyles = {
  backgroundColor: 'rgb(223,224,224)',
  maxHeight: 750,
  marginTop: 120,
  marginRight: 85,
  opacity: '0.9',
  minWidth: 420,
  filter: 'alpha(opacity=50)',
  border: '1px solid rgb(255,255,255)',
  borderRadius: ' 5px',
  padding: 20
};

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: '1'
    };

    this.toggleTab = this.toggleTab.bind(this);
  }
  onSubmit = formValues => {
    console.log('FormValues to the Action:', formValues);
  };
  toggleTab(tab) {
    this.setState({ activeTab: tab });
  }
  render() {
    return (
      <div
        style={{
          background: `url(${backgroundImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh'
        }}
      >
        <div className='card float-right' style={containerStyles}>
          <div className='card-header' style={{borderBottom: '1px solid rgba(0,0,0,0)'}}>
            <Nav tabs pills fill style={{borderBottom: 'none'}}>
              <NavItem>
                <NavLink
                  onClick={() => {
                    this.toggleTab('1');
                  }}
                  style={{cursor:'pointer'}}
                  active={this.state.activeTab === '1' ? true : false}
                >
                  Sign In
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  onClick={() => {
                    this.toggleTab('2');
                  }}
                  active={this.state.activeTab === '2' ? true : false} style={{cursor:'pointer'}}
                >
                  Sign Up
                </NavLink>
              </NavItem>
            </Nav>
          </div>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId='1'>
              <LoginForm onSubmit={this.onSubmit} />
            </TabPane>
            <TabPane tabId='2'>
              <SignUpForm />
            </TabPane>
          </TabContent>
        </div>
      </div>
    );
  }
}

export default Login;

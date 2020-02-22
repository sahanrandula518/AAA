import React from 'react';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import history from '../history';

const SideNavBar = () => {
  return (
    <SideNav
      style={{
        marginTop: 46,
        backgroundColor: 'rgb(52,58,64)',
        opacity: '0.9'
      }}
      onSelect={selected => {
        // console.log(selected);
        history.push(`/${selected}`);
      }}
    >
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected='home'>
        <NavItem eventKey=''>
          <NavIcon>
            <i className='fa fa-fw fa-home' style={{ fontSize: '1.75em' }} />
          </NavIcon>
          <NavText>Dashboard</NavText>
        </NavItem>
        <NavItem eventKey='users'>
          <NavIcon>
            <i className='fa fa-fw fa-users' style={{ fontSize: '1.75em' }} />
          </NavIcon>
          <NavText>User</NavText>
        </NavItem>
        <NavItem eventKey='tools'>
          <NavIcon>
            <i className='wrench icon' style={{ fontSize: '1.75em' }} />
          </NavIcon>
          <NavText>Item</NavText>
        </NavItem>
        <NavItem eventKey='History'>
          <NavIcon>
            <i className='wrench icon' style={{ fontSize: '1.75em' }} />
          </NavIcon>
          <NavText>History</NavText>
        </NavItem>

        <NavItem eventKey='settings'>
          <NavIcon>
            <i className='fa fa-fw fa-cogs' style={{ fontSize: '1.75em' }} />
          </NavIcon>
          <NavText>Settings</NavText>
          <NavItem eventKey='item-model'>
            <NavText>Item model</NavText>
          </NavItem>
          <NavItem eventKey='item-type'>
            <NavText>Item type</NavText>
          </NavItem>

          <NavItem eventKey='event-type'>
            <NavText>Event type</NavText>
          </NavItem>
          <NavItem eventKey='department'>
            <NavText>Department</NavText>
          </NavItem>
          <NavItem eventKey='operating-system'>
            <NavText>Operating system</NavText>
          </NavItem>
          <NavItem eventKey='vendor'>
            <NavText>Vendor</NavText>
          </NavItem>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
};

export default SideNavBar;

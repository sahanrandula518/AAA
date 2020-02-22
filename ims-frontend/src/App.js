import React, { Fragment } from "react";
import { Switch, Route, Router } from "react-router-dom";

import history from "./history";
import Header from "./components/Header";
import SideNav from "./components/SideNavBar";
import Dashboard from "./components/views/Dashboard";
import Users from "./components/views/Users";
import Item from "./components/views/Item";
import ItemModel from "./components/views/ItemModel";
import ItemType from "./components/views/ItemType";
import Login from "./components/views/Login";
import Department from "./components/views/Department";
import OperatingSystem from "./components/views/OperatingSystem";
import Vendors from "./components/views/Vendors";
import EventType from "./components/views/EventType";
import History from "./components/views/History";

const App = () => {
  return (
    <Router history={history}>
      <Header />
      <SideNav />
      <Fragment>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/users" exact component={Users} />
          <Route path="/tools" exact component={Item} />
          <Route path="/item-model" exact component={ItemModel} />
          <Route path="/item-type" exact component={ItemType} />
          <Route path="/login" exact component={Login} />
          <Route path="/department" exact component={Department} />
          <Route path="/operating-system" exact component={OperatingSystem} />
          <Route path="/vendor" exact component={Vendors} />
          <Route path="/event-type" exact component={EventType} />
          <Route path="/history" exact component={History} />
        </Switch>
      </Fragment>
    </Router>
  );
};
//use this to skip side nav bar from login
//https://stackoverflow.com/questions/51796344/how-to-skip-header-and-footer-for-certain-routes-in-reactjs
export default App;

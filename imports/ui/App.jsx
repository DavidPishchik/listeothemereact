import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Import UI
import NotFound from './pages/NotFound';
import Index from './pages/index/Index';
import Dashboard from './pages/dashboard/Dashboard';
import Single from './pages/single/Single';
import Profile from './pages/profile/Profile';

//App component - represents the whole app
const App = props => (
  <Router>
    {!props.loading ? <div className="App">
      <div>
      {/* <MainMenu /> */}
        <Switch>
          <Route exact name="index" path="/" component={Index} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/single" component={Single} />
          <Route exact path="/profile" component={Profile} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div> : ''}
  </Router>
);

// const getUserName = name => ({
//   string: name,
//   object: `${name.first} ${name.last}`,
// }[typeof name]);

export default createContainer(() => {
  // const loggingIn = Meteor.loggingIn();
  // const user = Meteor.user();
  // const userId = Meteor.userId();
  const loading = !Roles.subscription.ready();
  // const name = user && user.profile && user.profile.name && getUserName(user.profile.name);
  // const emailAddress = user && user.emails && user.emails[0].address;

  return {
    loading,
    // loggingIn,
    // authenticated: !loggingIn && !!userId,
    // name: name || emailAddress,
    // roles: !loading && Roles.getRolesForUser(userId),
  };
}, App);

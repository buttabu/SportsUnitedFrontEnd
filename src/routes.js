import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { isLoaded as isAuthLoaded } from 'redux/modules/auth';
import { load as loadAuth, logout } from 'actions/Auth/actions';
import { 
  App, 
  RequireLogin,
  Home, 
  NotFound,
  Register, 
  Account,
  // Athlete,
  // Team,
  // League,
  TeamProfile,
  LeagueProfile,
  Explore,
} from 'containers';

export default (store) => {
  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/" component={App}>
      {/* Home (main) route */}
      <IndexRoute component={Home} />

      {/* Routes */}

      <Route path="explore" component={Explore} />
      <Route path="register" component={Register} />
      <Route path="register/confirmation/:token" component={Register} />

      {/*
      <Route path="athletes" component={Athlete} />

      <Route path="leagues" component={League} />
      <Route path="leagues/profile/:leagueName" component={LeagueProfile} />
      
      <Route path="teams" component={Team} />
      <Route path="teams/profile/:teamProfile" component={TeamProfile} />
      */}

      <Route component={RequireLogin}>
        <Route path="account" component={Account} />
      </Route>

      {/* Catch all other routes */}
      
      <Route path="*" component={NotFound} status={404} />

    </Route>
  );
};












// OLD ROUTES.JS

// import React from 'react';
// import { IndexRoute, Route } from 'react-router';
// import { isLoaded as isAuthLoaded } from 'redux/modules/auth';
// import { load as loadAuth, logout } from 'actions/Auth/actions';
// import { 
//   App, 
//   Home, 
//   NotFound,
//   Register, 
//   Account,
//   Athlete,
//   Team,
//   League,
//   TeamProfile,
//   LeagueProfile,
//   RequireLogin
// } from 'containers';

// export default (store) => {
//   function checkAuth(logged, replace, cb) {
//     const { auth: { user } } = store.getState();
//     if (!!user === !logged) replace('/');
//     cb();
//   }

//   const requireLogin = (nextState, replace, cb) => {
//     if (!isAuthLoaded(store.getState())) {
//       store.dispatch(loadAuth()).then(() => checkAuth(true, replace, cb));
//     } else {
//       checkAuth(true, replace, cb);
//     }
//   };

//   const requireNotLogged = (nextState, replace, cb) => {
//     if (!isAuthLoaded(store.getState())) {
//       store.dispatch(loadAuth()).then(() => checkAuth(false, replace, cb));
//     } else {
//       checkAuth(false, replace, cb);
//     }
//   };

//   /**
//    * Please keep routes in alphabetical order
//    */
//   return (
//     <Route path="/" component={App}>
//       {/* Home (main) route */}
//       <IndexRoute component={Home} />

//       {/* Routes requiring login */}
//       <Route onEnter={requireLogin}>
//         <Route path="account" component={Account} />
//       </Route>
      

//       {/* Routes disallow login 
//       <Route onEnter={requireNotLogged}>
//         <Route path="register" component={Register} />
//       </Route>*/}
      

//       {/* Routes */}
//       <Route path="athletes" component={Athlete} />

//       <Route path="leagues" component={League} />
//       <Route path="leagues/profile/:leagueName" component={LeagueProfile} />
      
//       <Route path="teams" component={Team} />
//       <Route path="teams/profile/:teamProfile" component={TeamProfile} />
      

//       <Route path="register" component={Register} />
//       <Route path="register/confirmation/:token" component={Register} />
      
//       {/*<Route component={RequireLogin}>
//         <Route path="account" component={Account} />
//       </Route> */}

//       {/* Catch all other routes */}
      
//       <Route path="*" component={NotFound} status={404} />

//     </Route>
//   );
// };


import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SearchMain from './SearchMain';
import RideDetails from './RideDetails';

function SearchRoute(props) {
  const matchedPath = props.match.path;
  return (
    <Switch>
      <Route exact path={matchedPath} component={SearchMain} />
      <Route exact path={`${matchedPath}/:rideId`} component={RideDetails} />
    </Switch>
  );
}

export default SearchRoute;

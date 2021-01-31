import React from "react";
import { Route, Switch } from "react-router-dom";

import AboutPage from '../pages/About/About';
import ContributionsPage from '../pages/Contributions/Contributions';
import HomePage from '../pages/Home/Home';
import MorePage from '../pages/More/More';
import ProjectPage from '../pages/Projects/Projects';


export const Routes = () => {
  return (
    <Switch>
      <Route path="/about" component={AboutPage} />
      <Route path="/projects" component={ProjectPage} />
      <Route path="/contributions" component={ContributionsPage} />
      <Route path="/more" component={MorePage} />
      <Route path="/" component={HomePage} />
    </Switch>
  );
};

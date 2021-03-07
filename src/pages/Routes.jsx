import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NoMatch from 'pages/404/404';
import Home from 'pages/Home/Home';
import About from 'pages/About/About';

const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route component={Home} path='/' exact />
				<Route component={About} path='/about' exact />
				<Route component={NoMatch} path='*' />
			</Switch>
		</Router>
	);
};

Routes.displayName = 'pages/Routes';

export default Routes;
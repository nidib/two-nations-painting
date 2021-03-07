import React from 'react';
import { Link } from 'react-router-dom';
import GenericPage from 'components/GenericPage/GenericPage';

const NoMatch = () => {
	return (
		<GenericPage title='404 - Not found'>
			<Link to='/'>Home</Link>
			<h1>404. Not found</h1>
		</GenericPage>
	);
};

NoMatch.displayName = 'pages/404';

export default NoMatch;
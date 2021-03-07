import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const GenericPage = props => {
	const { children, title } = props;

	return (
		<Fragment>
			<Helmet>
				<title>{ title }</title>
			</Helmet>
			<div id='page'>
				{ children }
			</div>
		</Fragment>
	);
};

GenericPage.displayName = 'components/GenericPage';

GenericPage.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.arrayOf(PropTypes.node)
	]).isRequired,
	title: PropTypes.string.isRequired
};

export default GenericPage;
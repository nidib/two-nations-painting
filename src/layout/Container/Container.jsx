import React from 'react';
import PropTypes from 'prop-types';
import { container } from 'layout/Container/Container.module.css';

const Container = props => {
	const { children, customClasses } = props;
	const classNames = [container, ...customClasses].join(' ');

	return (
		<div className={classNames}>
			{ children }
		</div>
	);
};

Container.displayName = 'layout/Container';

Container.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.arrayOf(PropTypes.node)
	]).isRequired,
	customClasses: PropTypes.arrayOf(PropTypes.string)
};

Container.defaultProps = {
	customClasses: []
};

export default Container;
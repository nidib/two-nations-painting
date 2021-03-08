import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Buttons/_Button/Button';
import { emptyFunction } from 'utils/helpers/commonHelpers';
import { iconButton } from 'components/Buttons/IconButton/IconButton.module.css';

const IconButton = props => {
	const { customClasses, icon, ...genericButtonProps } = props;

	return (
		<Button
			customClasses={[iconButton, ...customClasses]}
			icon={icon}
			{...genericButtonProps}
		/>
	);
};

IconButton.displayName = 'components/Buttons/IconButton';

IconButton.propTypes = {
	customClasses: PropTypes.arrayOf(PropTypes.string),
	icon: PropTypes.node.isRequired,
	value: PropTypes.string,
	onClick: PropTypes.func
};

IconButton.defaultProps = {
	customClasses: [],
	value: '',
	onClick: emptyFunction
};

export default IconButton;
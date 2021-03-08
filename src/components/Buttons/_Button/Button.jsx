import React from 'react';
import PropTypes from 'prop-types';
import { emptyFunction } from 'utils/helpers/commonHelpers';

const Button = props => {
	const {
		customClasses,
		value,
		onClick,
		icon,
		...otherProps
	} = props;

	return (
		<button
			className={customClasses.join(' ')}
			type='button'
			onClick={onClick}
			{...otherProps}
		>
			{ icon }
			{ value }
		</button>
	);
};

Button.displayName = 'components/Buttons/Button';

Button.propTypes = {
	customClasses: PropTypes.arrayOf(PropTypes.string),
	icon: PropTypes.node,
	value: PropTypes.string.isRequired,
	onClick: PropTypes.func
};

Button.defaultProps = {
	customClasses: [],
	icon: null,
	onClick: emptyFunction
};

export default Button;
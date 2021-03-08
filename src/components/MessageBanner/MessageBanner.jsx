import React from 'react';
import PropTypes from 'prop-types';
import { banner, text } from 'components/MessageBanner/MessageBanner.module.css';
import Container from 'layout/Container/Container';

const MessageBanner = props => {
	const {
		bannerClass,
		bannerStyles,
		textClass,
		textStyles,
		text: bannerText
	} = props;

	return (
		<div className={bannerClass} style={bannerStyles}>
			<Container>
				<p className={textClass} style={textStyles}>{ bannerText }</p>
			</Container>
		</div>
	);
};

MessageBanner.displayName = 'components/MessageBanner';

MessageBanner.propTypes = {
	bannerClass: PropTypes.string,
	bannerStyles: PropTypes.objectOf(PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	])),
	textClass: PropTypes.string,
	textStyles: PropTypes.objectOf(PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	])),
	text: PropTypes.string.isRequired
};

MessageBanner.defaultProps = {
	bannerClass: banner,
	bannerStyles: {},
	textClass: text,
	textStyles: {}
};

export default MessageBanner;
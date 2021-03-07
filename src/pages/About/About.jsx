import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import GenericPage from 'components/GenericPage/GenericPage';

class About extends PureComponent {
	render() {
		return (
			<GenericPage title='About'>
				<Link to='/'>Home</Link>
				<h1>About</h1>
			</GenericPage>
		);
	}
}

About.displayName = 'pages/About';

export default About;
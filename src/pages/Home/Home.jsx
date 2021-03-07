import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import GenericPage from 'components/GenericPage/GenericPage';

class Home extends PureComponent {
	render() {
		return (
			<GenericPage title='Home'>
				<Link to='/about'>About</Link>
				<h1>Home</h1>
			</GenericPage>
		);
	}
}

Home.displayName = 'pages/Home';

export default Home;
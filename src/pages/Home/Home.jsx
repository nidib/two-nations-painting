import React, { PureComponent } from 'react';
import GenericPage from 'components/GenericPage/GenericPage';

class Home extends PureComponent {
	render() {
		return (
			<GenericPage title='Home'>
				<h1>Home</h1>
			</GenericPage>
		);
	}
}

Home.displayName = 'pages/Home';

export default Home;
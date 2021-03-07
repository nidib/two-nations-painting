import React, { PureComponent } from 'react';
import GenericPage from 'components/GenericPage/GenericPage';
import Header from 'components/_sections/Header/Header';
import Main from 'components/_sections/Main/Main';
import Footer from 'components/_sections/Footer/Footer';
import { HOME_PAGE_TITLE } from 'utils/constants/pageConstants';

class Home extends PureComponent {
	render() {
		return (
			<GenericPage title={HOME_PAGE_TITLE}>
				<Header />
				<Main />
				<Footer />
			</GenericPage>
		);
	}
}

Home.displayName = 'pages/Home';

export default Home;
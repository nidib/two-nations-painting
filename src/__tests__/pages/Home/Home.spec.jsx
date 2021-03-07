import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { expect } from 'chai';
import { mount } from 'enzyme';
import GenericPage from 'components/GenericPage/GenericPage';
import Header from 'components/_sections/Header/Header';
import Main from 'components/_sections/Main/Main';
import Footer from 'components/_sections/Footer/Footer';
import Home from 'pages/Home/Home';

describe('Home tests', () => {
	let wrapper;

	describe('render tests', () => {
		it('should render with no errors', () => {
			wrapper = mount(
				<Router>
					<Home />
				</Router>
			);

			expect(wrapper.find(GenericPage)).to.have.length(1);
			expect(wrapper.find(Header)).to.have.length(1);
			expect(wrapper.find(Main)).to.have.length(1);
			expect(wrapper.find(Footer)).to.have.length(1);

			wrapper.unmount();
		});
	});
});
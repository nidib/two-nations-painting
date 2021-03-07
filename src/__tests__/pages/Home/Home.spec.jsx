import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { expect } from 'chai';
import { mount } from 'enzyme';
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

			expect(wrapper.find('h1')).to.have.length(1);

			wrapper.unmount();
		});
	});
});
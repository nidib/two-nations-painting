import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { expect } from 'chai';
import { mount } from 'enzyme';
import About from 'pages/About/About';

describe('About tests', () => {
	let wrapper;

	describe('render tests', () => {
		it('should render with no errors', () => {
			wrapper = mount(
				<Router>
					<About />
				</Router>
			);

			expect(wrapper.find('h1')).to.have.length(1);

			wrapper.unmount();
		});
	});
});
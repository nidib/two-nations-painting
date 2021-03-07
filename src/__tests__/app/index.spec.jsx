import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import App from 'app';
import Home from 'pages/Home/Home';

describe('App tests', () => {
	let wrapper;

	describe('render tests', () => {
		it('should render with no errors', () => {
			wrapper = mount(<App />);

			expect(wrapper.find(Home)).to.have.length(1);

			wrapper.unmount();
		});
	});
});
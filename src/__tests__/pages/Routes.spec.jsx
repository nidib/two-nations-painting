import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Routes from 'pages/Routes';

describe('Routes tests', () => {
	let wrapper;

	describe('render tests', () => {
		it('should render with no errors', () => {
			wrapper = mount(<Routes />);

			expect(wrapper).to.have.length(1);

			wrapper.unmount();
		});
	});
});
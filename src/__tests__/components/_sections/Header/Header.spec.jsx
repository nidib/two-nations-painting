import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Header from 'components/_sections/Header/Header';
import IconButton from 'components/Buttons/IconButton/IconButton';

describe('Header tests', () => {
	let wrapper;

	describe('render tests', () => {
		it('should render with no errors', () => {
			wrapper = mount(<Header />);

			expect(wrapper.find(Header)).to.have.length(1);
			expect(wrapper.find(IconButton)).to.have.length(1);
			expect(wrapper.find(IconButton).props().customClasses).to.deep.equal(['headerButton']);
			expect(wrapper.find('nav').props().style).to.deep.equal({ maxHeight: null });

			wrapper.unmount();
		});
	});

	describe('state tests', () => {
		it('should update state on click', () => {
			wrapper = mount(<Header />);

			wrapper.find(IconButton).simulate('click');

			expect(wrapper.find(IconButton).props().customClasses).to.deep.equal(['headerButton', 'headerButtonFlippedIcon']);
			expect(wrapper.find('nav').props().style).to.deep.equal({ maxHeight: 240 });

			wrapper.unmount();
		});
	});
});
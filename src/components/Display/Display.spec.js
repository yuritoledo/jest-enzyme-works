import React from 'react'
import { shallow } from 'enzyme'
import Display from './Display'

describe('Display', () => {
	let wrapper = shallow(<Display displayValue={''} />)

	beforeEach(() => {
		wrapper = shallow(<Display displayValue={''} />)
	})

	test('should render correctly', () => {
		expect(wrapper).toMatchSnapshot()
	})


	test('should render a div', () => {
		expect(wrapper.find('div')).toBeTruthy()
	})

	test('should render the value of displayValueProp', () => {
		wrapper.setProps({ displayValue: 'test' })
		expect(wrapper.text()).toEqual('test')
	})



})

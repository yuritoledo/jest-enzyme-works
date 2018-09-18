import React from 'react'
import { shallow } from 'enzyme'
import App from './App'
import Calculator from '../Calculator/Calculator'

describe('App', () => {
	let wrapper = shallow(<App />)
	beforeEach(() => {
		wrapper = shallow(<App />)
	})

	test('should render correctly', () => {
		expect(wrapper).toMatchSnapshot()
	})


	test('should render a div', () => {
		expect(wrapper.find('div')).toHaveLength(1)
	})

	test('should contains a Calculator Component', () => {
		expect(wrapper.containsMatchingElement(<Calculator />)).toEqual(true)
	})



})
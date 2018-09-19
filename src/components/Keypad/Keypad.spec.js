import React from 'react'
import { shallow, mount } from 'enzyme'
import Keypad from './Keypad'

const Mockz = () => <h1>Mock</h1>

describe('Keypad', () => {
	let wrapper = shallow(<Mockz />)
	beforeEach(() => {
		wrapper = shallow(
			<Keypad
				callOperator={jest.fn()}
				setOperator={jest.fn()}
				updateDisplay={jest.fn()}
				numbers={[]}
				operators={[]}
			/>
		)
	})

	test('should render 4 div', () => {
		expect(wrapper.find('div')).toHaveLength(4)
	})

	test('should render an instance of the Key component for each index of numbers, operators, and the submit Key', () => {
		const numbers = ['0', '1']
		const operators = ['+', '-']
		const submit = 1
		const keyTotal = numbers.length + operators.length + submit
		wrapper.setProps({ numbers, operators })
		expect(wrapper.find('Key')).toHaveLength(keyTotal)
	})
})

describe('mounted Keypad', () => {
	let wrapper = shallow(<Mockz />)
	beforeEach(() => {
		wrapper = mount(
			<Keypad
				callOperator={jest.fn()}
				setOperator={jest.fn()}
				updateDisplay={jest.fn()}
				numbers={[]}
				operators={[]}
			/>
		)
	})

	test('should render correctly', () => {
		expect(wrapper).toMatchSnapshot()
	})


	test('should render the value of numbers', () => {
		wrapper.setProps({ numbers: ['1', '2', '3'] })
		expect(wrapper.find('.numbers-container').text()).toEqual('123')
	})

	test('should render value of operators', () => {
		wrapper.setProps({ operators: ['+', '-', '*', '/'] })
		expect(wrapper.find('.operators-container').text()).toEqual('+-*/')
	})
})
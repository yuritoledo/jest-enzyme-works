import React from 'react'
import { shallow } from 'enzyme'
import Calculator from './Calculator'
import Display from '../Display/Display'
import Keypad from '../Keypad/Keypad'

describe('Calculator', () => {
	let wrapper = shallow(<Calculator />)

	beforeEach(() => {
		wrapper = shallow(<Calculator />)
	})

	test('should render correctly', () => {
		expect(wrapper).toMatchSnapshot()
	})

	test('should render a Calculator', () => {
		expect(wrapper.find('div')).toHaveLength(1)
	})

	test('should render the <Display />', () => {
		expect(
			wrapper.containsAllMatchingElements([
				<Display key='asd'
					displayValue={wrapper.instance().state.displayValue}
				/>,
				<Keypad
					callOperator={wrapper.instance().callOperator}
					numbers={wrapper.instance().state.numbers}
					operators={wrapper.instance().state.operators}
					setOperator={wrapper.instance().setOperator}
					updateDisplay={wrapper.instance().updateDisplay}
					key='dsd'
				/>
			])
		).toBeTruthy()
	})
})

describe('update Display', () => {
	let wrapper = shallow(<Calculator />)
	beforeEach(() => {
		wrapper = shallow(<Calculator />)
	})

	test('should update displayValue', () => {
		wrapper.instance().updateDisplay('5')
		expect(wrapper.state('displayValue')).toEqual('5')
	})
	test('should concatenate displaValues', () => {
		wrapper.instance().updateDisplay('5')
		wrapper.instance().updateDisplay('0')
		expect(wrapper.state('displayValue')).toEqual('50')
	})

	test('removes leading "0" from displayValue', () => {
		wrapper.instance().updateDisplay('0')
		expect(wrapper.state('displayValue')).toEqual('0')
		wrapper.instance().updateDisplay('5')
		expect(wrapper.state('displayValue')).toEqual('5')
	})

	test('should prevent multiple leading 0 in the display', () => {
		wrapper.instance().updateDisplay('0')
		wrapper.instance().updateDisplay('0')
		expect(wrapper.state('displayValue')).toEqual('0')
	})

	test('should remove last char of display', () => {
		wrapper.instance().updateDisplay('5')
		wrapper.instance().updateDisplay('0')
		wrapper.instance().updateDisplay('ce')
		expect(wrapper.state('displayValue')).toEqual('5')
	})

	test('prevents multiple instances of "." in displayValue', () => {
		wrapper.instance().updateDisplay('.')
		wrapper.instance().updateDisplay('.')
		expect(wrapper.state('displayValue')).toEqual('.')
	})

	test('should will set displayValue to "0" if displayValue is equal to an empty string', () => {
		wrapper.instance().updateDisplay('ce')
		expect(wrapper.state('displayValue')).toEqual('0')
	})

})

describe('set Operator', () => {
	let wrapper = shallow(<div />)
	beforeEach(() => {
		wrapper = shallow(<Calculator />)
	})

	test('should update the value of operator', () => {
		wrapper.instance().setOperator('+')
		expect(wrapper.state('selectedOperator')).toEqual('+')
		wrapper.instance().setOperator('/')
		expect(wrapper.state('selectedOperator')).toEqual('/')
	})

	test('should updates the value of storedValue to the value of displayValue', () => {
		wrapper.setState({ displayValue: '5' })
		wrapper.instance().setOperator('+')
		expect(wrapper.state('storedValue')).toEqual('5')
	})

	test('updates the value of displayValue to "0"', () => {
		wrapper.setState({ displayValue: '5' })
		wrapper.instance().setOperator('+')
		expect(wrapper.state('displayValue')).toEqual('0')
	})

	test('selectedOperator is not an empty string, does not update storedValue', () => {
		wrapper.setState({ displayValue: '5' })
		wrapper.instance().setOperator('+')
		expect(wrapper.state('storedValue')).toEqual('5')
		wrapper.instance().setOperator('-')
		expect(wrapper.state('storedValue')).toEqual('5')
	})
})

describe('call operator', () => {
	let wrapper = shallow(<div />)
	beforeEach(() => {
		wrapper = shallow(<Calculator />)
	})

	test('should update displayValue to the sum of storedValue and displayValue', () => {
		wrapper.setState({ displayValue: '3' })
		wrapper.setState({ storedValue: '3' })
		wrapper.setState({ selectedOperator: '+' })
		wrapper.instance().callOperator()
		expect(wrapper.state('displayValue')).toEqual('6')
	})

	test('updates displayValue to the difference of storedValue and displayValue', () => {
		wrapper.setState({ displayValue: '2' })
		wrapper.setState({ storedValue: '3' })
		wrapper.setState({ selectedOperator: '-' })
		wrapper.instance().callOperator()
		expect(wrapper.state('displayValue')).toEqual('1')
	})

	test('updates displayValue to the product of storedValue and displayValue', () => {
		wrapper.setState({ displayValue: '2' })
		wrapper.setState({ storedValue: '3' })
		wrapper.setState({ selectedOperator: 'x' })
		wrapper.instance().callOperator()
		expect(wrapper.state('displayValue')).toEqual('6')
	})

	test('updates displayValue to the quotient of storedValue and displayValue', () => {
		wrapper.setState({ displayValue: '2' })
		wrapper.setState({ storedValue: '3' })
		wrapper.setState({ selectedOperator: '/' })
		wrapper.instance().callOperator()
		expect(wrapper.state('displayValue')).toEqual('1.5')
	})

	test('should updates displayValue to "0" if operation results in "NaN"', () => {
		wrapper.setState({ displayValue: '3' })
		wrapper.setState({ storedValue: 'string' })
		wrapper.setState({ selectedOperator: '/' })
		wrapper.instance().callOperator()
		expect(wrapper.state('displayValue')).toEqual('0')
	})

	test('should updates displayValue to "0" if operation results is Infinity', () => {
		wrapper.setState({ displayValue: '3' })
		wrapper.setState({ storedValue: '0' })
		wrapper.setState({ selectedOperator: '/' })
		wrapper.instance().callOperator()
		expect(wrapper.state('displayValue')).toEqual('0')
	})

	test('should updates displayValue to "0" if selectedOperator does not match cases', () => {
		wrapper.setState({ displayValue: '3' })
		wrapper.setState({ storedValue: '0' })
		wrapper.setState({ selectedOperator: 'string' })
		wrapper.instance().callOperator()
		expect(wrapper.state('displayValue')).toEqual('0')
	})

	test('should updates displayValue to "0" if called with no value for storedValue or selectedOperator', () => {
		wrapper.setState({ storedValue: '' })
		wrapper.setState({ displayValue: '10' })
		wrapper.setState({ selectedOperator: '' })
		wrapper.instance().callOperator()
		expect(wrapper.state('displayValue')).toEqual('0')
	})

})

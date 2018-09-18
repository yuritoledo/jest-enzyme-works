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

	test('should reder a Calculator', () => {
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

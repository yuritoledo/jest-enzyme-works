import React from 'react'
import { shallow } from 'enzyme'
import Keypad from './Keypad'

describe('Keypad', () => {
	let wrapper = shallow(<Keypad />)
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

	test('should render a div', () => {
		expect(wrapper.find('div')).toHaveLength(1)
	})



})

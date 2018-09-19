import React from 'react'
import { shallow } from 'enzyme'
import Key from './Key'

describe('Key Component', () => {
	let wrapper = shallow(<Key keyAction={jest.fn()} keyType={''} keyValue={''} />)
	beforeEach(() => {
		wrapper = shallow(
			<Key
				keyAction={jest.fn()}
				keyType={''}
				keyValue={''}
			/>
		)
	})

	test('should render correctly', () => {
		expect(wrapper).toMatchSnapshot()
	})

	test('should render a <div />', () => {
		expect(wrapper.find('div')).toHaveLength(1)
	})

	test('should render the value of keyvalue	', () => {
		wrapper.setProps({ keyValue: 'test' })
		expect(wrapper.text()).toEqual('test')
	})




})
import React, { Component } from 'react'
import './Calculator.css'
import Display from '../Display/Display'
import Keypad from '../Keypad/Keypad'


class Calculator extends Component {
	state = {
		displayValue: '0',
		numbers: [],
		operators: [],
		selectedOperator: '',
		storedValue: ''
	}

	callOperator() {
		console.log('call operation')
	}

	setOperator() {
		console.log('set operation')
	}

	updateDisplay() {
		console.log('update display')
	}

	render() {
		const { displayValue, numbers, operators } = this.state
		return (
			<div className="calculator-container">
				<Display displayValue={displayValue} />
				<Keypad
					callOperator={this.callOperator}
					setOperator={this.setOperator}
					updateDisplay={this.updateDisplay}
					numbers={numbers}
					operators={operators}
				/>
			</div>
		)
	}
}

export default Calculator
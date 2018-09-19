import React from 'react'
import PropTypes from 'prop-types'
import './Keypad.css'
import Key from '../Key/Key'

const Keypad = ({ callOperator, numbers, operators, setOperator, updateDisplay }) => {
	return (
		<div className="keypad-container">
			<div className="numbers-container">
				{numbers.map(number => (
					<Key
						key={number}
						keyAction={updateDisplay}
						keyType="number-key"
						keyValue={number}
					/>
				))}
			</div>
			<div className="operators-container">
				{operators.map(operator => (
					<Key
						key={operator}
						keyAction={setOperator}
						keyType="operator-key"
						keyValue={operator}
					/>
				))}
			</div>
			<div className="submit-container">
				<Key
					keyAction={callOperator}
					keyType="submit-key"
					keyValue="="
				/>
			</div>
		</div>
	)
}

Keypad.propTypes = {
	callOperator: PropTypes.func.isRequired,
	numbers: PropTypes.array.isRequired,
	operators: PropTypes.array.isRequired,
	setOperator: PropTypes.func.isRequired,
	updateDisplay: PropTypes.func.isRequired
}

export default Keypad
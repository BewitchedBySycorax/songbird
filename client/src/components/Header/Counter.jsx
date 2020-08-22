import React from 'react'
import PropTypes from 'propTypes'
import './Counter.sass'

const Counter = ({ score }) => <div className='counter'> Score: { score } </div>

Counter.propTypes = { score: PropTypes.number }
Counter.defaultProps = { score: 0 }

export default Counter

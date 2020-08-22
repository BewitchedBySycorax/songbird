import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Counter from './Counter'
import StageIndicator from './StageIndicator'
import './Header.sass'

class Header extends Component {
  static propTypes = {
    currentStageInfo: PropTypes.array.isRequired,
    currentStageNumber: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired
  }

  render() {
    const { currentStageInfo, currentStageNumber, score } = this.props

    return (
      <div className='header'>
        <div className='title-score'>
          <h1>
            Song<span>bird</span>
          </h1>
          <Counter score={ score }/>
        </div>
        <StageIndicator
          currentStageInfo={ currentStageInfo }
          currentStageNumber={ currentStageNumber }
        />
      </div>
    )
  }
}

export default Header

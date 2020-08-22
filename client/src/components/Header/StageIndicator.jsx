import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
import './StageIndicator.sass'

class Navigation extends Component {
  static propTypes = {
    currentStageInfo: PropTypes.array.isRequired,
    currentStageNumber: PropTypes.number.isRequired
  }

  render() {
    const { currentStageInfo, currentStageNumber } = this.props
      
    const stageItems = currentStageInfo.map((stage, i) =>
      <div
        className={ `stageIndicator-item ${currentStageNumber === i + 1 ? 'currentStage' : ''}` }
        key={ currentStageInfo.length - i }
        to={ `/${stage.endpoint}/` }
      >
        {i + 1}. { stage.title }
      </div>
    )

    return <div className='stageIndicator'> { stageItems } </div>
  }
}

export default Navigation

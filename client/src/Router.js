import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import Question from './components/Question'
import AnswerOptions from './components/AnswerOptions'
import Description from './components/Description'

export default class Router extends Component {
  static propTypes = {
    currentStageNumber: PropTypes.number.isRequired
  }

  render() {
    const { currentStageNumber } = this.props
    let currentStagePath = null
    
    switch (currentStageNumber) {
      case 1:
        currentStagePath = '/01_warm_up/'
        break
      case 2:
        currentStagePath = '/02_passerines/'
        break
      case 3:
        currentStagePath = '/03_forest_birds/'
        break
      case 4:
        currentStagePath = '/04_songbirds/'
        break
      case 5:
        currentStagePath = '/05_raptors/'
        break
      case 6:
        currentStagePath = '/06_marine_birds/'
        break
      default:
        break
    }
    
    return (
      <Switch>
        <Route
          exact path={currentStagePath} 
          render={props =>
            <div className='centralContent'>
              <Question />
              <div className='question-answerOptions'>
                <AnswerOptions />
                <Description />
              </div>
            </div>
          }
        />

        <Redirect to={currentStagePath} />
      </Switch>
    )
  }
}

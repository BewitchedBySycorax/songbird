import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import Question from './components/Question'
import AnswerOptions from './components/AnswerOptions'
import Description from './components/Description'

export default class Router extends Component {
  static propTypes = {
    birdsData: PropTypes.array.isRequired,
    currentStageNumber: PropTypes.number.isRequired
  }

  render() {
    const { birdsData, currentStageNumber } = this.props
    let currentBirdsInfo = null
    let currentStagePath = null

    console.log('Router', 17, birdsData)
    
    switch (currentStageNumber) {
      case 1:
        currentStagePath = '/01_warm_up/'
        currentBirdsInfo = birdsData[0]
        break
      case 2:
        currentStagePath = '/02_passerines/'
        currentBirdsInfo = birdsData[1]
        break
      case 3:
        currentStagePath = '/03_forest_birds/'
        currentBirdsInfo = birdsData[2]
        break
      case 4:
        currentStagePath = '/04_songbirds/'
        currentBirdsInfo = birdsData[3]
        break
      case 5:
        currentStagePath = '/05_raptors/'
        currentBirdsInfo = birdsData[4]
        break
      case 6:
        currentStagePath = '/06_marine_birds/'
        currentBirdsInfo = birdsData[5]
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
              <Question 
                currentBirdsInfo={ currentBirdsInfo }
              />
              <div className='question-answerOptions'>
                <AnswerOptions
                  currentBirdsInfo={ currentBirdsInfo }
                />
                <Description
                  currentBirdsInfo={ currentBirdsInfo }
                />
              </div>
            </div>
          }
        />

        <Redirect to={currentStagePath} />
      </Switch>
    )
  }
}

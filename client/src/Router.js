import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import AnswerOptions from './components/AnswerOptions'
import Question from './components/Question/Question'

export default class Router extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/01_warm_up/' components={{ question: Question, answerOptions: AnswerOptions }} />
        <Route exact path='/02_passerines/' components={{ question: Question, answerOptions: AnswerOptions }} />
        <Route exact path='/03_forest_birds/' components={{ question: Question, answerOptions: AnswerOptions }} />
        <Route exact path='/04_songbirds/' components={{ question: Question, answerOptions: AnswerOptions }} />
        <Route exact path='/05_raptors/' components={{ question: Question, answerOptions: AnswerOptions }} />
        <Route exact path='/06_marine_birds/' components={{ question: Question, answerOptions: AnswerOptions }} />

        <Redirect to='/01_warm_up/' />
      </Switch>
    )
  }
}

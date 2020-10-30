import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Question.sass'

class Question extends Component {
  static propTypes = {
    currentBirdsInfo: PropTypes.array.isRequired
  }

  state = {
    answerIsRight: false,
    // playerAnswer: null,
    // playerAnswer: null
    rightAnswer: this.props.currentBirdsInfo[Math.floor(Math.random() * this.props.currentBirdsInfo.length)]
  }

  render() {
    const { currentBirdsInfo }  = this.props

    let answerIsRightSrc = 'https://www.tokkoro.com/picsup/2877723-nature-animals-birds___animal-wallpapers.jpg'

    console.log('Question', 21, currentBirdsInfo)
    console.log('Question-answer', 22, this.state.rightAnswer)

    // if (playerAnswer === rightAnswer) {
    //   this.setState({ answerIsRight: true })
    //   answerIsRightSrc = currentBirdsInfo[1].image
    // }

    return (
      <div className='question'>
        <div
          className='birdPicture'
          alt='BirdPicture'
          title='birdPicture'
        >
          <img src={answerIsRightSrc} />
        </div>
        <div className='player'>
          <audio controls='controls'>
            <source src='files/track1.mp3' />
          </audio>
        </div>
      </div>
    )
  }
}

export default Question

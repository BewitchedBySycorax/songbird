import React, { Component } from 'react'
import './AnswerOptions.sass'

class AnswerOptions extends Component {
  render() {
    console.log(AnswerOptions, 6, this.props)

    return (
      <div className='answerOptions'>
        answerOptions
      </div>
    )
  }
}

export default AnswerOptions

// render() {
//   return (
//     // const { currentStageInfo, currentStageNumber } = this.props
    
//     const questions = currentStageInfo.map((stage, i) =>
//       <div
//         className={ `stageIndicator-item ${currentStageNumber === i + 1 ? 'currentStage' : ''}` }
//         key={ currentStageInfo.length - i }
//         to={ `/${stage.endpoint}/` }
//       >
//         {i + 1}. { stage.title }
//       </div>
//     )

//     return <div className='question'> { questions } </div>
//   )
// }

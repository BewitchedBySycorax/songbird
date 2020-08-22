import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import birdsData from '../../birdsData'
import Header from './components/Header/Header'
import Router from './Router'
import './App.sass'

class App extends Component {
  state = {
    currentStageInfo: [
      { endpoint: '01_warm_up', title: 'Разминка' },
      { endpoint: '02_passerines', title: 'Воробьиные' },
      { endpoint: '03_forest_birds', title: 'Лесные птицы' },
      { endpoint: '04_songbirds', title: 'Певчие птицы' },
      { endpoint: '05_raptors', title: 'Хищные птицы' },
      { endpoint: '06_marine_birds', title: 'Морские птицы' }
    ],
    currentStageNumber: 1
  }

  // pass currentStage as props to header/headerNav

  render() {
    const { currentStageInfo, currentStageNumber } = this.state

    console.log(birdsData)

    return (
      <div className='wrapper'>
        <BrowserRouter>
          <Header
            currentStageInfo={ currentStageInfo }
            currentStageNumber={ currentStageNumber }
            score={ 0 }
          />
          <Router currentStageNumber={ currentStageNumber } />
        </BrowserRouter>
        <button
          className='nextLevel-btn'
        >
          Next Level
        </button>
      </div>
    )
  }
}

export default App

import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux'
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
    const { birdsData } = this.props
    const { currentStageInfo, currentStageNumber } = this.state

    console.log('App', 26, birdsData)

    return (
      <div className='wrapper'>
        <BrowserRouter>
          <Header
            currentStageInfo={ currentStageInfo }
            currentStageNumber={ currentStageNumber }
            score={ 0 }
          />
          <Router 
            currentStageNumber={ currentStageNumber }
            birdsData={ birdsData }
          />
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

const mapStateToProps = state => {
  return {
    // ! loading: state.userInfo.loading,
    // ! error: state.userInfo.error

    birds: state.birdsData.birds

    // ? currentUser: state.userInfo.currentUser,

    // isAuthorized: state.session.isAuthorized,
    
    // hasFullName: !!(state.userInfo.currentUser.first_name || state.userInfo.currentUser.last_name),
    // askedToIntroduce: state.userInfo.currentUser.asked_to_introduce,
    // modalAddAlbumOpened: state.modal.addAlbumOpened,
    // modalChooseAlbumOpened: state.modal.chooseAlbumOpened
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

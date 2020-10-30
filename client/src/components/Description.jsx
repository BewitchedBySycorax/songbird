import React, { Component } from 'react'
import './Description.sass'

class Description extends Component {
  render() {
    console.log(Description, 6, this.props)

    return (
      <div className='description'>
        Description
      </div>
    )
  }
}

export default Description

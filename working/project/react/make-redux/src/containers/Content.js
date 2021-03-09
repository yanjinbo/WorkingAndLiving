import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ThemeSwitch from '../components/ThemeSwitch'
import { connect } from 'react-redux'

class Content extends Component {
  static propTypes = {
    themeColor: PropTypes.string
  }

  render () {
    return (
      <div>
        <p style={{ color: this.props.themeColor }}>React.js 小书内容</p>
        <ThemeSwitch {...this.props} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    themeColor: state.themeColor
  }
}

const mapDispatchToProps = dispatch => ({
    onSwitchColor: color => {
        dispatch({
            type: 'CHANGE_COLOR',
            themeColor: color
        })
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Content)
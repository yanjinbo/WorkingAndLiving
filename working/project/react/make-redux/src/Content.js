import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ThemeSwitch from './ThemeSwitch'
import { connect } from './react-redux'
class Content extends Component {
    // static contextTypes = {
    //     store: PropTypes.object
    //   }
    // componentWillMount() {
    //     console.log(this.context)
    //     const { store } = this.context
    //     this._updateThemeColor()
    //     store.subscribe(() => this._updateThemeColor())
    // }
    // _updateThemeColor() {
    //     const { store } = this.context
    //     console.log(store)
    //     const state = store.getState()
    //     this.setState({ themeColor: state.themeColor })
    // }
    // render() {
    //     return (
    //         <div>
    //             <p>React.js 小书内容</p>
    //             <ThemeSwitch />
    //         </div>
    //     )
    // }
    static propTypes = {
        themeColor: PropTypes.string
    }

    render() { 
        let tt = {...this.props}
        console.log(tt)
        return (  
            <div>
                <p style={{ color: this.props.themeColor }}>React.js 小书内容</p>
                <ThemeSwitch {...this.props}/>
            </div>
        )
    } 
}
const mapStateToProps = (state) => {
    return {
        themeColor: state.themeColor
    }
}
Content = connect(mapStateToProps)(Content)
export default Content
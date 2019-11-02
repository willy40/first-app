import React, {Component} from 'react'
import { connect } from 'react-redux'

class Counter extends Component{
    render(){
        return(
            <span>Count: {this.props.count}</span>
        )
    }
}

const mapStateToProps = state => ({
    count: state.movies.list.length
})

export default connect(mapStateToProps)(Counter)
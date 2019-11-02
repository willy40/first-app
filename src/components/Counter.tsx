import React, {Component} from 'react'
import { connect } from 'react-redux'

interface ICounterProps{
    count: number
}

class Counter extends Component<ICounterProps>{
    render(){
        return(
            <span>Count: {this.props.count}</span>
        )
    }
}

const mapStateToProps = (state:any) => ({
    count: state.movies.list.length
})

export default connect(mapStateToProps)(Counter)
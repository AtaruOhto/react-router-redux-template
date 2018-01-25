import React from 'react'
// import { push } from 'react-router-redux'
// import { bindActionCreators } from 'redux'
import {connect, Dispatch} from 'react-redux'
import actions from 'actions/index'

import {BlueButton, RedButton, GreenButton} from 'styledComponents/Btn'
import { History } from 'history';

interface IHomeProps {
    count: number
    dispatch: Dispatch<Function>
    history: History
}


interface IHomeState {
    count: number
}

class Home extends React.Component<IHomeProps, IHomeState> {

    constructor(props: IHomeProps) {
        super(props);
    }

    private increment = () => {
      this.props.dispatch(actions.counter.increment())
    };

    private incrementAsync = () => {
        this.props.dispatch(actions.counter.incrementAsync())
    };

    private decrement = () => {
        this.props.dispatch(actions.counter.decrement())
    };

    private decrementAsync = () => {
        this.props.dispatch(actions.counter.decrementAsync())
    };

    private goAboutPage= () => {
        this.props.history.push('/go_page')
    };


    render() {
        return (
            <div>
                <h2>Count: {this.props.count}</h2>
                <div>
                    <BlueButton onClick={() => { this.increment() }}>Increment</BlueButton>
                    <BlueButton onClick={() => { this.incrementAsync()}}>IncrementAsync</BlueButton>
                </div>
                <div>
                    <RedButton onClick={() => {this.decrement()}}>Decrement</RedButton>
                    <RedButton onClick={() => {this.decrementAsync()}}>DecrementAsync</RedButton>
                </div>
                <div>
                    <GreenButton onClick={() => {this.goAboutPage()}}>Go About Page</GreenButton>
                </div>
            </div>
        )

    }
}

const mapStateToProps = (state: any) => {
    return {count: state.counter};
};

const mapDispatchToProps = (dispatch: any) =>{
    return {
        dispatch: dispatch
    }


    // return bindActionCreators({
    //     increment: actions.counter.increment,
    //     decrement: actions.counter.decrement,
    //     incrementAsync: actions.counter.incrementAsync,
    //     decrementAsync: actions.counter.decrementAsync,
    //     changePage: () => push('/about-us')
    // }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

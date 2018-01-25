import React from 'react'
import {connect, Dispatch} from 'react-redux'
import {BlueButton, RedButton, GreenButton} from 'styledComponents/Btn'
import { History } from 'history';
import actions from 'actions/index'
import {goAboutPage} from "router/couterRouter";


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
        goAboutPage(this.props.history);
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
    return {
        count: state.counter,

    };
};

const mapDispatchToProps = (dispatch: any) =>{
    return { dispatch: dispatch }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

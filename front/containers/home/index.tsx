import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import actions from 'actions/index'

import {RedButton, GreenButton, BlueButton} from 'styledComponents/Btn'

class Home extends React.Component {
    props;

    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div>
                <p>Count: {this.props.count}</p>
                <p>
                    <BlueButton onClick={this.props.increment} disabled={this.props.isIncrementing}>Increment</BlueButton>
                    <BlueButton onClick={this.props.incrementAsync} disabled={this.props.isIncrementing}>Increment Async</BlueButton>
                </p>
                <p>
                    <RedButton onClick={this.props.decrement} disabled={this.props.isDecrementing}>Decrement</RedButton>
                    <RedButton onClick={this.props.decrementAsync} disabled={this.props.isDecrementing}>Decrement Async</RedButton>
                </p>
                <p><GreenButton onClick={() => this.props.changePage()}>Go to about page via redux</GreenButton></p>
            </div>
        )

    }
}

const mapStateToProps = state => ({
    count: state.counter
});

const mapDispatchToProps = dispatch => bindActionCreators({
  increment: actions.counter.increment,
  decrement: actions.counter.decrement,
  incrementAsync: actions.counter.incrementAsync,
  decrementAsync: actions.counter.decrementAsync,
  changePage: () => push('/about-us')
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

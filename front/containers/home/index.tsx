import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import actions from 'actions/index'

import {TomatoButton} from 'components/Btn'

class Home extends React.Component {
    props;

    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div>
                <TomatoButton>hoge</TomatoButton>
                <p>Count: {this.props.count}</p>

                <p>
                    <button onClick={this.props.increment} disabled={this.props.isIncrementing}>Increment</button>
                    <button onClick={this.props.incrementAsync} disabled={this.props.isIncrementing}>Increment Async</button>
                </p>

                <p>
                    <button onClick={this.props.decrement} disabled={this.props.isDecrementing}>Decrement</button>
                    <button onClick={this.props.decrementAsync} disabled={this.props.isDecrementing}>Decrement Async</button>
                </p>

                <p><button onClick={() => this.props.changePage()}>Go to about page via redux</button></p>
            </div>
        )

    }
}

const mapStateToProps = state => ({
    state: state,
    count: state.counter,
    isIncrementing: state.counter.isIncrementing,
    isDecrementing: state.counter.isDecrementing
});

const mapDispatchToProps = dispatch => bindActionCreators({
  increment: actions.counter.increment,
  decrement: actions.counter.decrement,
  incrementAsync: actions.counter.incrementAsync,
  decrementAsync: actions.counter.decrementAsync,
  changePage: () => push('/about-us')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

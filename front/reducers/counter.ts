import actionTypes from 'actionTypes/index'

export default function counterReducer(state = 0, action: any) {

    switch (action.type) {
        case actionTypes.counter.COUNTER_INCREMENT:
            return state + 1;
        case actionTypes.counter.COUNTER_DECREMENT:
            return state - 1;
        default:
            return state
    }

}

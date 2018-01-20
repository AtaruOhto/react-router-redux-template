import actionTypes from 'actionTypes/index'

export const increment = () => {
    return {type: actionTypes.counter.COUNTER_INCREMENT}
};

export const decrement = () => {
    return {type: actionTypes.counter.COUNTER_DECREMENT}
};

export const incrementAsync = () => {
    return {type: actionTypes.counter.COUNTER_INCREMENT_ASYNC}
};

export const decrementAsync = () => {
    return {type: actionTypes.counter.COUNTER_DECREMENT_ASYNC}
};

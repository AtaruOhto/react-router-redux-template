import { put, takeEvery } from 'redux-saga/effects'
import actionTypes from 'actionTypes/index'

const sampleAsyncFunction = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(null)
        }, 3000)
    })
};

export function* incrementAsync() {
    yield sampleAsyncFunction();
    yield put({type: actionTypes.counter.COUNTER_INCREMENT});
}

export function* decrementAsync() {
    yield sampleAsyncFunction();
    yield put({type: actionTypes.counter.COUNTER_DECREMENT});
}

export default function* rootSaga() {
    yield takeEvery(actionTypes.counter.COUNTER_INCREMENT_ASYNC, incrementAsync);
    yield takeEvery(actionTypes.counter.COUNTER_DECREMENT_ASYNC, decrementAsync);
}

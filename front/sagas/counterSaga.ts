import createSagaMiddleware from 'redux-saga'
import { put, takeEvery } from 'redux-saga/effects'
import actionTypes from 'actionTypes/index'

export const counterSagaMiddleware = createSagaMiddleware();

const sampleAsyncFunction = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(null)
        }, 3000)
    })
};

function* incrementAsync() {
    yield sampleAsyncFunction();
    yield put({type: actionTypes.counter.COUNTER_INCREMENT});
}

function* decrementAsync() {
    yield sampleAsyncFunction();
    yield put({type: actionTypes.counter.COUNTER_DECREMENT});
}

function* rootSaga() {
    yield takeEvery(actionTypes.counter.COUNTER_INCREMENT_ASYNC, incrementAsync);
    yield takeEvery(actionTypes.counter.COUNTER_DECREMENT_ASYNC, decrementAsync);
}

export const runCounterSaga = () => {
  counterSagaMiddleware.run(rootSaga);
};

// import {createStore} from 'redux'
import { configureStore } from '@reduxjs/toolkit';
import combineReducer from './combineReducer';
import productSaga from './productSaga';
import createSagaMiddleware from '@redux-saga/core';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer:combineReducer,
    middleware:()=>[sagaMiddleware]
});

sagaMiddleware.run(productSaga);

export default store;
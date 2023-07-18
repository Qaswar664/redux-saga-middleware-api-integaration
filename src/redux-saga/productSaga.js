import { takeEvery, put } from 'redux-saga/effects'
import { PRODUCT_LIST, SET_PRODUCT_LIST } from './constant';
import { SEARCH_PRODUCT } from './constant';

function* getProducts() {
    let data = yield fetch('https://fakestoreapi.com/products');
    
    data = yield data.json();
    console.warn("action is called", data)
    yield put({type: SET_PRODUCT_LIST, data})
}

function* searchProducts(data) {
    let result = yield fetch(`https://jsonplaceholder.typicode.com/posts?q=${data.query}`);
    result = yield result.json();
    console.warn("search data", result)
    yield put({type: SET_PRODUCT_LIST, data:result})
}

function* productSaga() {
    yield takeEvery(PRODUCT_LIST, getProducts)
    yield takeEvery(SEARCH_PRODUCT, searchProducts)
}
export default productSaga;

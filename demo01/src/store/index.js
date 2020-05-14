import { createStore, applyMiddleware, compose } from 'redux';  //引入 createStore 方法
import thunk from 'redux-thunk';  //中间件
import reducer from './reducer';
import mySaga from './saga';

import creactSagaMiddleware from 'redux-saga';
const sagaMiddleware = creactSagaMiddleware();
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__({}):compose
// console.log(composeEnhancers);
/*
  辅助使用chrome浏览器进行redux调试
  判断当前浏览器是否安装了 REDUX_DEVTOOL 插件
*/
const shouldCompose =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

/*
   如果浏览器安装的 redux 工具，则使用 redux 工具 扩展过的 compose
   compose 是一个 createStore 增强工具，
   他是一个高阶函数，最终会返回新的增强后的 createStore
*/
const composeEnhancers = shouldCompose ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose;

/*
   调用 applyMiddleware ，使用 middleware 来增强 createStore
*/
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))

const store = createStore(reducer,enhancer);

sagaMiddleware.run(mySaga)

export default store;

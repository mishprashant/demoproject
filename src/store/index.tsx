import AsyncStorage from '@react-native-community/async-storage';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import appReducer from '../reducer';
import logger from 'redux-logger'
import {
    persistStore,
    persistReducer
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
const enhancer = compose(applyMiddleware(thunk, logger));

const config: any = {
    key: 'root',
    keyPrefix: '',
    storage: AsyncStorage,
    whitelist: ["authReducer"],
    debug: true,
};
const storeReducer: any = persistReducer(
    config,
    appReducer,
);
const store = createStore(storeReducer, enhancer);
persistStore(store)

export default store;

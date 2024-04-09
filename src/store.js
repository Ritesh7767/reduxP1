import {legacy_createStore} from 'redux'
import CoutnerSlice from './CoutnerSlice'

const store = legacy_createStore(CoutnerSlice)
console.log(store)

export default store


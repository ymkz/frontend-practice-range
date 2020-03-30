import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch as _useDispatch, useSelector as _useSelector } from 'react-redux'

import { countReducer } from './count'

const reducer = combineReducers({
  count: countReducer,
})

export const store = configureStore({ reducer })

export type AppState = ReturnType<typeof reducer>
export type AppDispatch = typeof store.dispatch

export const useSelector: TypedUseSelectorHook<AppState> = _useSelector

export const useDispatch = () => {
  const dispatch: AppDispatch = _useDispatch()
  return dispatch
}

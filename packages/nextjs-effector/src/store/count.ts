import { createEvent, createStore } from 'effector'

type CountState = number

const initialState: CountState = 0

export const countEvent = {
  increment: createEvent(),
  decrement: createEvent(),
  incrementBy: createEvent<CountState>(),
  decrementBy: createEvent<CountState>(),
  reset: createEvent(),
}

export const countStore = createStore(initialState)
  .on(countEvent.increment, state => state + 1)
  .on(countEvent.decrement, state => state - 1)
  .on(countEvent.incrementBy, (state, payload) => state + payload)
  .on(countEvent.decrementBy, (state, payload) => state - payload)
  .reset(countEvent.reset)

import React from 'react'

import { useDispatch, useSelector } from '../store'
import { countActions } from '../store/count'

export const Count = () => {
  const [value, setValue] = React.useState(100)
  const count = useSelector((state) => state.count)
  const dispatch = useDispatch()

  return (
    <div>
      <div>Count: {count}</div>
      <div>
        <button onClick={() => dispatch(countActions.reset())}>reset</button>
        <button onClick={() => dispatch(countActions.increment())}>+1</button>
        <button onClick={() => dispatch(countActions.decrement())}>-1</button>
        <button onClick={() => dispatch(countActions.incrementBy(value))}>+{value}</button>
        <input value={value} onChange={(event) => setValue(parseInt(event.currentTarget.value))} />
        <button onClick={() => dispatch(countActions.decrementBy(value))}>-{value}</button>
      </div>
    </div>
  )
}

export default Count

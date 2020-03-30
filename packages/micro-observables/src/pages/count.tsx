import { useObservable } from 'micro-observables'
import React from 'react'

import { countService } from '../store/count'

export const Count = () => {
  const [value, setValue] = React.useState(100)
  const count = useObservable(countService.count)

  return (
    <div>
      <div>Count: {count}</div>
      <div>
        <button onClick={() => countService.reset()}>reset</button>
        <button onClick={() => countService.increment()}>+1</button>
        <button onClick={() => countService.decrement()}>-1</button>
        <button onClick={() => countService.incrementBy(value)}>+{value}</button>
        <input onChange={(event) => setValue(parseInt(event.currentTarget.value))} value={value} />
        <button onClick={() => countService.decrementBy(value)}>-{value}</button>
      </div>
    </div>
  )
}

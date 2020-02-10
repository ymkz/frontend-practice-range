import { useStore } from 'effector-react'
import React from 'react'

import { countEvent, countStore } from '~/store/count'

const Index = () => {
  const [value, setValue] = React.useState(100)
  const count = useStore(countStore)

  return (
    <React.Fragment>
      <div>Count: {count}</div>
      <div>
        <button onClick={() => countEvent.reset()}>reset</button>
        <button onClick={() => countEvent.increment()}>+1</button>
        <button onClick={() => countEvent.decrement()}>-1</button>
        <button onClick={() => countEvent.incrementBy(value)}>+{value}</button>
        <input onChange={event => setValue(parseInt(event.currentTarget.value))} value={value} />
        <button onClick={() => countEvent.decrementBy(value)}>-{value}</button>
      </div>
    </React.Fragment>
  )
}

export default Index

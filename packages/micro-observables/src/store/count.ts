import { observable } from 'micro-observables'

export type CountState = number

class CountService {
  private _count = observable<CountState>(0)

  get count() {
    return this._count.readOnly()
  }

  reset() {
    this._count.set(0)
  }

  increment() {
    this._count.update(count => count + 1)
  }

  decrement() {
    this._count.update(count => count - 1)
  }

  incrementBy(value: CountState) {
    this._count.update(count => count + value)
  }

  decrementBy(value: CountState) {
    this._count.update(count => count - value)
  }
}

export const countService = new CountService()

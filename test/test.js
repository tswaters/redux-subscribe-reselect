

import assert from 'assert'
import sinon from 'sinon'
import subscribe from '../src/index'
import {createStore} from 'redux'

import reducer, {
  reset,
  getItems,
  addItem,
  removeItem,
  getWidgets,
  addWidget,
  removeWidget
} from './fixtures/redux'

describe('redux subscrube reselect', () => {

  let store = null

  beforeEach(() => {
    reset()
    store = createStore(reducer)
    store.dispatch(addWidget('widget #1'))
    store.dispatch(addWidget('widget #2'))
    store.dispatch(addItem('item #1'))
    store.dispatch(addItem('item #2'))
  })

  it('should work properly', () => {

    const widgetSubscriber = sinon.stub()
    const itemSubscriber = sinon.stub()

    subscribe(store, getWidgets, widgetSubscriber)
    subscribe(store, getItems, itemSubscriber)

    store.dispatch(removeWidget(0))
    store.dispatch(removeItem(0))

    assert.equal(widgetSubscriber.callCount, 1)
    assert.deepEqual(widgetSubscriber.firstCall.args[0], [{id: 1, name: 'widget #2'}])

    assert.equal(itemSubscriber.callCount, 1)
    assert.deepEqual(itemSubscriber.firstCall.args[0], [{id: 1, name: 'item #2'}])

  })

  it('should unsubscribe properly', () => {

    const widgetSubscriber = sinon.stub()
    const subscriber = subscribe(store, getWidgets, widgetSubscriber)

    store.dispatch(removeWidget(0))
    subscriber()
    store.dispatch(removeWidget(1))

    assert.equal(widgetSubscriber.callCount, 1)
    assert.deepEqual(widgetSubscriber.firstCall.args[0], [{id: 1, name: 'widget #2'}])

  })

})

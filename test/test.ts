
import {ok} from 'assert'
import {createSelector} from 'reselect'
import { createStore, Store } from 'redux';
import subscribe from '../lib/index'

type Item = {id: Number, name: String}
type Widget = {widget_id: Number, widget_name: String}

const ADD_ITEM = 'ADD_ITEM'
type ADD_ITEM = typeof ADD_ITEM
type addItemAction = {type: ADD_ITEM, id: Number, name: String}
const addItem = (name: String): addItemAction => ({type: ADD_ITEM, id: item_id++, name})

const REMOVE_ITEM = 'REMOVE_ITEM'
type REMOVE_ITEM = typeof REMOVE_ITEM
type removeItemAction = {type: REMOVE_ITEM, id: Number}
const removeItem = (id: Number): removeItemAction => ({type: REMOVE_ITEM, id})

type StoreActions = addItemAction | removeItemAction

type StoreState = {
  items: Item[],
}

let item_id = 0

const defaultState = {
  items: []
}

const reducer = (state: StoreState = defaultState, action: StoreActions) => {
  switch (action.type) {
    case ADD_ITEM:
      return {...state, items: [...state.items, {id: action.id, name: action.name}]}
    case REMOVE_ITEM:
      return {...state, items: state.items.filter(i => i.id !== action.id)}
    default:
      return state
  }
}


const store: Store<StoreState, StoreActions> = createStore(reducer)

const getItems = createSelector((state: StoreState) => state.items, items => items)

const hasItem = createSelector(getItems, items => items.length > 0)

const firstItemId = createSelector(getItems, items => items[0].id)

const transformToWidget = createSelector(getItems, items => items.map(item => ({widget_id: item.id, widget_name: item.name})))

subscribe(store, getItems, (res: Item[]) => ok(res))

subscribe(store, hasItem, (res: boolean) => ok(res))

subscribe(store, firstItemId, (res: Number) => ok(res))

subscribe(store, transformToWidget, (res: Widget[]) => ok(res))

store.dispatch(addItem('item #1'))
store.dispatch(addItem('item #2'))
store.dispatch(removeItem(0))



import {createSelector} from 'reselect'

const defaultState = {
  items: [],
  widgets: []
}

const ADD_ITEM = 'ADD_ITEM'
const REMOVE_ITEM = 'REMOVE_ITEM'
const ADD_WIDGET = 'ADD_WIDGET'
const REMOVE_WIDGET = 'REMOVE_WIDGET'

let widget_id = 0
let item_id = 0

export const addItem = name => ({type: ADD_ITEM, id: widget_id++, name})
export const removeItem = id => ({type: REMOVE_ITEM, id})
export const getItems = createSelector(state => state.items, items => items)

export const addWidget = name => ({type: ADD_WIDGET, id: item_id++, name})
export const removeWidget = id => ({type: REMOVE_WIDGET, id})
export const getWidgets = createSelector(state => state.widgets, widgets => widgets)

export default (state = defaultState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {...state, items: state.items.concat({id: action.id, name: action.name})}
    case REMOVE_ITEM:
      return {...state, items: state.items.filter(i => i.id !== action.id)}
    case ADD_WIDGET:
      return {...state, widgets: state.widgets.concat({id: action.id, name: action.name})}
    case REMOVE_WIDGET:
      return {...state, widgets: state.widgets.filter(i => i.id !== action.id)}
    default:
      return state
  }
}

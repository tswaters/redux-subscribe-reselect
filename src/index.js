
export default (store, selector, cb) => {
  let data = selector(store.getState())

  return store.subscribe(() => {
    let newData = selector(store.getState())
    if (data !== newData) {
      data = newData
      cb(data)
    }
  })

}

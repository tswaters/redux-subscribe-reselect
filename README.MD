# Redux Subscribe Reselect

[![npm version][npm-badge]][npm-url]
[![Build Status][travis-badge]][travis-url]
[![Coverage Status][coveralls-badge]][coveralls-url]
[![Dependency Status][dependency-badge]][dependency-url]
[![devDependency Status][devDependency-badge]][devDependency-url]

Subscribe to state changes returned from a reselect selector

## install

```sh
npm install --save redux-subscribe-reselect
```

## usage

refer to ./test/fixtures/redux.js for context

```js
import {createStore} from 'redux'
import subscribe from 'redux-subscribe-reselect'
import reducer, {addWidget, getWidgets} from './redux'
const store = createStore(reducer)
subscribe(store, getWidgets, data => assert.equal(data.name, 'test!'))
store.dispatch(addWidget('test!'))
```

## notes

this is really bare-bones, there is no error checking or anything fancy.
play stupid games, win stupid prizes.

## contributing

PRs and issues are welcome...
Also, be good to one another. Thanks!

## license

MIT

[npm-badge]: https://badge.fury.io/js/redux-subscribe-reselect.svg
[npm-url]: https://badge.fury.io/js/redux-subscribe-reselect
[travis-badge]: https://travis-ci.org/tswaters/redux-subscribe-reselect.svg?branch=master
[travis-url]: https://travis-ci.org/tswaters/redux-subscribe-reselect
[coveralls-badge]: https://coveralls.io/repos/github/tswaters/redux-subscribe-reselect/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/tswaters/redux-subscribe-reselect?branch=master
[dependency-badge]: https://david-dm.org/tswaters/redux-subscribe-reselect.svg
[dependency-url]: https://david-dm.org/tswaters/redux-subscribe-reselect
[devDependency-badge]: https://david-dm.org/tswaters/redux-subscribe-reselect/dev-status.svg
[devDependency-url]: https://david-dm.org/tswaters/redux-subscribe-reselect?type=dev


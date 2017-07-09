# reqjs

[![NPM version](https://img.shields.io/npm/v/reqjs.svg?style=flat)](https://npmjs.com/package/reqjs) [![NPM downloads](https://img.shields.io/npm/dm/reqjs.svg?style=flat)](https://npmjs.com/package/reqjs) [![CircleCI](https://circleci.com/gh/egoist/reqjs/tree/master.svg?style=shield)](https://circleci.com/gh/egoist/reqjs/tree/master)  [![codecov](https://codecov.io/gh/egoist/reqjs/branch/master/graph/badge.svg)](https://codecov.io/gh/egoist/reqjs)
 [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate)

## Install

```bash
yarn add reqjs
```

## Usage

```js
const req = require('reqjs')

const life = req(`module.exports = () => 42`)

life() === 42 // true
```

## Gotchas

This is not really a CommonJS spec implementation, the code you `req` only supports `module.exports` and `exports`, you **cannot** use `require` inside the code!

The primary use case is that I want to evaluate a piece of user-supplied code, and allowing user to specific what I need using `module.exports` syntax. (Note that this may be **dangerous**!)

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**reqjs** © [egoist](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by egoist with help from contributors ([list](https://github.com/egoist/reqjs/contributors)).

> [egoistian.com](https://egoistian.com) · GitHub [@egoist](https://github.com/egoist) · Twitter [@rem_rin_rin](https://twitter.com/rem_rin_rin)

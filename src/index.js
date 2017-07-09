
export default function (code) {
  // eslint-disable-next-line no-new-func
  const fn = new Function(
    'module',
    'exports',
    `${code};return module.exports`
  )
  const _module = { exports: {} }
  return fn(_module, _module.exports)
}

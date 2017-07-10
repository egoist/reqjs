
export default function (code) {
  if (Array.isArray(code)) { code = code[0] }
  // eslint-disable-next-line no-new-func
  const fn = new Function(
    'module',
    'exports',
    `${code};return module.exports`
  )
  const _module = { exports: {} }
  return fn(_module, _module.exports)
}

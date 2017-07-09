import req from '../src'

test('main', () => {
  const res = req(`module.exports = 42`)
  expect(res).toBe(42)
})

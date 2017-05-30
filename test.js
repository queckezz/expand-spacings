
import { margin, padding } from './src'
import test from 'ava'

test('all', (t) => {
  const obj = margin(2)
  t.is(obj.marginLeft, 2)
  t.is(obj.marginRight, 2)
  t.is(obj.marginTop, 2)
  t.is(obj.marginBottom, 2)
})

test('vertical, horizontal', (t) => {
  const obj = margin(2, 4)
  t.is(obj.marginLeft, 4)
  t.is(obj.marginRight, 4)
  t.is(obj.marginTop, 2)
  t.is(obj.marginBottom, 2)
})

test('individual', (t) => {
  const obj = margin(2, 4, 6, 8)
  t.is(obj.marginTop, 2)
  t.is(obj.marginRight, 4)
  t.is(obj.marginBottom, 6)
  t.is(obj.marginLeft, 8)
})

test('padding', (t) => {
  const obj = padding(4, 8)
  t.is(obj.paddingTop, 4)
  t.is(obj.paddingRight, 8)
  t.is(obj.paddingBottom, 4)
  t.is(obj.paddingLeft, 8)
})

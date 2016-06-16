import React from 'react'
import {assert} from 'chai'
import {add, App} from '../../src/js/test.js'
import {shallow} from 'enzyme'

describe('Practice Test', () => {
  it('works', () => {
    assert.equal(add(3, 4), 7)
  })
  it('Component test', () => {
    const wrapper = shallow(<App />)

    assert.isTrue(wrapper.contains(<h1>Hello World!</h1>))
  })
})

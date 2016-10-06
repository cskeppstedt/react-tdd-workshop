import React from 'react'
import { shallow } from 'enzyme'
import HelloComponent from './HelloComponent'

describe('HelloComponent', () => {
  it('should contain "Hello world"', () => {
    const wrapper = shallow(<HelloComponent />)
    expect(wrapper.text()).toEqual('Hello world')
  })
})

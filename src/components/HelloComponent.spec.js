import React from 'react'
import { mount } from 'enzyme'
import * as Title from '@klarna/ui/Title'
import * as Paragraph from '@klarna/ui/Paragraph'
import HelloComponentInjector from 'inject!./HelloComponent'

const exampleDepStub = sinon.stub().returns('fixed output')

const HelloComponent = HelloComponentInjector({
  './exampleDep': exampleDepStub
}).default

describe('HelloComponent', () => {
  it('should contain a "Hello world" title', () => {
    const wrapper = mount(<HelloComponent />)
    const title = wrapper.find(Title.Primary)

    const expected = 'Hello world'
    const actual = title.text()

    expect(actual).toEqual(expected)
  })

  it('should contain a secondary title with text from exampleDep', () => {
    const wrapper = mount(<HelloComponent />)
    const title = wrapper.find(Title.Secondary)

    const expected = 'This is from a dependency: fixed output'
    const actual = title.text()

    expect(actual).toEqual(expected)
  })

  it('should render the message prop', () => {
    const wrapper = mount(<HelloComponent message='This is a message' />)
    const paragraph = wrapper.find(Paragraph.Primary)

    const expected = 'This is a message'
    const actual = paragraph.text()

    expect(actual).toEqual(expected)
  })
})

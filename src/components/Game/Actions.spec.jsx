import React from 'react'
import { shallow, mount } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Actions from './Actions'

describe('<Actions />', () => {
  const like = jest.fn()
  const dislike = jest.fn()
  const props = {
    like,
    dislike
  }

  it('should render with props', () => {
    const wrapper = shallow(
      <Actions {...props} />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('Method #componentDidMount() should call likeButton.focus()', () => {
    //TODO implement test
  })

  it('should call dislike function when clicked', () => {
    const wrapper = shallow(
      <Actions {...props} />
    )
    wrapper.find('button').first().simulate('click')
    expect(dislike).toHaveBeenCalled()
  })

  it('should call like function when clicked', () => {
    //TODO implement test
  })

})

import React from 'react'
import { shallow, mount } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { TinderContainer } from './TinderContainer'
import * as actions from '../actions'

describe('<TinderContainer />', () => {
  const props = {
    openSideMenu: jest.fn(),
    addBeerToCart: jest.fn(),
    closeSideMenu: jest.fn(),
    beers: [],
    beer: {},
    fetchBeers: jest.fn(),
    session: {id: 0},
    setCurrentBeerIndex: actions.setCurrentBeerIndex
  }

  // should this shallow be inside each it()  ?
  const wrapper = shallow(
    <TinderContainer {...props} />
  )

  it('should render with default props', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('Method #componentDidMount() should...', () => {
    //TODO implement test
  })

  it('Method #componentWillReceiveProps() should conditionally call fetchBeers', () => {
    const instance = wrapper.instance()
    instance.startSession = jest.fn()
    instance.componentWillReceiveProps({ session: {id: 1} })
    expect(props.fetchBeers).toHaveBeenCalled()
  })

  it('Method #next() should...', () => {
    //TODO implement test
  })

  it('Method #like() should call next()', () => {
    const instance = wrapper.instance()
    instance.next = jest.fn()
    instance.like()
    expect(instance.next).toHaveBeenCalled()
  })

  it('Method #dislike() should...', () => {
    //TODO implement test
  })
})

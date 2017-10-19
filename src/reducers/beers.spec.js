import beers from './beers'
import { RECEIVE_BEERS, FETCHING_BEERS, receiveBeers } from '../actions'

describe('#Reducer: Beers', () => {
  it('Returns default state', () => {
    expect(beers(undefined, { type: 'default_action' })).toEqual({ data: [], isFetching: false })
  })
  it('Returns state', () => {
      //TODO implement test
  })
  it(`When action ${RECEIVE_BEERS} returns state`, () => {
    const value = beers( { data: [ 1, 2 ], isFetching: true }, receiveBeers([ 3 ]))
    const expected = { data: [ 1, 2, 3 ], isFetching: false }
    expect(value).toEqual(expected)
  })
  it(`When action ${FETCHING_BEERS} returns state`, () => {
    //TODO implement test
  })
})

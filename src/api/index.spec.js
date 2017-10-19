import * as api from './index'
import { API_BASE_URL } from '../config'

const mockFetch = (data) => {
  global.fetch = jest.fn()

  fetch.mockImplementation(
    (params) => Promise.resolve({
      json: () => ({
        data,
        params
      })
    })
  )
}


describe('#API', () => {

  it('startSession()', () => {
    const session = {
      "id": "reactJSacademy"
    }
    mockFetch(session)
    api.startSession().then((response) => {
      expect(response.data).toEqual(session)
      expect(global.fetch).toBeCalledWith(
        `${API_BASE_URL}/public/session.json`,
        { headers: api.defaultHeaders }
      )
    })
  })

  it('getBeers()', () => {
    const beers = [ 1, 2 ]
    mockFetch(beers)
    api.getBeers().then((response) => {
      expect(response.data).toEqual(beers)
      expect(global.fetch).toBeCalledWith(
        `${API_BASE_URL}/public/beers.json`,
        { headers: api.defaultHeaders }
      )
    })
  })

})

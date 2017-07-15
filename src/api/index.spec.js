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
    })
  })

//Implement a test for getBeers here!

})

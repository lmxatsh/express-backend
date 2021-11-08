import request from 'supertest'
import app from '../../app.js'

describe('test root url', () => {
  test('return', async () => {
    const res = await request(app).get('/')
    expect(res.text).toEqual('Hello Express')
  })
})

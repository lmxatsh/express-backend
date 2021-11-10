import request from 'supertest'
import app from '../../app.js'

describe('test users routes', () => {
  test('GET /', async () => {
    const res = await request(app).get('/')
    expect(res.text).toEqual('Hello Express')
  })
})

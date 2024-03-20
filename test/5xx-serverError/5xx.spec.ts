import { describe, expect, it } from 'vitest'
import { internalServerError } from '../../src'

describe('Internal Server Error', () => {
  it('should have status code 500 and statusText "Internal Server Error"', () => {
    const response = internalServerError()

    expect(response.status).toStrictEqual(500)
    expect(response.statusText).toStrictEqual('Internal Server Error')
  })
})

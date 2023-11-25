import { describe, it, expect } from 'vitest'
import { HttpError, ValidationError } from './errors'

describe('class HttpError', () => {
  it('should have statusCode, message and data', () => {
    const testStatusCode = 42
    const testMessage = "Test"
    const testData = {key: 'test'}
    const testError = new HttpError(testStatusCode, testMessage, testData)
    expect(testError.statusCode).toBe(testStatusCode)
    expect(testError.message).toBe(testMessage)
    expect(testError.data).toBe(testData)
  })

  it('should contain undefined as data if no data is provided', () => {
    const testStatusCode = 42
    const testMessage = "Test"
    const testError = new HttpError(testStatusCode, testMessage)
    expect(testError.data).toBeUndefined()
  })

})

describe('class ValidationError', () => {
  it('should have a message attribute', () => {
    const testMessage = 'Test message'
    const validationError = new ValidationError(testMessage)
    expect(validationError.message).toBe(testMessage)
  })
})
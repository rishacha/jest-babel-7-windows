import { getSomeStuff } from './index.js'

describe('Test a simple function', () => {
	it('should get "Some stuff"', () => {
		expect(getSomeStuff()).toBe('Some stuff')
	})
})
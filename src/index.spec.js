import { getAllStuff } from './index.js'

describe('Test a simple function', () => {
	it('should get "Some stuff"', () => {
		expect(getAllStuff()).toBe('All the stuff : Some stuff from pkg1')
	})
})
import { getSomeStuffFromPkg1 } from './index.js'

describe('Test a simple function', () => {
	it('should get "Some stuff"', () => {
		expect(getSomeStuffFromPkg1()).toBe('Some stuff from pkg1')
	})
})
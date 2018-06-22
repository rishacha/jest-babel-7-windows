import { getSomeStuffFromPkg1 } from 'pkg1'

export const getAllStuff = () => {
	return `All the stuff : ${getSomeStuffFromPkg1()}`
}
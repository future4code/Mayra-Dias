import {config} from 'dotenv'

config()


export interface User {
	name: string
	balance: number
}

export function performPurchase(user: User, string: number): User | undefined {
	if(user.balance >= string) {
		return {
			...user,
			balance: user.balance - string		
		}
	}
	return undefined
}
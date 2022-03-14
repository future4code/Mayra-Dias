import {performPurchase, User} from '../src'


describe("Test with jest", () => {

    test("Testando o saldo maior que o valor", () => {

        const user: User = {
            name: "Ana",
            balance: 100
        }
    	const result = performPurchase(user, 40)

        expect(result).toEqual({
            name: "Ana",
            balance: 60
        })
    })

    test("Testando o saldo maior que o valor", () => {
        const user: User = {
            name: "Ana",
            balance: 50
        }
    
        const result = performPurchase(user, 50)
        
        expect(result).toEqual({
            ...user,
            balance: 0
        })
    })

    test("Testando o saldo maior que o valor", () => {
        const user: User = {
            name: "Ana",
            balance: 30
        }
        const result = performPurchase(user, 50)
        
        expect(result).not.toBeDefined()
    })
})
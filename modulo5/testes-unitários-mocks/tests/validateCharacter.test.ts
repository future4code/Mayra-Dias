import { validateCharacter, performAttack, Character } from '../src/validateCharacter'

describe("Testing validateCharacter", () => {

    test("Should return false for empty name", () => {
        const result = validateCharacter({
            name: "",
            life: 1500,
            strength: 300,
            defense: 500,
        });

        expect(result).toBe(false);
    });

    test("Must return false with life equal to zero.", () => {
        const result = validateCharacter({
            name: "Scorpion",
            life: 0,
            strength: 300,
            defense: 500,
        });

        expect(result).toBe(false);
    });

    test("Must return false with strength equal to zero.", () => {
        const result = validateCharacter({
            name: "Scorpion",
            life: 1500,
            strength: 0,
            defense: 500,
        });

        expect(result).toBe(false);
    });

    test("Must return false with defense equal to zero.", () => {
        const result = validateCharacter({
            name: "Scorpion",
            life: 1500,
            strength: 300,
            defense: 0,
        });

        expect(result).toBe(false);

    })
    test("Should return false for life 0", () => {
        const result = validateCharacter({
            name: "Scorpion",
            life: 0,
            strength: 300,
            defense: 500,
        });

        expect(result).toBe(false);
    });

    test("Should return true for all valid inputs", () => {
        const result = validateCharacter({
            name: "Scorpion",
            life: 1500,
            strength: 300,
            defense: 500,
        });

        expect(result).toBe(true);
    });

    test("Showing jest.fn", () => {
        const mock = jest.fn(() => {
            const user = {
                    name: "Astrodev",
                    age: 29
            }
            return user
        })
    })

    test("Creating Mocks", () => {
        const validatorMock = jest.fn(() => {
                return true
            });
    });

    test("Creating Mocks", () => {
        const validatorMock = jest.fn(() => {
                return false
            });
    });

    
});
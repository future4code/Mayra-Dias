import { BaseError } from "../../src/error/BaseError"
import { PokemonInputDTO } from "../../src/model/Pokemon"
import { PokemonDatabase } from "../data/PokemonDatabase"

export class PokemonBusiness {
    constructor(
        private PokemonDatabase: PokemonDatabase
    ){}

    async getPokemon(input: PokemonInputDTO) {
        if (!input) {
            throw new BaseError(500, "Invalid Input to Get Pokémon Data")
        }

        return await this.PokemonDatabase.getPokemon(input)
    }
}
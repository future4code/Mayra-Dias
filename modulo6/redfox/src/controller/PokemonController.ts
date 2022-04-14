import { Request, Response } from "express"
import { PokemonBusiness } from "../business/PokemonBusiness"
import { PokemonDatabase } from "../data/PokemonDatabase"
import { PokemonInputDTO, POKEMON_COLUMN } from "../model/Pokemon"


export class PokemonController{

    public async createPokemon(req: Request, res: Response){
       try {
   
           const column = req.query.column as POKEMON_COLUMN
           const data = req.query.data as string | number
           const sort = req.query.sort as POKEMON_COLUMN
           const page = Number(req.query.page)
           const size = Number(req.query.size)
   
           const input: PokemonInputDTO = {
               column,
               data,
               sort,
               page,
               size
           }
   
           const pokemonBusiness = new PokemonBusiness(
               new PokemonDatabase()
           )
   
           const pokemon = await pokemonBusiness.getPokemon(input)
   
           res.status(200).send(pokemon)
           
       } catch (error) {
           if (error instanceof Error) {
               res.status(500).send({message: error.message})
           } else {
               res.status(500).send({message: "Unexpected error!"})
           }
       }
   }
}
   
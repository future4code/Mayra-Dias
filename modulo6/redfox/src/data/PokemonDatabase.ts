import { PokemonInputDTO } from "../model/Pokemon";
import BaseDataBase from "./BaseDatabase";


export class PokemonDatabase extends BaseDataBase {

   
        public async getPokemon (
            input: PokemonInputDTO
        ) {
            try {}
 
catch (error :any) {
    throw new Error(error.sqlMessage || error.message)
 }

}




}
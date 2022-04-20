import express from "express"
import { PokemonController } from "../controller/PokemonController"

export const userRouter = express.Router();
const pokemonController = new PokemonController();

userRouter.get("/pokemon", pokemonController.createPokemon)
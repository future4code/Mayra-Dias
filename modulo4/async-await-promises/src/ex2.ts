import axios from "axios"
import { baseURL } from "./baseURL"

//a)Função nomeada é uma sintaxe muito específica criada para substituir argumentos.
//Arrow function assíncrona permitem ter um retorno implícito, que são valores retornados sem ter que usar a palavar return.

const getSubscribers = async(): Promise<any[]> => {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
  };
getSubscribers()

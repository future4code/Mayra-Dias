import axios from "axios"
import { baseURL } from "./baseURL"

 async function getSubscribers(): Promise<any[]> {
     const response = await axios.get(`${baseURL}/subscribers`);
     return response.data;
   }


async function main(){
    const result = await getSubscribers()
    console.log(result)
}
main()
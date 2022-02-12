import connection from "./connection";

export default async function inserirUsuario(
 
    id:string,
    name:string,
    email:string,
    password:string
){
    await connection.insert(
        {
            id,
            name,
            email,
            password
        }).into('to_do_list_users')
}
    

import { connection } from "../connection";
import { user } from "../../model/User";

export const insertUser = async(
   user: user
) => {
   await connection.insert(user).into('to_do_list_users')
}
import { Request, Response } from "express"
import { connection } from "../data/connection";
import { recipe, user } from "../types";

export async function getAllUsers(
req: Request,
res: Response)
: Promise<void>{
   try {
      const users = req.query.title;
      let sort = req.query.sort as string;
      let order = req.query.order as string;
      let page = Number(req.query.page)

      if(page < 1 || isNaN(page)){
         page = 1;
      }
      let size = 2;
      let offset = size * (page-1)

      console.log(req.query);
      if(users === ""){
         throw new Error("no user found")
      }
      if(sort !== "title" && sort !== "created_at"){
         sort= "title";
      }

      if(order.toUpperCase() !== "ASC" && order.toUpperCase() !== "DESC" ){
         order = "ASC";
      }

      const result = await connection("filtros-ordenacao-paginacao")
      .where('title', 'like', `%${users}%`)
      .orderBy(sort, order)
      .limit(size)
      .offset(offset)
      
      const recipes = result.map(toUsers)

      if(recipes.length < 1){
         throw new Error("Não foram encontrados valores com esse 'users'")
      }

      res.status(200).send(users)
      
   } catch (error: any) {
      console.log(error.message)
      res.status(422).send({
         message: error.message
      })
   }
;}
const toUsers = (input: any): recipe => {
   return {
      id: input.id,
      title: input.title,
      description: input.description,
      userId: input.user_id,
      createdAt: input.created_at
   }
} 
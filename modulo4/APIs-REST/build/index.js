"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
app.use(express_1.default.json());
app.use(cors_1.default());
let users = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: "ADMIN",
        age: 12,
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: "NORMAL",
        age: 36,
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: "NORMAL",
        age: 21,
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: "NORMAL",
        age: 17,
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: "ADMIN",
        age: 17,
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: "ADMIN",
        age: 60,
    },
];
app.get("/users", (req, res) => {
    let errorCode = 400;
    try {
        const name = req.query.name;
        const user = users.find((user) => user.name === name);
        if (!user) {
            errorCode = 404;
            throw new Error("User not found");
        }
        res.status(200).send(user);
    }
    catch (error) {
        // Essa tipagem /error: any/ foi necessária devido a uma nova funcionalidade do TS 4.0, de tipar o erro capturado no catch como unknown, o que gera um erro ao tentar acessar a mensagem. Durante a aula o erro não apareceu, mas depois sim. Portanto, pode acontecer com algum de vocês o erro /object is of type 'unknown'/. A solução mais simples é tipar o error como any.
        // Documentação do TS explicando a nova feature: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html#unknown-on-catch-clause-bindings
        res.status(errorCode).send({ message: error.message });
    }
});
app.get("/users/:type", (req, res) => {
    let errorCode = 400;
    try {
        const type = req.query.type;
        const user = users.find((user) => user.type === type);
        if (!user) {
            errorCode = 404;
            throw new Error("User not found");
        }
        res.status(200).send(user);
    }
    catch (error) {
        // Essa tipagem /error: any/ foi necessária devido a uma nova funcionalidade do TS 4.0, de tipar o erro capturado no catch como unknown, o que gera um erro ao tentar acessar a mensagem. Durante a aula o erro não apareceu, mas depois sim. Portanto, pode acontecer com algum de vocês o erro /object is of type 'unknown'/. A solução mais simples é tipar o error como any.
        // Documentação do TS explicando a nova feature: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html#unknown-on-catch-clause-bindings
        res.status(errorCode).send({ message: error.message });
    }
});
app.post("/users", (req, res) => {
    let errorCode = 400;
    try {
        const { id, name, email, type, age } = req.body;
        if (!id || !name || !email || !type || !age) {
            errorCode = 422;
            throw new Error("Please check the fields!");
        }
        const newUser = {
            id,
            name,
            email,
            type,
            age,
        };
        users.push(newUser);
        res.status(201).send({ message: "User created successefully" });
    }
    catch (error) {
        res.status(errorCode).send({ messagem: error.message });
    }
});
// app.patch("/users", (req: Request, res: Response) => {
//   let errorCode: number = 400;
//   try {
//     const { id, name, email, type, age } = req.body;
//     if (!id || !name || !email || !type || !age) {
//       errorCode = 422;
//       throw new Error("Please check the fields!");
//     }
//     const newUser: user = {
//       id,
//       name,
//       email,
//       type,
//       age,
//     };
//     users.push(newUser);
//     res.status(201).send({ message: "User updated successefully" });
//   } catch (error: any) {
//     res.status(errorCode).send({ messagem: error.message });
//   }
// });
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address();
        console.log(`Server is running in http://localhost: ${address.port}`);
    }
    else {
        console.error(`Failure upon starting server.`);
    }
});

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const data_1 = require("./data");
// import { users } from "./data"
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.listen(3003, () => console.log("Servidor disponível em 3003"));
app.get('/test', (req, res) => {
    const name = req.query.name;
    res.send(`Olá, seu nome é ${name}!`);
});
app.post('/produtos', (req, res) => {
    const produtosNome = req.body.name;
    const userIdToAdd = req.headers.authorization;
    for (let i = 0; i < data_1.produtos.length; i++) {
        if (data_1.produtos[i].id === userIdToAdd) {
            data_1.produtos[i].produto.push({
                id: Date.now().toString(),
                name: produtosNome,
                price: []
            });
        }
    }
    res.send({ produtos: data_1.produtos });
});
// app.get("/playlists", (req: Request, res: Response) => {
//   // tenho todos os usuários
//   const currentUsers = users // array de objetos
//   console.log(1, currentUsers);
//   // Vou pegar as playlists de cada usuário
//   const userPlaylists = currentUsers.map((user: any) => {
//     return user.playlists
//   }) // array de arrays
//   console.log(2, userPlaylists)
//   const result = userPlaylists.flat(1)
//   res.status(200).send(result);
// })
// app.get("/playlists/search", (req: Request, res: Response) => {
//   try {
//     const queriedName = req.query.name
//     if (!queriedName) {
//       throw new Error("Faltou a query 'name'")
//     }
//     const searchResult = []
//     for (let user of users) {
//       for (let playlist of user.playlists) {
//         if (playlist.name.includes(queriedName)) {
//           searchResult.push({
//             id: playlist.id,
//             name: playlist.name
//           })
//         }
//       }
//     }
//     res.send({
//       result: {
//         quantity: searchResult.length,
//         list: searchResult
//       }
//     })
//   } catch (error: any) {
//     res.status(400).send(error.message)
//   }
// })
// app.get("/tracks", (req: Request, res: Response) => {
//   const playlistId = req.query.id
//   if (!playlistId) res.status(400).send("Não é possível realizar a operação. ID da playlista ausente")
//   const allPlaylists = users.map((user: any) => {
//     return user.playlists
//   }).flat(1)
//   let tracks;
//   allPlaylists.forEach((playlist: any) => {
//     if (playlist.id === playlistId) {
//       tracks = playlist.tracks
//     }
//   })
//   res.status(200).send(tracks)
// })
// app.post('/playlists', (req: Request, res: Response) => {
//   const playlistName = req.body.name
//   const userIdToAdd = req.headers.authorization
//   for (let i = 0; i < users.length; i++ ) {
//     if (users[i].id === userIdToAdd) {
//       users[i].playlists.push({
//         id: Date.now().toString(),
//         name: playlistName,
//         tracks: []
//       })
//     }
//   }
//   res.send({ users })
// })
// app.post("/playlists/:playlistId/tracks", (req: Request, res: Response) => {
//   try {
//     const playlistIdToAdd = req.params.playlistId
//     const userIdToAdd = req.headers.authorization
//     const { name, artist, url } = req.body
//     if (!name || !artist || !url) {
//       throw new Error("campos necessários para criar música não informados")
//     }
//     if (!userIdToAdd) {
//       throw new Error("header de authorization não informado")
//     }
//     let isPlaylistFound = false
//     // iterando users
//     for (let i = 0; i < users.length; i++) {
//       if (users[i].id === userIdToAdd) {
//         // iterando playlists do user
//         for (let j = 0; j < users[i].playlists.length; j++) {
//           if (users[i].playlists[j].id === playlistIdToAdd) {
//             // iterando as tracks para ver se a música já existe
//             for (let k = 0; k < users[i].playlists[j].tracks.length; k++) {
//               if (
//                 users[i].playlists[j].tracks[k].name === name &&
//                 users[i].playlists[j].tracks[k].artist === artist
//               ) {
//                 throw new Error("musica já existe na playlist")
//               } 
//             }
//             users[i].playlists[j].tracks.push({
//               id: Date.now().toString(),
//               name,
//               artist,
//               url,
//             })
//             isPlaylistFound = true
//           }
//         }
//       }
//     }
//     if (!isPlaylistFound) {
//       throw new Error("playlist não encontrada")
//     }
//     res.send({ users })
//   } catch (error: any) {
//     switch(error.message) {
//       case "campos necessários para criar música não informados":
//         res.status(422) // pode ser tb res.statusCode = 422
//         break
//       case "header de authorization não informado":
//         res.status(401)
//         break
//       case "playlist não encontrada":
//         res.status(404)
//         break
//       case "musica já existe na playlist":
//         res.status(409)
//         break
//       default:
//         res.status(500)
//     }
//     res.send(error.message)
//   }
// })
// app.delete("/playlists", (req: Request, res: Response) => {
//   const id = req.query.id
//   users.forEach((user: any) => {
//     user.playlists = user.playlists.map((playlist: any) => {
//       if (playlist.id === id) {
//         return {}
//       }
//       return playlist
//     });
//   })
//   res.status(200).send(users)
// })
// app.delete("/track", (req: Request, res: Response) => {
//   const trackId = req.query.trackId
//   const playlistId = req.query.playlistId
//   const allPlaylists = users
//     .map((user: any) => {
//       return user.playlists;
//     })
//     .flat(1);
//   for (let i = 0; i <= allPlaylists.lenght; i++) {
//     allPlaylists[i]
//   }
//   for (let playlist of allPlaylists) {
//     playlist
//   }
//   allPlaylists.forEach((playlist: any) => {
//     if (playlist.id === playlistId) {
//       playlist.tracks = playlist.tracks.map((track: any) => {
//         if (track.id === trackId) {
//           return {};
//         }
//         return track;
//       });
//     }
//   })
//   res.status(200).send(allPlaylists)
// })

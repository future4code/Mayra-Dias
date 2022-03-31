"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const baseURL_1 = require("./baseURL");
//a) sim. 
const news = {
    title: "Nova notícia",
    content: "conteúdo",
    date: Date.now()
};
const createNews = (news) => {
    return axios_1.default.put(`${baseURL_1.baseURL}/news`, news);
};
const getAllSubscribers = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.get(`${baseURL_1.baseURL}/subscribers`);
    return response.data.map((res) => {
        return {
            id: res.id,
            name: res.name,
            email: res.email,
        };
    });
});
const getSubscribersIds = (subscribers) => {
    return axios_1.default.get(`${baseURL_1.baseURL}/subscribers`)
        .then(res => res.data);
};
const notifyAllSubscribers = (ids) => {
    for (let id of ids) {
        axios_1.default.post(`${baseURL_1.baseURL}/notifications`, {
            subscribersIds: id,
            message: "Ola"
        })
            .then(() => { console.log(`Notificações enviadas ${id}`); })
            .catch();
    }
};
createNews(news) // criar noticia
    .then(getAllSubscribers) // buscar assinantes
    .then(getSubscribersIds) // extrair id's (etapa síncrona)
    .then(notifyAllSubscribers); // enviar notificacoes

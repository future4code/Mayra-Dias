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
const connection_1 = __importDefault(require("./connection"));
const app_1 = __importDefault(require("./app"));
const getActorById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield connection_1.default.raw(`
     SELECT * FROM Actor WHERE id = '${id}'
  `);
    return result[0][0];
});
getActorById("001")
    .then(result => {
    console.log(result);
})
    .catch(err => {
    console.log(err);
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log(yield getActorById("001"));
}))();
app_1.default.get("/users/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        console.log(yield getActorById(id));
        res.end();
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Unexpected error");
    }
}));
//# sourceMappingURL=index.js.map
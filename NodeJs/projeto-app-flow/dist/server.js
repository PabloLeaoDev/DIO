"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const http = __importStar(require("http"));
const pod_controll_1 = require("./controllers/pod-controll");
const server = http.createServer((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    const [baseUrl, queryString] = (_b = (_a = req.url) === null || _a === void 0 ? void 0 : _a.split('?')) !== null && _b !== void 0 ? _b : ['', ''];
    if (req.method === 'GET' && baseUrl === ((_c = req.url) === null || _c === void 0 ? void 0 : _c.split('?')[0])) {
        yield (0, pod_controll_1.getListEpsodes)(req, res);
    }
    else if (req.method === 'GET' && baseUrl === ((_d = req.url) === null || _d === void 0 ? void 0 : _d.split('?')[0])) {
        yield (0, pod_controll_1.getFilterEpsodes)(req, res);
    }
}));
const port = process.env.PORT;
server.listen(port, () => {
    console.log(`Servidor criado na porta ${port}.`);
});
//# sourceMappingURL=server.js.map
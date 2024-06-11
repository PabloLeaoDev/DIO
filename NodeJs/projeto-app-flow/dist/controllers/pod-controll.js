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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFilterEpsodes = exports.getListEpsodes = void 0;
const list_ep_service_1 = require("../services/list-ep-service");
const filter_ep_service_1 = require("../services/filter-ep-service");
// contoller anêmico: não tem regras de negócio, pois está tudo nos services.
const getListEpsodes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const content = yield (0, list_ep_service_1.serviceListEpisodes)();
    res.writeHead(200, { 'content-type': 'application/json' });
    res.end(JSON.stringify(content));
});
exports.getListEpsodes = getListEpsodes;
const getFilterEpsodes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const queryString = (_b = (_a = req.url) === null || _a === void 0 ? void 0 : _a.split('?p=')[1]) !== null && _b !== void 0 ? _b : '';
    const content = yield (0, filter_ep_service_1.serviceFilterEpsodes)(queryString);
    res.writeHead(200, { 'content-type': 'application/json' });
    res.end(JSON.stringify(content));
});
exports.getFilterEpsodes = getFilterEpsodes;
//# sourceMappingURL=pod-controll.js.map
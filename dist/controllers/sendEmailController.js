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
exports.createEmail = void 0;
const sendEmailService_1 = require("../services/sendEmailService");
const createEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        if (!body || !body.nome || !body.email || !body.motivo || !body.mensagem) {
            return res.status(400).json({ msg: "Dados incompletos" });
        }
        yield (0, sendEmailService_1.enviarEmail)(body);
        res.status(200).json({ ok: true, message: "Mensagem enviada com sucesso!" });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ ok: false, error: "Erro ao enviar email" });
    }
});
exports.createEmail = createEmail;

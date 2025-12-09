"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEmail = void 0;
const sendEmailService_1 = require("../services/sendEmailService");
const createEmail = async (req, res) => {
    try {
        const body = req.body;
        if (!body || !body.nome || !body.email || !body.motivo || !body.mensagem) {
            return res.status(400).json({ msg: "Dados incompletos" });
        }
        await (0, sendEmailService_1.enviarEmail)(body);
        res.status(200).json({ ok: true, message: "Mensagem enviada com sucesso!" });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ ok: false, error: "Erro ao enviar email" });
    }
};
exports.createEmail = createEmail;

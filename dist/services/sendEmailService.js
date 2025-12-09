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
exports.enviarEmail = enviarEmail;
const resend_1 = require("resend");
const resend = new resend_1.Resend(process.env.RESEND_API_KEY);
function enviarEmail(body) {
    return __awaiter(this, void 0, void 0, function* () {
        yield resend.emails.send({
            from: "Contato Portfolio <devrafaael@gmail.com>",
            to: "devrafaael@gmail.com",
            subject: `Novo contato: ${body.motivo}`,
            html: `
      <h2>Novo contato no formulário</h2>
      <p><strong>Nome:</strong> ${body.nome}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      <p><strong>Motivo:</strong> ${body.motivo}</p>
      <p><strong>Mensagem:</strong> ${body.mensagem}</p>
    `
        });
    });
}

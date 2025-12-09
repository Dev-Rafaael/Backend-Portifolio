"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enviarEmail = enviarEmail;
const resend_1 = require("resend");
const resend = new resend_1.Resend(process.env.RESEND_API_KEY);
async function enviarEmail(body) {
    await resend.emails.send({
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
}

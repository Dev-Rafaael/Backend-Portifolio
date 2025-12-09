
import { Resend } from "resend";
import { Email } from "../model/sendEmail-model";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function enviarEmail(body:Email) {
  await resend.emails.send({
    from: "Contato Portfolio <onboarding@resend.dev>",
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

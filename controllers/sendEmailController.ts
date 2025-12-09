import { Request,Response } from "express";
import { enviarEmail } from "../services/sendEmailService";
import { Email } from "../model/sendEmail-model";



export const createEmail = async(req:Request,res:Response) =>{
      try {
        const body: Email = req.body;
          if (!body || !body.nome || !body.email || !body.motivo || !body.mensagem) {
      return res.status(400).json({ msg: "Dados incompletos" });
    }

        await enviarEmail(body);
    
        res.status(200).json({ ok: true, message: "Mensagem enviada com sucesso!" });
    
      } catch (err) {
        console.error(err);
        res.status(500).json({ ok: false, error: "Erro ao enviar email" });
      }
}
import express from "express";
import cors from "cors";
import router from "./routes/contato";



const app = express()

app.use(router)
app.use(express.json())
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://seu-dominio-do-front.com", // depois coloca o seu domínio real
      "https://rafael-moraes-info.vercel.app" 
    ],
    methods: ["GET", "POST"],
  })
);

app.listen(3000,()=> 'Ouvindo na Porta 3000')
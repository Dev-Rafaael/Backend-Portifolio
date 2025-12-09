import express from "express";
import cors from "cors";
import router from "./routes/contato";



const app = express()

app.use(router)
app.use(express.json())
app.use(cors())
app.listen(3000,()=> 'Ouvindo na Porta 3000')
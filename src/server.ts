import express from "express";
import cors from "cors";
import router from "./routes/contato";



const app = express()

app.use(router)
app.use(cors({
    origin: [
        "http://localhost:5173/",
        "https://rafael-moraes-info.vercel.app/"
    ]
}));
app.use(express.json())


app.listen(3000,()=> 'Ouvindo na Porta 3000')
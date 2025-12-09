import express from "express";
import { createEmail } from "../controllers/sendEmailController";

const router = express.Router();

router.post("/contato",createEmail);

export default router;

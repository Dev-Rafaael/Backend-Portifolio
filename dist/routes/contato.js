"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sendEmailController_1 = require("../controllers/sendEmailController");
const router = express_1.default.Router();
router.post("/contato", sendEmailController_1.createEmail);
exports.default = router;

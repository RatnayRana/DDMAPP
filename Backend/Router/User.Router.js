import express from "express";
import { Router } from "express";
import { registerUser,loginUser } from "../controller/RegisterUser.js";
import registerValidator from '../Helper/UserValidator.js'

const router = Router()
router.post("/register", registerValidator, registerUser);
router.post("/login", loginUser	);

export default router
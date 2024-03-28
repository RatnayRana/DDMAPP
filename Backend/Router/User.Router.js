import express from "express";
import { Router } from "express";
import { registerUser } from "../controller/RegisterUser.js";

const router = Router()
router.route("/register").post(registerUser)


export default router
import { Router } from "express";
import { anonymize } from "../controllers/anonymize.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/").post(verifyJWT, anonymize);

export default router;

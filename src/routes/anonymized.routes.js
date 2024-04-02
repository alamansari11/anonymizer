import { Router } from "express";
import { anonymize } from "../controllers/anonymize.controller.js";

const router = Router();

router.route("/").get(anonymize);

export default router;

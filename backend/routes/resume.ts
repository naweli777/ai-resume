import { Router } from "express";
import { addBasicInfo } from "../controllers/resumeController.js";

const resumeRouter = Router();

//@ts-ignore
resumeRouter.post("/basicInfo", addBasicInfo);

export default resumeRouter;

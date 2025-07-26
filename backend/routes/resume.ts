import { Router } from "express";
import { addBasicInfo } from "../controllers/resumeController.js";
import { uploadResume, upload } from "../controllers/resumeController.js";

const resumeRouter = Router();

//@ts-ignore
resumeRouter.post("/basicInfo", addBasicInfo);

//@ts-ignore
resumeRouter.post("/upload", upload.single("resumeFile"), uploadResume);


export default resumeRouter;

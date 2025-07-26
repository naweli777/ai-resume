import { TBasicInfo } from "../models/schema.js";
import { Request, Response } from "express";
import * as resumeService from "../services/resumeService.js";
import multer from 'multer'


export const upload = multer({ dest: "./uploads" });

export const uploadResume = async (req: Request, res: Response) => {
  try {
    const file = req.file;

    if (!file) {
      return res.status(400).json({ message: "No file uploaded." });
    }

    // Extract plain text from file
    const plainText = await resumeService.extractTextFromResume(file);

    // Send the plainText to GPT (or resume parser)
    const extractedInfo = await resumeService.parseResumeWithAI(plainText);

    return res.json({ data: extractedInfo });
  } catch (err) {
    console.error("Resume upload error:", err);
    res.status(500).json({ message: "Server error while parsing resume." });
  }
};
export const addBasicInfo = async (
  req: Request<{}, {}, TBasicInfo>,
  res: Response
) => {
  try {
    const {
        userId,
      name,
      email,
      collegeName,
      address,
      linkedin,
      github,
      otherLink,
      portfolio,
      phone,
      skills
    } = req.body;

    if (
        !userId||
      !name ||
      !email ||
      !collegeName ||
      !address ||
      !linkedin ||
      !github ||
      !skills ||
      !otherLink ||
      !portfolio ||
      !phone
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const BasicInfo = {
        userId,
      name,
      email,
      collegeName,
      address,
      linkedin,
      github,
      skills,
      otherLink,
      phone,
      portfolio,
    };
    await resumeService.addBasicInfo(BasicInfo as TBasicInfo);
    return res.status(200).json({ message: "Basic Info added successfully" });
  } catch (err) {
    console.log("Error adding basic info:" ,err);
    return res.status(500).json({error:"Internal Server Error"})
  }
};

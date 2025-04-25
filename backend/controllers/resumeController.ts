import { TBasicInfo } from "../models/schema.js";
import { Request, Response } from "express";
import * as resumeService from "../services/resumeService.js";


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

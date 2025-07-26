import db from "../db/db.js";
import { BasicInfo, TBasicInfo } from "../models/schema.js";
// import pdfParse from "pdf-parse";
import mammoth from "mammoth";
import openai from "../utils/openai.js"; // assumes setup done

export const addBasicInfo = async (basicInfo: TBasicInfo) => {
  await db.insert(BasicInfo).values(basicInfo);
};

export const extractTextFromResume = async (
  file: Express.Multer.File
): Promise<string> => {
  const mimetype = file.mimetype;

  if (mimetype === "application/pdf") {
    // const data = await pdfParse(file.buffer);
    // return data.text;
    return "";
  } else if (
    mimetype ===
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  ) {
    const { value } = await mammoth.extractRawText({ buffer: file.buffer });
    return value;
  } else {
    throw new Error("Unsupported file type");
  }
};

export const parseResumeWithAI = async (resumeText: string): Promise<any> => {
  const prompt = `
Extract the following information from the resume:
- Full Name
- Email
- Phone
- Skills (as array)
- Education
- LinkedIn
- GitHub

Return a JSON like:
{
  "fullName": "",
  "email": "",
  "phone": "",
  "skills": [],
  "education": "",
  "linkedin": "",
  "github": ""
}

Resume:
${resumeText}
`;

  const chatResponse = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [{ role: "user", content: prompt }],
    temperature: 0,
  });

  try {
    return JSON.parse(chatResponse.choices[0].message.content || "{}");
  } catch {
    throw new Error("Failed to parse GPT response.");
  }
};

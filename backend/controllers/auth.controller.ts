// import { Request, Response } from "express";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
// import  Users  from "../models/schema.js";
// import { eq } from "drizzle-orm";
// import  {db}  from "../db/db.js";

// export const register = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const { name, email, password } = req.body;

//     const existingUser = await db
//       .select()
//       .from(Users)
//       .where(eq(Users.email, email));

//     if (existingUser.length) {
//       res.status(400).json({ message: "User already exists" });
//       return;
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);
//     await db.insert(Users).values({ name, email, password: hashedPassword });

//     res.status(201).json({ message: "User registered successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };


// export const login = async (req: Request, res: Response): Promise<Response> => {
//   try {
//     const { email, password } = req.body;

//     // Correctly pass the Users table reference here
//     const user = await db
//       .select()
//       .from(Users)  // Use the Users table reference, not a string
//       .where(eq(Users.email, email));

//     if (!user.length) {
//       return res.status(400).json({ message: "Invalid credentials" });
//     }

//     const isMatch = await bcrypt.compare(password, user[0].password);
//     if (!isMatch) {
//       return res.status(400).json({ message: "Invalid credentials" });
//     }

//     const token = jwt.sign({ id: user[0].id }, process.env.JWT_SECRET!, {
//       expiresIn: "1h",
//     });

//     res.json({ token });
//   } catch (error) {
//     console.error("Error during login:", error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };
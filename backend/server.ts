import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import  resumeRouter  from "./routes/resume.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running");
});


app.use("/api/resume", resumeRouter);

app.listen(PORT, () => {
  console.log(`Server Running On PORT ${PORT}`);
});
export default app;
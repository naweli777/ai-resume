<<<<<<< HEAD
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const Dashboard = () => {
=======
'use client'
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";

const Dashboard = () => {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [parsedData, setParsedData] = useState<any>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!resumeFile) {
      alert("Please select a resume file.");
      return;
    }

    const formData = new FormData();
    formData.append("resumeFile", resumeFile);

    try {
      const res = await fetch("http://localhost:5000/api/resume/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setParsedData(data.data);
      console.log("Parsed Resume Info:", data);
    } catch (error) {
      console.error("Upload failed", error);
    }
  };
>>>>>>> 3a78735 (UI Uodate)
  return (
    <Paper
      sx={{
        maxWidth: 1000,
        margin: "auto",
        mt: 4,
        p: 4,
      }}
    >
      <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold" }}>
        Your Basic Info
      </Typography>

      <form action="/upload" method="post" encType="multipart/form-data">
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
<<<<<<< HEAD
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              typeof="upload"
            >
              Upload files
            </Button>
=======
           <input type="file" name="resumeFile" onChange={handleFileChange} />
          <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>
            Upload Resume
          </Button>
>>>>>>> 3a78735 (UI Uodate)
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            {" "}
            <TextField
              id="name"
              label="Name"
              type="text"
              fullWidth
              variant="filled"
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            {" "}
            <TextField
              id="email"
              label="Email"
              type="email"
              fullWidth
              variant="filled"
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            {" "}
            <TextField
              id="college"
              label="College"
              type="text"
              fullWidth
              variant="filled"
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            {" "}
            <TextField
              id="linkedin"
              label="LinkedIn"
              type="url"
              fullWidth
              variant="filled"
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            {" "}
            <TextField
              id="github"
              label="GitHub"
              type="url"
              fullWidth
              variant="filled"
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            {" "}
            <TextField
              id="portfolio"
              label="Portfolio"
              type="url"
              fullWidth
              variant="filled"
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            {" "}
            <TextField
              id="phone"
              label="Phone"
              type="tel"
              fullWidth
              variant="filled"
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            {" "}
            <TextField
              id="skills"
              label="Skills"
              type="text"
              fullWidth
              variant="filled"
              multiline
              rows={2}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              id="filled-multiline-static"
              label="Address"
              multiline
              rows={4}
              variant="filled"
              fullWidth
            />
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default Dashboard;

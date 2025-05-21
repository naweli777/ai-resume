import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const Dashboard = () => {
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
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              typeof="upload"
            >
              Upload files
            </Button>
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

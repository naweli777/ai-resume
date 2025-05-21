import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography,
  Stack,
  List,
  ListItem,
  ListItemIcon,
} from "@mui/material";
import React from "react";
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

const SignUpScreen = () => {
  return (
    <Paper
      sx={{
        maxWidth: 800,
        margin: "auto",
        mt: 4,
        // p: 4,
        boxShadow: 3,
      }}
    >
      <Grid container spacing={4}>
        {/* Left Side - Login Form */}
        <Grid size={{ xs:12 ,md:6}} sx={{p:4}}>
          <Typography variant="h4" gutterBottom fontWeight="bold">
            Signup
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            Sign-In to continue building your professional resume
          </Typography>

          <Box component="form" sx={{ mt: 3 }}>
            <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
             Name
            </Typography>
            <TextField
              fullWidth
              placeholder="Enter your email"
              variant="outlined"
              size="small"
              sx={{ mb: 2 }}
            />

            <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
              Email Address
            </Typography>
            <TextField
              fullWidth
              placeholder="Enter your password"
              type="password"
              variant="outlined"
              size="small"
              sx={{ mb: 2 }}
            />
  <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
             Password
            </Typography>
            <TextField
              fullWidth
              placeholder="Enter your password"
              type="password"
              variant="outlined"
              size="small"
              sx={{ mb: 2 }}
            />

 

            <Button
              fullWidth
              variant="contained"
              size="large"
              sx={{ mb: 2 }}
              endIcon="→"
            >
              Sign Up
            </Button>

            <Divider sx={{ my: 2 }}>Or continue with</Divider>

            {/* <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
              <Button
                variant="outlined"
                startIcon={<GoogleIcon />}
                fullWidth
              >
                Google
              </Button>
              <Button
                variant="outlined"
                startIcon={<LinkedInIcon />}
                fullWidth
              >
                LinkedIn
              </Button>
            </Stack> */}
          </Box>
        </Grid>

        {/* Right Side - Resume Info */}
        <Grid size={{ xs:12 ,md:6}} sx={{background:'lightBlue', p:4}}>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignContent:'space-between'
            }}
          >
            <Typography variant="h4" gutterBottom fontWeight="bold" color="white">
              Welcome Back
            </Typography>
            <Typography variant="subtitle1"  color="white" gutterBottom >
              Join thousands of professionals who trust our AI-powered resume builder
            </Typography>

            <List>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <RadioButtonCheckedIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <Typography variant="body1">AI-powered resume suggestions</Typography>
              </ListItem>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <RadioButtonCheckedIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <Typography variant="body1">Professional templates</Typography>
              </ListItem>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <RadioButtonCheckedIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <Typography variant="body1">ATS-friendly formats</Typography>
              </ListItem>
            </List>

          

            <Button
              variant="contained"
              color="secondary"
              size="large"
              sx={{ mt: 2, alignSelf: "flex-start" }}
            >
              Login Account
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default SignUpScreen;
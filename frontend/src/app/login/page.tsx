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
<<<<<<< HEAD
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

const LoginScreen = () => {
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
            Welcome Back!
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            Login to continue building your professional resume
          </Typography>

          <Box component="form" sx={{ mt: 3 }}>
            <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
              Email Address
            </Typography>
            <TextField
              fullWidth
              placeholder="Enter your email"
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

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 3,
              }}
            >
              <FormControlLabel
                control={<Checkbox />}
                label="Remember me"
                sx={{ "& .MuiTypography-root": { fontSize: 14 } }}
              />
              <Typography
                variant="body2"
                color="primary"
                sx={{ cursor: "pointer" }}
              >
                Forgot Password?
              </Typography>
            </Box>

            <Button
              fullWidth
              variant="contained"
              size="large"
              sx={{ mb: 2 }}
              endIcon="→"
            >
              Login
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
              Create Your Professional Resume
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
              Create Account
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default LoginScreen;
=======
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";

interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

const LoginScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<LoginFormData>({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      console.log("Form data:", data);
      // Here you would typically make an API call to authenticate the user
      // const response = await fetch('/api/auth/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // });

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Handle successful login
      console.log("User logged in successfully!");
      // You can redirect to dashboard here
    } catch (error) {
      console.error("Login error:", error);
      // Handle error (show toast, etc.)
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        p: 2,
      }}
    >
      <Paper
        sx={{
          maxWidth: 1000,
          width: "100%",
          borderRadius: 4,
          overflow: "hidden",
          boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
        }}
      >
        <Box
          sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
        >
          {/* Left Side - Login Form */}
          <Box
            sx={{
              flex: { xs: "1", md: "1 1 50%" },
              p: 6,
              backgroundColor: "#ffffff",
            }}
          >
            <Box sx={{ maxWidth: 400, mx: "auto" }}>
              <Typography
                variant="h3"
                gutterBottom
                fontWeight="700"
                sx={{
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontFamily:
                    '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
                  mb: 1,
                }}
              >
                Welcome Back!
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                gutterBottom
                sx={{
                  mb: 4,
                  fontFamily:
                    '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
                  fontSize: "1.1rem",
                }}
              >
                Login to continue building your professional resume
              </Typography>

              <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                sx={{ mt: 3 }}
              >
                <Typography
                  variant="subtitle2"
                  fontWeight="600"
                  gutterBottom
                  sx={{
                    color: "#374151",
                    fontFamily:
                      '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
                    mb: 1,
                  }}
                >
                  Email Address
                </Typography>
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Please enter a valid email address",
                    },
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      placeholder="Enter your email address"
                      variant="outlined"
                      size="medium"
                      error={!!errors.email}
                      helperText={errors.email?.message}
                      sx={{
                        mb: 3,
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 3,
                          backgroundColor: "#f9fafb",
                          "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#667eea",
                          },
                          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#667eea",
                            borderWidth: 2,
                          },
                          "&.Mui-error .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#d32f2f",
                          },
                        },
                        "& .MuiInputBase-input": {
                          fontFamily:
                            '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
                          fontSize: "1rem",
                        },
                        "& .MuiFormHelperText-root": {
                          fontFamily:
                            '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
                          fontSize: "0.875rem",
                        },
                      }}
                    />
                  )}
                />

                <Typography
                  variant="subtitle2"
                  fontWeight="600"
                  gutterBottom
                  sx={{
                    color: "#374151",
                    fontFamily:
                      '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
                    mb: 1,
                  }}
                >
                  Password
                </Typography>
                <Controller
                  name="password"
                  control={control}
                  rules={{
                    required: "Password is required",
                    minLength: {
                      value: 1,
                      message: "Password is required",
                    },
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      placeholder="Enter your password"
                      type="password"
                      variant="outlined"
                      size="medium"
                      error={!!errors.password}
                      helperText={errors.password?.message}
                      sx={{
                        mb: 3,
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 3,
                          backgroundColor: "#f9fafb",
                          "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#667eea",
                          },
                          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#667eea",
                            borderWidth: 2,
                          },
                          "&.Mui-error .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#d32f2f",
                          },
                        },
                        "& .MuiInputBase-input": {
                          fontFamily:
                            '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
                          fontSize: "1rem",
                        },
                        "& .MuiFormHelperText-root": {
                          fontFamily:
                            '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
                          fontSize: "0.875rem",
                        },
                      }}
                    />
                  )}
                />

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 3,
                  }}
                >
                  <Controller
                    name="rememberMe"
                    control={control}
                    render={({ field }) => (
                      <FormControlLabel
                        control={
                          <Checkbox
                            {...field}
                            checked={field.value}
                            sx={{
                              "&.Mui-checked": {
                                color: "#667eea",
                              },
                            }}
                          />
                        }
                        label={
                          <Typography
                            sx={{
                              fontSize: 14,
                              fontFamily:
                                '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
                              color: "#374151",
                            }}
                          >
                            Remember me
                          </Typography>
                        }
                      />
                    )}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      cursor: "pointer",
                      color: "#667eea",
                      fontFamily:
                        '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
                      fontWeight: 500,
                      "&:hover": {
                        color: "#5a6fd8",
                        textDecoration: "underline",
                      },
                    }}
                  >
                    Forgot Password?
                  </Typography>
                </Box>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="large"
                  disabled={isSubmitting}
                  sx={{
                    mb: 3,
                    borderRadius: 3,
                    py: 1.5,
                    background:
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    fontFamily:
                      '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
                    fontWeight: 600,
                    fontSize: "1.1rem",
                    textTransform: "none",
                    boxShadow: "0 4px 14px rgba(102, 126, 234, 0.4)",
                    "&:hover": {
                      background:
                        "linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)",
                      boxShadow: "0 6px 20px rgba(102, 126, 234, 0.6)",
                    },
                    "&:disabled": {
                      background: "#e0e0e0",
                      color: "#757575",
                      boxShadow: "none",
                    },
                  }}
                  endIcon={isSubmitting ? "⏳" : "→"}
                >
                  {isSubmitting ? "Logging in..." : "Login"}
                </Button>

                <Divider sx={{ my: 3 }}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      fontFamily:
                        '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
                      px: 2,
                    }}
                  >
                    Or continue with
                  </Typography>
                </Divider>
              </Box>
            </Box>
          </Box>

          {/* Right Side - Create Account Promotion */}
          <Box
            sx={{
              flex: { xs: "1", md: "1 1 50%" },
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              p: 6,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              position: "relative",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background:
                  'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                opacity: 0.3,
              },
            }}
          >
            <Box sx={{ position: "relative", zIndex: 1 }}>
              <Typography
                variant="h3"
                gutterBottom
                fontWeight="700"
                color="white"
                sx={{
                  fontFamily:
                    '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
                  mb: 2,
                  textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                }}
              >
                Create Your Professional Resume
              </Typography>
              <Typography
                variant="h6"
                color="white"
                gutterBottom
                sx={{
                  fontFamily:
                    '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
                  mb: 4,
                  opacity: 0.9,
                  lineHeight: 1.6,
                }}
              >
                Join thousands of professionals who trust our AI-powered resume
                builder
              </Typography>

              <List sx={{ mb: 4 }}>
                <ListItem disableGutters sx={{ mb: 2 }}>
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    <Box
                      sx={{
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        backgroundColor: "rgba(255,255,255,0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <RadioButtonCheckedIcon
                        sx={{ color: "white", fontSize: 20 }}
                      />
                    </Box>
                  </ListItemIcon>
                  <Typography
                    variant="body1"
                    color="white"
                    sx={{
                      fontFamily:
                        '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
                      fontWeight: 500,
                      fontSize: "1.1rem",
                    }}
                  >
                    AI-powered resume suggestions
                  </Typography>
                </ListItem>
                <ListItem disableGutters sx={{ mb: 2 }}>
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    <Box
                      sx={{
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        backgroundColor: "rgba(255,255,255,0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <RadioButtonCheckedIcon
                        sx={{ color: "white", fontSize: 20 }}
                      />
                    </Box>
                  </ListItemIcon>
                  <Typography
                    variant="body1"
                    color="white"
                    sx={{
                      fontFamily:
                        '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
                      fontWeight: 500,
                      fontSize: "1.1rem",
                    }}
                  >
                    Professional templates
                  </Typography>
                </ListItem>
                <ListItem disableGutters sx={{ mb: 2 }}>
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    <Box
                      sx={{
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        backgroundColor: "rgba(255,255,255,0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <RadioButtonCheckedIcon
                        sx={{ color: "white", fontSize: 20 }}
                      />
                    </Box>
                  </ListItemIcon>
                  <Typography
                    variant="body1"
                    color="white"
                    sx={{
                      fontFamily:
                        '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
                      fontWeight: 500,
                      fontSize: "1.1rem",
                    }}
                  >
                    ATS-friendly formats
                  </Typography>
                </ListItem>
              </List>

              <Link href={"/signup"}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    borderRadius: 3,
                    py: 1.5,
                    px: 4,
                    backgroundColor: "rgba(255,255,255,0.2)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.3)",
                    fontFamily:
                      '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
                    fontWeight: 600,
                    fontSize: "1.1rem",
                    textTransform: "none",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.3)",
                      border: "1px solid rgba(255,255,255,0.5)",
                    },
                  }}
                >
                  Create Account
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default LoginScreen;
>>>>>>> 3a78735 (UI Uodate)

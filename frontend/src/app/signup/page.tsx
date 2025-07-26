"use client";

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
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";

interface SignUpFormData {
  fullName: string;
  email: string;
  password: string;
}

const SignUpScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<SignUpFormData>({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: SignUpFormData) => {
    try {
      console.log("Form data:", data);
      // Here you would typically make an API call to register the user
      // const response = await fetch('/api/auth/signup', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // });

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Handle successful registration
      console.log("User registered successfully!");
      // You can redirect to login or dashboard here
    } catch (error) {
      console.error("Registration error:", error);
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
          {/* Left Side - Signup Form */}
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
                Create Account
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
                Join us to start building your professional resume
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
                  Full Name
                </Typography>
                <Controller
                  name="fullName"
                  control={control}
                  rules={{
                    required: "Full name is required",
                    minLength: {
                      value: 2,
                      message: "Full name must be at least 2 characters",
                    },
                    pattern: {
                      value: /^[a-zA-Z\s]+$/,
                      message: "Full name can only contain letters and spaces",
                    },
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      placeholder="Enter your full name"
                      variant="outlined"
                      size="medium"
                      error={!!errors.fullName}
                      helperText={errors.fullName?.message}
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
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                    pattern: {
                      value:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
                      message:
                        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
                    },
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      placeholder="Create a strong password"
                      type="password"
                      variant="outlined"
                      size="medium"
                      error={!!errors.password}
                      helperText={errors.password?.message}
                      sx={{
                        mb: 4,
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
                  {isSubmitting ? "Creating Account..." : "Create Account"}
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

          {/* Right Side - Welcome Info */}
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
                Welcome Back!
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

              <Link href={"/login"}>
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
                  Login Account
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default SignUpScreen;

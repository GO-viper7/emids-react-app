import {
  Container,
  Grid,
  Box,
  TextInput,
  PasswordInput,
  Button,
  Text,
  Checkbox,
  MediaQuery,
  NumberInput,
  Group,
  Card
} from "@mantine/core";
import { Link, useNavigate, Navigate, useLocation } from "react-router-dom";
import { useForm } from "@mantine/form";
import React, { useState, useContext } from "react";
import validator from "validator";
import { showNotification } from "@mantine/notifications";
import { AuthContext } from "../Context/AuthContext";
import "./login.css"
import notlogo from './hospital-login.svg'
const Register = () => {
  const {login, user} = useContext(AuthContext);
 
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();

  const form = useForm({
    validateInputOnChange: true,
    initialValues: {
      email: "",
      password: "",
      remember: false 
    },
    validate: {
      email: (value) => (validator.isEmail(value) ? null : "Invalid Email"),
      password: (value) =>
        value.length >= 8
          ? null
          : "Password must be at least 8 characters long",
    },
  });
  const handleSubmit = async (values) => {
    setLoading(true);
    console.log(values);
    const res = await login({
      email: values.email,
      password: values.password,
      remember: false
    });
    if (res) {
      showNotification({
        title: "Success",
        message: "You have been logged successfully",
        color: "teal",
        autoClose: 2000,
      });
      navigate("/");
    } else {
      showNotification({
        title: "Error",
        message: "Something went wrong",
        color: "red",
        autoClose: 2000,
      });
    }
    console.log(res);
    setLoading(false);
  };
  if (user) {
    return <Navigate to={location.state?.from || "/"} replace />;
  }

  return (
    <>
    <div className="main">
    <div className="left-div">
      <img src={notlogo} style={{paddingTop:'16%'}} />
    </div>
    <div className="right-div">
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Grid>
            <Grid.Col>
              <Box shadow="xl" withBorder>
                <Text size="xl" weight={700} align="center">
                  Login
                </Text>

                <TextInput
                  placeholder="Email"
                  label="Email"
                  withAsterisk
                  required
                  {...form.getInputProps("email")} />



                <PasswordInput
                  placeholder="Password"
                  label="Password"
                  withAsterisk
                  required
                  {...form.getInputProps("password")} />


                <br />
                <Checkbox
                  label="Keep me signed in"
                  {...form.getInputProps("remember", { type: "checkbox" })} />
                <Button
                  type="submit"
                  fullWidth
                  variant="light"
                  color="blue"
                  loading={loading}
                >
                  Login
                </Button>
                <Text align="center" size="sm">
                  Don't have an account?{" "}
                  <Link to="/register" style={{ color: "#3b82f6" }}>
                    Sign-up
                  </Link>
                </Text>

              </Box>
            </Grid.Col>
          </Grid>
        </form>
      </div>
      </div>
      </>

  );
};

export default Register;

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

const Register = () => {
  const {signup, user} = useContext(AuthContext);
  console.log(user)
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();

  const form = useForm({
    validateInputOnChange: true,
    initialValues: {
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
      specializations: "",
      experience: '',
      toc: false,
    },
    validate: {
      fullname: (value) => (value !== '' ? null : 'Full Name is required'),
      email: (value) => (validator.isEmail(value) ? null : "Invalid Email"),
      password: (value) =>
        value.length >= 8
          ? null
          : "Password must be at least 8 characters long",
      confirmPassword: (value, { password }) =>
        value === password ? null : "Passwords doesnt match",
      toc: (value) =>
        value ? null : "You must agree to our terms and conditions",
    },
  });
  const handleSubmit = async (values) => {
    setLoading(true);
    console.log(values);
    const res = await signup({
      email: values.email,
      name: values.fullname,
      password: values.password,
      specializations: values.specializations,
      experience: values.experience,
    });
    if (res) {
      showNotification({
        title: "Success",
        message: "You have been registered successfully",
        color: "teal",
        autoClose: 2000,
      });
      navigate("/login");
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
    <Container size="sm"> 
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Grid>
          <Grid.Col>
            <Box shadow="xl" withBorder>
              <Text size="xl" weight={700} align="center">
                Register
              </Text>
              <TextInput
                placeholder="Full Name"
                label="Full Name"
                withAsterisk
                required
                {...form.getInputProps("fullname")}
              />
              <Group>

              
              <TextInput
                placeholder="Specialization"
                label="Specialization"  
                withAsterisk
                required
                {...form.getInputProps("specializations")}
              />

              <NumberInput
                placeholder="Experience"
                label="Experience"
                withAsterisk
                required
                {...form.getInputProps("experience")}
              />
              </Group>
              <TextInput
                placeholder="Email"
                label="Email"
                withAsterisk  
                required
                {...form.getInputProps("email")}
              />
             

              
              <PasswordInput
                placeholder="Password"
                label="Password"  
                withAsterisk  
                required  
                {...form.getInputProps("password")}
              />
              <PasswordInput
                placeholder="Confirm Password"
                label="Confirm Password"
                withAsterisk
                required
                {...form.getInputProps("confirmPassword")}
              />
             
              <br />
              <Checkbox
                label="I agree to terms and conditions"
                {...form.getInputProps("toc", { type: "checkbox" })}
              />
              <Button
                type="submit"
                fullWidth   
                variant="light"
                color="blue"
                loading={loading}
              >
                Register
              </Button>
              <Text align="center" size="sm">
                Already have an account?{" "}
                <Link to="/login" style={{ color: "#3b82f6" }}>
                  Login
                </Link>
              </Text>

            </Box>
          </Grid.Col>
        </Grid>
      </form>
    </Container>

  );
};

export default Register;

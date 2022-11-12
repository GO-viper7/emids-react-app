import { Container, TextInput, Card, Group, Grid, Button } from "@mantine/core";
import { useNavigate } from 'react-router-dom'
import { useState } from "react";
import { createContext } from "react";

const Login = () => {
     const navigate = useNavigate()
     const [username, setUsername] = useState('')
     const [specialization, setSpecialization] = useState('')
     const [experience, setExperience] = useState('')
     const submitHandler = (e) => {
          e.preventDefault()
          localStorage.setItem('token', '123456')
          localStorage.setItem('userName', username);
          localStorage.setItem('specialization', specialization);
          localStorage.setItem('experience', experience);
          if(username==='' || specialization==='' || experience===''){
            navigate('/login')
          }
          else{
            navigate('/')
          }
     
      }
     return (
          <div>
            <Container>
              <h1>Login for Physicians</h1>
              <form>
                <Grid>
                  <Grid.Col>
                <Card shadow="xl" withBorder>
                
                <TextInput

                  placeholder="Full Name"
                  label="Full Name"
                  withAsterisk
                  required
                  onChange={(e) => {setUsername(e.target.value)}}
                />
                <TextInput
                  placeholder="Specialization"
                  label="Specialization"
                  withAsterisk
                  required
                  onChange={(e) => {setSpecialization(e.target.value)}}
                />

                <TextInput
                  placeholder="Experience"
                  label="Experience"
                  withAsterisk
                  required
                  onChange={(e) => {setExperience(e.target.value)}}
                />  
            </Card>
             </Grid.Col>
                </Grid>
                <br />
              <Button onClick={submitHandler}>
                Login
              </Button>
              </form>
            </Container>
                

          </div>
     )
}

export default Login;
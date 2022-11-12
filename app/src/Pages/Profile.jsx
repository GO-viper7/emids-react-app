import { NavbarMinimal } from "../Components/SideBar";
import { Divider, Grid, Textarea, Group, Button  } from '@mantine/core';
import { TextInput } from "@mantine/core";
import MedicationForm from "../Components/MedicationForm";
import { useLocation } from "react-router-dom";
import ProfileForm from "../Components/ProfileForm";
import Snippet from "../Components/Snippet";
import {  useEffect } from "react";


const Profile = () => {
    useEffect(() => {
        
    }, []);
    return (
      <>
        <NavbarMinimal />
        <div style={{width: "2000px" , height: '2000px'}}>
          <div style={{margin: '40px'}}>
            <h1 >
              Profile
            </h1>
            <Divider size="xs" /> 
            <Grid>
             <Grid.Col >
            <br />
              <ProfileForm />
            </Grid.Col>
            </Grid>
            <h1 >
              Saved Snippets
            </h1>
            <Divider size="xs" /> 
            <Grid>
             <Grid.Col >
            <br />
              <Snippet />
            </Grid.Col>
            </Grid>
          </div>
        </div>
      </>
    )
}

export default Profile;
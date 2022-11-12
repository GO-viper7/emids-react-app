import { NavbarMinimal } from "../Components/SideBar";
import { Divider, Grid, Textarea, Group, Button  } from '@mantine/core';
import { TextInput } from "@mantine/core";
import MedicationForm from "../Components/MedicationForm";
import { useLocation } from "react-router-dom";
const PreviousOrders = () => {
    const { state } = useLocation();
    return (
      <>
        <NavbarMinimal />
        <div style={{width: '1300px ', height: '1000px'}}>
          <div style={{margin: '40px'}}>
            <h1 >
              Prescription for {state.name}
            </h1>
            <Divider size="xs" /> 
            <Grid>
             <Grid.Col>
            <br />
             
            <form>
              
              <MedicationForm />
              
            </form>
            </Grid.Col>
            </Grid>
          </div>
        </div>
      </>
    )
}

export default PreviousOrders;
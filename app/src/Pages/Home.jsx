import { NavbarMinimal } from '../Components/SideBar';
import { Divider, Grid } from '@mantine/core';
import PatientCard from '../Components/PatientCard';

const Home = () => {
  const patients = [
    {
      name: 'B. Nithish Reddy',
      age: 20,
      appointment: '12:00 PM',
    },
    {
      name: 'k. Sarat',
      age: 22,
      appointment: '12:00 PM',
    },
    {
      name: 'N. Nitish',
      age: 26,
      appointment: '12:00 PM',
    },
  ]

  
  return (
    <>
      <NavbarMinimal />
        <div>
      
          <div style={{margin: '20px'}}>
            <h1 >
              Patients on {new Date().toDateString()}
            </h1>
            <Divider size="xs" />
            <br />  
            <Grid >
                {
                  patients.map((item) => {
                    return (
                      <Grid.Col  >
                        <PatientCard name={item.name} age={item.age} appointment={item.appointment}/>
                      </Grid.Col>
                    )
                  })
                }
            </Grid>
          </div>
        </div>
      </>
  )
}

export default Home;
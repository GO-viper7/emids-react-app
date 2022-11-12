import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  filterProps,
} from "@mantine/core";
import { Modal, useMantineTheme } from "@mantine/core";
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function PatientCard(props) {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();
  const navigate = useNavigate();
  return (
    <>
      <Card shadow="sm" p="lg" radius="md" withBorder>
        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>{props.name}</Text>
          <Badge color="pink" variant="light">
            Appointment {props.appointment}
          </Badge>
        </Group>

    
        <Text weight={400}>Age : {props.age} years old</Text>
      

        <Button variant="light" color="blue" fullWidth mt="md" radius="md" onClick={() => navigate('/emids', {state: props})}>
          Proceed
        </Button>
      </Card>
    </>
  );
}

export default PatientCard;

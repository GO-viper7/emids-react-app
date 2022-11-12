import {
  Divider,
  Grid,
  Textarea,
  Group,
  Button,
  Input,
  Card,
  Text,
  MultiSelect,
} from "@mantine/core";
import { TextInput } from "@mantine/core";
import {
  IconSearch,
  IconPlus,
  IconMinus,
  IconArrowAutofitLeft,
  IconArrowLeft,
} from "@tabler/icons";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";


const Snippet = () => {
  const snippets = 
    [
      {
        Name: "Viral-Fever",
        Medication: "Paracetamol",
        Dosage: "500mg",
        Frequency: "3 times a day",
        Route: "Oral",
        Instructions: "Take with food",
      },
      {
        Name: "Cough",
        Medication: "Ambroxol",
        Dosage: "500mg",
        Frequency: "3 times a day",
        Route: "5 days",
        Instructions: "Take with food",
      },
      {
        Name: "Motions",
        Medication: "Loperamide",
        Dosage: "2mg",
        Frequency: "3 times a day",
        Route: "Oral",
        Instructions: "Take with food",
      }
    ]
  return (
    <>
      {snippets.map((sus, index) => (
        
        <>
    <Card shadow="sm" withBorder key={index}>
          <h2>{sus.Name}</h2>
            <div>
              <Group>
                <TextInput
                  placeholder="Medication Name"
                  label="Medication Name"
                  value={sus["Medication"]}
                />
                <TextInput
                  placeholder="RXNormCode"
                  label="RXNormCode"
                  value="IDB24H"
                />
              </Group>
              <Group>
                <TextInput placeholder="Dosage" label="Dosage" value={sus["Dosage"]} />
                <TextInput placeholder="Route" Value="Oral" label={sus["Route"]} />
              </Group>
              <TextInput
                placeholder="Frequency"
                value={sus["Frequency"]}
                label="Frequency"
              />
              <div style={{ marginTop: "20px" }}>
                <Textarea
                  placeholder="Additional Instructions"
                  value={sus["Instructions"]}
                  label="Additional Instructions"
                />
              </div>
            </div>
            <div style={{ paddingTop: "7px" }}>
            
            </div>
          </Card>
          <br />
          </>
      ))}
      <Button>
        <IconPlus /> Add New Snippet
      </Button>
    </>
  );
};

export default Snippet;
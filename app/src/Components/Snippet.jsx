import {
  Divider,
  Grid,
  Textarea,
  Group,
  Button,
  Input,
  Card,
  Text,
  MultiSelect, Modal
} from "@mantine/core";
import { TextInput } from "@mantine/core";
import {
  IconSearch,
  IconPlus,
  IconMinus,
  IconArrowAutofitLeft,
  IconArrowLeft,
} from "@tabler/icons";
import { useState, createContext } from "react";
import { v4 as uuidv4 } from "uuid";

const Snippet = () => {
  const [ snippets, setSnippets ] = 
    useState([
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
        Name: "Cold",
        Medication: "Citrizine",
        Dosage: "2mg",
        Frequency: "1 times a day",
        Route: "Oral",
        Instructions: "Take with food",
      }
    ])
    const [medication, setMedication] = useState("");
    const [dosage, setDosage] = useState("");
    const [frequency, setFrequency] = useState("");
    const [route, setRoute] = useState("");
    const [opened, setOpened] = useState(false);
    const [instructions, setInstructions] = useState("");
    const [name, setName] = useState("");
  return (
    <>
    <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Add Snippet"
      >
        <Group>
                <TextInput
                  placeholder="Name"
                  label="Name"
                  value={name}
                  onChange={(e) => setName(e.currentTarget.value)}
                />
                <TextInput
                  placeholder="Medication Name"
                  label="Medication Name"
                  value={medication}
                  onChange={(e) => setMedication(e.currentTarget.value)}
                />
                <TextInput
                  placeholder="RXNormCode"
                  label="RXNormCode"
                  value="IDB24H"
                />
              </Group>
              <Group>
                <TextInput 
                placeholder="Dosage" 
                label="Dosage" 
                value={dosage}
                onChange={(e) => setDosage(e.currentTarget.value)}
                />
                <TextInput 
                placeholder="Route" 
                Value={route} 
                label="Route" 
                onChange={(e) => setRoute(e.currentTarget.value)}
                />
              </Group>
              <TextInput
                placeholder="Frequency"
                value={frequency}
                label="Frequency"
                onChange={(e) => setFrequency(e.currentTarget.value)}
              />
              <div style={{ marginTop: "20px" }}>
                <Textarea
                  placeholder="Additional Instructions"
                  value={instructions}
                  label="Additional Instructions"
                  onChange={(e) => setInstructions(e.currentTarget.value)}
                />
              </div>
              <br />
              <Button onClick={() => {
                 setOpened(false);
                  setSnippets([...snippets, {
                    Name: medication,
                    Medication: medication,
                    Dosage: dosage,
                    Frequency: frequency,
                    Route: route,
                    Instructions: instructions,
                  }])

              }}>
                Add
              </Button>
      </Modal>

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
      <Button onClick={() => setOpened(true)}>
        <IconPlus /> Add New Snippet
      </Button>
    </>
  );
};

export default Snippet;
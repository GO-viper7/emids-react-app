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

const MedicationForm = () => {
  const [inputFields, setInputFields] = useState([
    {
      id: uuidv4(),
      medicationName: "",
      RxNORM: "",
      dosage: "",
      frequency: "",
      route: "",
      instructions: "",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("InputFields", inputFields);
  };

  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });
    setInputFields(newInputFields);
  };

  const handleAddFields = () => {
    setInputFields([
      ...inputFields,
      {
        id: uuidv4(),
        medicationName: "",
        RxNORM: "",
        dosage: "",
        frequency: "",
        route: "",
        instructions: "",
      },
    ]);
  };

  const firstForm = () => {
    const newInputFields = inputFields.map((i, index) => {
      if (index == 0) {
        i["medicationName"] = "FU";
        i["RxNORM"] = "FU";
        i["dosage"] = "FU";
        i["frequency"] = "FU";
        i["route"] = "FU";
        i["instructions"] = "FU";
      }
      return i;
    });
    setInputFields(newInputFields);
  }


  const handleRemoveFields = (id) => {
    const values = [...inputFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputFields(values);
  };

  const pushData = (obj) => {
    setInputFields([
      ...inputFields,
      {
        id: uuidv4(),
        medicationName: obj.medicationName,
        RxNORM: obj.RxNORM,
        dosage: obj.dosage,
        frequency: obj.frequency,
        route: obj.route,
        instructions: obj.instructions,
      },
    ]);
  };

  return (
    <div style={{ display: "flex" }}>
      <Card>
        <form onSubmit={handleSubmit}>
         <div style={{ overflowY: "scroll", height: "500px" }}>
          {inputFields.map((inputField, index) => (
            <div>
              <Card shadow="sm" withBorder key={inputField.id}>
                <Group>
                <h2>Medicine {index + 1}</h2>
                {
                  index === 0 ? null : 
                    <Button color="red" variant="outline" onClick={() => handleRemoveFields(inputField.id)}>
                      Remove Medication
                    </Button>
                  
                }
                
                </Group>
                
                
                <Group>
                  <TextInput
                    name="medicationName"
                    placeholder="Medication Name"
                    label="Medication Name"
                    withAsterisk
                    value={inputField.medicationName}
                    onChange={(event) =>
                      handleChangeInput(inputField.id, event)
                    }
                  />
                  <TextInput
                    name="RxNORM"
                    placeholder="RXNormCode"
                    label="RXNormCode"
                    withAsterisk
                    value={inputField.RxNORM}
                    onChange={(event) =>
                      handleChangeInput(inputField.id, event)
                    }
                  />
                </Group>
                <Group>
                  <TextInput
                    name="dosage"
                    placeholder="Dosage"
                    label="Dosage"
                    withAsterisk
                    value={inputField.dosage}
                    onChange={(event) =>
                      handleChangeInput(inputField.id, event)
                    }
                  />
                  <TextInput
                    placeholder="Route"
                    label="Route"
                    withAsterisk
                    name="route"
                    value={inputField.route}
                    onChange={(event) =>
                      handleChangeInput(inputField.id, event)
                    }
                  />
                </Group>

                <TextInput
                  placeholder="Frequency"
                  label="Frequency"
                  withAsterisk
                  name="frequency"
                  value={inputField.frequency}
                  onChange={(event) => handleChangeInput(inputField.id, event)}
                />
                <div style={{ marginTop: "20px" }}>
                  <Textarea
                    placeholder="Additional Instructions"
                    label="Additional Instructions"
                    maxRows={7}
                    withAsterisk
                    name="instructions"
                    value={inputField.instructions}
                    onChange={(event) =>
                      handleChangeInput(inputField.id, event)
                    }
                  />
                </div>
              </Card>
              <br />
              <br />
            </div>
          ))}
          </div>
          <br />
          <Group>
            <Button color="green" variant="outline" onClick={handleAddFields}>
              Add Medication
            </Button>
          </Group>
          <br />
          <Group>
            <Button>Previous Medical History</Button>
            <Button
              color="blue"
              variant="outline"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Group>
        </form>
        <br />
      </Card>
      <div style={{ marginLeft: "100px" }}>
        <Group>
          <Button>Start Time</Button>
          <Text size="xl">0:00</Text>
        </Group>

        <h2>Suggestions</h2>
        <div style={{ overflowY: "scroll", height: "500px" }}>
        <Card shadow="sm" withBorder>
          <div>
            <Group>
              <TextInput
                placeholder="Medication Name"
                label="Medication Name"
                value="Medication Name"
              />
              <TextInput
                placeholder="RXNormCode"
                label="RXNormCode"
                value="IDB24H"
              />
            </Group>
            <Group>
              <TextInput placeholder="Dosage" label="Dosage" value="2 mg" />
              <TextInput placeholder="Route" Value="Oral" label="Route" />
            </Group>
            <TextInput
              placeholder="Frequency"
              value="Twice a day"
              label="Frequency"
            />
            <div style={{ marginTop: "20px" }}>
              <Textarea
                placeholder="Additional Instructions"
                value="Additional Instructions"
              />
            </div>
          </div>
          <div style={{ paddingTop: "7px" }}>
            {
              inputFields.length === 1 ? 
                <Button size="xs" onClick={() => firstForm()}><IconArrowLeft /></Button> :
                <Button size="xs" onClick={() => pushData({
                                        medicationName: "FU", 
                                        RxNORM: "FU", 
                                        dosage: "FU", 
                                        route: "FU", 
                                        frequency: "FU", 
                                        instructions: "FU"})}>
                    <IconArrowLeft />
                </Button>
            }
          </div>
        </Card>
        </div>
      </div>
    </div>
  );
};

export default MedicationForm;

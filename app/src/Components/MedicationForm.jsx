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
import Typewriter from 'typewriter-effect'

const MedicationForm = () => {
  const [suggestions, setSuggestions] = useState([
    {
      medicationName: "Paracetamol",
      dosage: "500mg",
      frequency: "3 times a day",
      route: "Oral",
      instructions: "Take with food",
      RxNORM: "RxNorm: 123456",
    },
    {
      medicationName: "cetirizine",
      dosage: "10mg",
      frequency: "2 times a day",
      route: "Oral",
      instructions: "Take with food",
      RxNORM: "RxNorm: 123456",
    },
    {
      medicationName: "Ibuprofen",
      dosage: "400mg",
      frequency: "3 times a day",
      route: "Oral",
      instructions: "Take with food",
      RxNORM: "RxNorm: 123456",
    },
    {
      medicationName: "Doxycycline",
      dosage: "100mg",
      frequency: "2 times a day",
      route: "Oral",
      instructions: "Take with food",
      RxNORM: "RxNorm: 123456",
    },
    {
      medicationName: "Amoxicillin",
      dosage: "500mg",
      frequency: "3 times a day",
      route: "Oral",
      instructions: "Take with food",
      RxNORM: "RxNorm: 123456",
    },
  ]);
  const mainSuggestions = suggestions;
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

  const firstForm = (obj) => {
    const newInputFields = inputFields.map((i, index) => {
      if (index === 0) {
        i["medicationName"] = suggestions[obj].medicationName;
        i["RxNORM"] = suggestions[obj].RxNORM;
        i["dosage"] = suggestions[obj].dosage;
        i["frequency"] = suggestions[obj].frequency;
        i["route"] = suggestions[obj].route;
        i["instructions"] = suggestions[obj].instructions;
      }
      return i;
    });
    setInputFields(newInputFields);
    setSuggestions((prev) => prev.filter((_, i) => i !== obj));
  };

  const handleRemoveFields = (id) => {
    const values = [...inputFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputFields(values);
  };

  const pushData = (obj) => {
    console.log(obj);
    setInputFields([
      ...inputFields,
      {
        id: uuidv4(),
        medicationName: suggestions[obj].medicationName,
        RxNORM: suggestions[obj].RxNORM,
        dosage: suggestions[obj].dosage,
        frequency: suggestions[obj].frequency,
        route: suggestions[obj].route,
        instructions: suggestions[obj].instructions,
      },
    ]);
    setSuggestions((prev) => prev.filter((_, i) => i !== obj));
  };
  // setInterval(() => {
  //    setSuggestions(mainSuggestions)
  // }, 1000);
  console.log(inputFields, suggestions);
  return (
    <div style={{ display: "flex" }}>
      <Card>
        <form onSubmit={handleSubmit}>
          <div
            className="test"
            style={{ overflowY: "scroll", height: "500px", width: "500px" }}
          >
            {inputFields.map((inputField, index) => (
              <div key={inputField.id}>
                <Card shadow="sm" withBorder>
                  <Group>
                    <h2>Medicine {index + 1}</h2>
                    {index === 0 ? null : (
                      <Button
                        color="red"
                        variant="outline"
                        onClick={() => handleRemoveFields(inputField.id)}
                      >
                        Remove Medication
                      </Button>
                    )}
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
                    onChange={(event) =>
                      handleChangeInput(inputField.id, event)
                    }
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
        
          <Group>
            <Button color="green" variant="outline" onClick={handleAddFields}>
              Add Medication
            </Button>
            <Button
              color="blue"
              variant="outline"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </Button>
            
          </Group>
          <br />
          <Group>
            <Button>Previous Medical History</Button>
            <Button color="blue" >
              Use Snippets
            </Button>
          </Group>
        </form>
        <br />
      </Card>
      <div style={{ marginLeft: "10px" }}>

        <h3>Suggestions</h3>
        <div
          className="test"
          style={{ overflowY: "scroll", height: "390px", width: "430px" }}
        >
          {suggestions.map((sus, index) => {
            return (
              <>
                <Card shadow="sm" withBorder key={index}>
                  <div>
                    <Group>
                      <TextInput
                        placeholder="Medication Name"
                        label="Medication Name"
                        value={sus.medicationName}
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
                        value={sus.dosage}
                      />
                      <TextInput
                        placeholder="Route"
                        Value="Oral"
                        label={sus.route}
                      />
                    </Group>
                    <Group>
                    <TextInput
                      placeholder="Frequency"
                      value={sus.frequency}
                      label="Frequency"
                    />
                    </Group>
                    
                    <div style={{ marginTop: "20px" }}>
                   
                    </div>
                  </div>
                  <div style={{ paddingTop: "7px" }}>
                    {inputFields.length === 1 &&
                    inputFields[0].medicationName === "" &&
                    inputFields[0].RxNORM === "" &&
                    inputFields[0].dosage === "" &&
                    inputFields[0].frequency === "" &&
                    inputFields[0].route === "" &&
                    inputFields[0].instructions === "" ? (
                      <Button
                        variant="outline"
                        onClick={() => firstForm(index)}
                      >
                        <IconArrowLeft />
                      </Button>
                    ) : inputFields.length === 1 &&
                      inputFields[0].medicationName !== "" &&
                      inputFields[0].RxNORM !== "" &&
                      inputFields[0].dosage !== "" &&
                      inputFields[0].route !== "" &&
                      inputFields[0].frequency !== "" &&
                      inputFields[0].instructions !== "" ? (
                      <Button size="xs" onClick={() => pushData(index)}>
                        <IconArrowLeft />
                      </Button>
                    ) : (
                      <Button size="xs" onClick={() => pushData(index)}>
                        <IconArrowLeft />
                      </Button>
                    )}
                  </div>
                </Card>
                <br />
              </>
            );
          })}
        </div>
        
      </div>
      <div style={{marginLeft: '10px', }}>
        <Card>
        
        <div className="player">
            <div className="header-player">
              <div className="audio-record">
                <input type="checkbox" id="audio_record-icon" checked="true" />
                <label
                  for="audio_record-icon"
                  className="player-icon audio_record-icon"
                >
                  <i className="myclass fa-solid fa-microphone"></i>
                </label>
              </div>
            </div>
          </div>
          <Card>

          <div  style={{marginTop:'-20px'}}>
          <h3>Transcription Data</h3>
          <div style={{width: '300px',padding:'5px 5px 5px 5px ', border: '1px solid grey'}}>
          
          <Typewriter
              onInit={(tp)=>{
                tp.typeString("Hello, How are you. what are symptoms you are suffering from? I am suffering from Cold and fever. Oh, you are eating too much ice cream.. then?").start();
              }}
              />
          </div>
          <h3>Summary of Transcript</h3>
          <div style={{width: '300px',height:'30px',padding:'5px 5px 5px 5px ', border: '1px solid grey'}}>
              {/* doctor recieving the patient nicely and asking the symptoms.patients answers back with symptoms like COLD AND FEVER. */}
          </div>
          </div>
          
          </Card>
        </Card>
          

 
          
        </div>
    </div>
  );
};

export default MedicationForm;
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
import { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { AuthContext } from "../Context/AuthContext";

const ProfileForm = () => {
  return (
      <Card>
        <form>
         <div>
            <div>
              <Card shadow="sm" withBorder >
                
                
              
                  <TextInput
                    name="fullName"
                    placeholder="Name"
                    label="Full Name"
                    withAsterisk
                    value={localStorage.getItem("name")}
                  />
                  <TextInput
                    name="specialization"
                    placeholder="RXNormCode"
                    label="Specialization"
                    withAsterisk
                    value={localStorage.getItem("specializations")}
        
                  />
             
                  <TextInput
                    name="Experience"
                    placeholder="Dosage"
                    label="Experience"
                    withAsterisk
                    value={localStorage.getItem("experience")}
              
                  />
            
             
              </Card>
            </div>
          </div>
        </form>
      </Card>
    
  );
};

export default ProfileForm
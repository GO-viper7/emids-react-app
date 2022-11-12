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
                    value="Dr. Subbu"
                  />
                  <TextInput
                    name="specialization"
                    placeholder="RXNormCode"
                    label="Specialization"
                    withAsterisk
                    value="Cardiologist"
        
                  />
             
                  <TextInput
                    name="Experience"
                    placeholder="Dosage"
                    label="Experience"
                    withAsterisk
                    value="24 years"
              
                  />
            
             
              </Card>
            </div>
          </div>
        </form>
      </Card>
    
  );
};

export default ProfileForm
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
  const name = localStorage.getItem('userName');
  const specialization = localStorage.getItem('specialization');
  const experience = localStorage.getItem('experience');
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
                    value={name}
                  />
                  <TextInput
                    name="specialization"
                    placeholder="RXNormCode"
                    label="Specialization"
                    withAsterisk
                    value={specialization}
        
                  />
             
                  <TextInput
                    name="Experience"
                    placeholder="Dosage"
                    label="Experience"
                    withAsterisk
                    value={experience}
              
                  />
            
             
              </Card>
            </div>
          </div>
        </form>
      </Card>
    
  );
};

export default ProfileForm
import React, { useState } from "react";
import axios from "axios";
import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  Grid,
} from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa6";

interface CreateUserProps {
  onCreateUserSuccess: () => void; // Callback function to be invoked after creating a user
}

export function CreateUser({ onCreateUserSuccess }: CreateUserProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [govtId, setGovtId] = useState("");
  const [meterNumber, setMeterNumber] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [town, setTown] = useState("");
  const [city, setCity] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://34.202.159.66:8080/api/create_user",
        {
          name,
          email,
          phone_number: phone,
          meterNumber,
          govtId,
          town,
          city,
          houseNumber,
        }
      );
      console.log("User created:", response.data);
      // Reset form fields
      setName("");
      setEmail("");
      setPhone("");
      setMeterNumber("");
      setGovtId("");
      setHouseNumber("");
      setTown("");
      setCity("");

      // Clear error message
      setErrorMessage("");
      onClose();
      // Invoke the callback function to refresh the client list
      onCreateUserSuccess();
    } catch (error) {
      console.error("Error creating user:", error);
      setErrorMessage("Failed to create user. Please try again.");
    }
  };

  const formFields = [
    {
      label: "Full Name",
      value: name,
      onChange: setName,
      type: "text",
      placeholder: "Name",
    },
    {
      label: "Email",
      value: email,
      onChange: setEmail,
      type: "email",
      placeholder: "Email",
    },
    {
      label: "Phone Number",
      value: phone,
      onChange: setPhone,
      type: "tel",
      placeholder: "Phone Number",
    },
    {
      label: "Government ID",
      value: govtId,
      onChange: setGovtId,
      type: "text",
      placeholder: "Government ID",
    },
    {
      label: "Meter Number",
      value: meterNumber,
      onChange: setMeterNumber,
      type: "text",
      placeholder: "Meter Number (6 characters only)",
    },
    {
      label: "House Number",
      value: houseNumber,
      onChange: setHouseNumber,
      type: "text",
      placeholder: "House Number, Street (optional)",
    },
    {
      label: "Town/Suburb",
      value: town,
      onChange: setTown,
      type: "text",
      placeholder: "Town/Suburb",
    },
    {
      label: "City",
      value: city,
      onChange: setCity,
      type: "text",
      placeholder: "City",
    },
    {
      label: "Country",
      value: "Zimbabwe",
      type: "text",
      placeholder: "Country",
      readOnly: true,
    },
  ];

  return (
    <>
      <Button
        leftIcon={<FaPlus />}
        onClick={onOpen}
        width={"290px"}
        height={"40px"}
        variant={"solid"}
        colorScheme={"blue"}
      >
        Add User
      </Button>

      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay
          bg="none"
          backdropFilter="auto"
          backdropInvert="80%"
          backdropBlur="2px"
        />
        <ModalContent maxW={"2xl"}>
          <ModalHeader>Add a new user entry</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Grid templateColumns="repeat(2, 1fr)" gap={4}>
              {formFields.map((field, index) => (
                <FormControl key={index} isRequired={false}>
                  <FormLabel>{field.label}</FormLabel>
                  <Input
                    type={field.type}
                    value={field.value}
                    onChange={(e) =>
                      field.onChange && field.onChange(e.target.value)
                    }
                    placeholder={field.placeholder}
                    readOnly={field.readOnly}
                  />
                </FormControl>
              ))}
            </Grid>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              type="submit"
              onClick={handleSubmit}
            >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
            {errorMessage && <p>{errorMessage}</p>}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

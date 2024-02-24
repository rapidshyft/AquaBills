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
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa6";

export function ViewBill() {
  const [customer_id, setCustomerId] = useState("");
  const [water_usage, setWaterUsage] = useState("");
  const [price_per_cubic_meter, setPricePerCubicMeter] = useState("");
  const [fixed_charges, setFixedCharges] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSaveBill = async () => {
    try {
      const response = await axios.post(
        " https://api.rapidshyft.tech/api/create_bill",
        {
          customer_id,
          water_usage,
          price_per_cubic_meter,
          fixed_charges,
        }
      );
      console.log("Bill created:", response.data);
      resetForm();
      onClose();
    } catch (error) {
      console.error("Error creating bill:", error);
      setErrorMessage("Failed to create bill. Please try again.");
    }
  };

  const resetForm = () => {
    setCustomerId("");
    setWaterUsage("");
    setPricePerCubicMeter("");
    setFixedCharges("");
    setErrorMessage("");
  };

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
        Create Bill
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW={"2xl"}>
          <ModalHeader>Bill Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Grid templateColumns="repeat(2, 1fr)" gap={4}>
              <FormControl>
                <FormLabel>Customer ID</FormLabel>
                <Input
                  type="text"
                  value={customer_id}
                  onChange={(e) => setCustomerId(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Water Usage</FormLabel>
                <Input
                  type="text"
                  value={water_usage}
                  onChange={(e) => setWaterUsage(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Price Per Cubic Meter</FormLabel>
                <Input
                  type="text"
                  value={price_per_cubic_meter}
                  onChange={(e) => setPricePerCubicMeter(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Fixed Charges</FormLabel>
                <Input
                  type="text"
                  value={fixed_charges}
                  onChange={(e) => setFixedCharges(e.target.value)}
                />
              </FormControl>
            </Grid>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSaveBill}>
              Save
            </Button>
            <Button onClick={resetForm}>Reset</Button>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
          {errorMessage && (
            <Alert status="error" mt={4}>
              <AlertIcon />
              {errorMessage}
            </Alert>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

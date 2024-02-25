import { useState } from "react";
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

interface CreateBillProps {
  onCreateBillSuccess: () => void; // Callback function to be invoked after creating a user
}

export function ViewBill({ onCreateBillSuccess }: CreateBillProps) {
  const [customer_id, setCustomerId] = useState("");
  const [water_usage, setWaterUsage] = useState(0); // Converted to integer
  const [price_per_cubic_meter, setPricePerCubicMeter] = useState(0); // Converted to integer
  const [fixed_charges, setFixedCharges] = useState(0); // Converted to integer
  const [errorMessage, setErrorMessage] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSaveBill = async () => {
    try {
      const response = await axios.post(
        "https://api.rapidshyft.tech/api/create_bill",
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
      onCreateBillSuccess();
    } catch (error) {
      console.error("Error creating bill:", error);
      setErrorMessage("Failed to create bill. Please try again.");
    }
  };

  const resetForm = () => {
    setCustomerId("");
    setWaterUsage(0);
    setPricePerCubicMeter(0);
    setFixedCharges(0);
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
                  type="number" // Changed to number input
                  value={water_usage}
                  onChange={(e) => setWaterUsage(parseInt(e.target.value))}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Price Per Cubic Meter</FormLabel>
                <Input
                  type="number" // Changed to number input
                  value={price_per_cubic_meter}
                  onChange={(e) =>
                    setPricePerCubicMeter(parseInt(e.target.value))
                  }
                />
              </FormControl>
              <FormControl>
                <FormLabel>Fixed Charges</FormLabel>
                <Input
                  type="number" // Changed to number input
                  value={fixed_charges}
                  onChange={(e) => setFixedCharges(parseInt(e.target.value))}
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

import { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { FaPlus } from "react-icons/fa6";

export function BillingRecordForm() {
  const [formData, setFormData] = useState({
    customerId: "",
    waterUsage: "",
    pricePerCubicMeter: "",
    fixedCharges: "",
  });
  const [isOpen, setIsOpen] = useState(false); // State variable to handle modal open/close
  const toast = useToast();

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const response = await axios.post(
        "http://34.202.159.66:8080/create_bill",
        formData
      );
      console.log("Billing record created:", response.data);
      // Show success toast
      toast({
        title: "Billing Record Created",
        description: "The billing record has been successfully created.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      // Clear form data
      setFormData({
        customerId: "",
        waterUsage: "",
        pricePerCubicMeter: "",
        fixedCharges: "",
      });
      // Close the modal after successful submission
      setIsOpen(false);
    } catch (error) {
      console.error("Error creating billing record:", error);
      // Show error toast
      toast({
        title: "Error",
        description: "Failed to create billing record. Please try again later.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Button
        leftIcon={<FaPlus />}
        colorScheme="blue"
        onClick={() => setIsOpen(true)}
      >
        Create Bill
      </Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Billing Record</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <Stack spacing={4}>
                <FormControl isRequired>
                  <FormLabel>Customer ID</FormLabel>
                  <Input
                    type="text"
                    name="customerId"
                    value={formData.customerId}
                    onChange={handleChange}
                    placeholder="Customer ID"
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Water Usage</FormLabel>
                  <Input
                    type="number"
                    name="waterUsage"
                    value={formData.waterUsage}
                    onChange={handleChange}
                    placeholder="Water Usage"
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Price Per Cubic Meter</FormLabel>
                  <Input
                    type="number"
                    name="pricePerCubicMeter"
                    value={formData.pricePerCubicMeter}
                    onChange={handleChange}
                    placeholder="Price Per Cubic Meter"
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Fixed Charges</FormLabel>
                  <Input
                    type="number"
                    name="fixedCharges"
                    value={formData.fixedCharges}
                    onChange={handleChange}
                    placeholder="Fixed Charges"
                  />
                </FormControl>
              </Stack>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Create Billing Record
            </Button>
            <Button variant="ghost" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

import { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";

export function BillingRecordForm() {
  const [formData, setFormData] = useState({
    customerId: "",
    waterUsage: "",
    pricePerCubicMeter: "",
    fixedCharges: "",
  });

  const toast = useToast();

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/create_bill",
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
        <Button colorScheme="blue" type="submit">
          Create Billing Record
        </Button>
      </Stack>
    </form>
  );
}

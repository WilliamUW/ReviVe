import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleGenerativeAI, InlineDataPart } from "@google/generative-ai";
import { fileToGenerativePart } from "../utils/helpers";
import {
  Box,
  VStack,
  Heading,
  Input,
  Textarea,
  Button,
  Image,
  Text,
  FormControl,
  FormLabel,
  List,
  ListItem,
} from "@chakra-ui/react";
import {DeviceInfo} from "../utils/deviceHelpers";

const VITE_GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(VITE_GEMINI_API_KEY);

export default function UnusedElectronic() {
  const navigate = useNavigate();
  const [image, setImage] = useState<File | null>(null);
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo | null>(null);
  const [items, setItems] = useState<DeviceInfo[]>([]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  const analyzeImage = async () => {
    if (!image) return;

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const imagePart: InlineDataPart = await fileToGenerativePart(image);

      const result = await model.generateContent([
        "Analyze this image and provide the following information about the electronic device: name, model, quality, and suggested price (one numeric price), description (detailed listing description for the device like color, quality, etc.). Format the response as JSON.",
        imagePart,
      ]);

      console.log(result);

      const response = result?.response?.candidates?.[0].content.parts?.[0];
      const text = response?.text;
      const jsonMatch = text?.match(/```json\s*([\s\S]*?)\s*```/);
      if (jsonMatch && jsonMatch[1]) {
        const jsonString = jsonMatch[1];
        const info = JSON.parse(jsonString);
        info.b3tr_reward = Math.max(5, Math.round(info.suggested_price / 7));
        setDeviceInfo(info);
      } else {
        console.error("Failed to extract JSON from response");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleInfoChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setDeviceInfo((prev) => (prev ? { ...prev, [name]: value } : null));
  };

  const listItem = () => {
    if (deviceInfo) {
      setItems((prevItems) => [...prevItems, deviceInfo]);
      setDeviceInfo(null);
      setImage(null);
      console.log("Listing item:", deviceInfo);
      alert(
        `You have received ${deviceInfo?.b3tr_reward} B3TR tokens for listing your ${deviceInfo?.name}! \n\n Thank you for preventing more devices from going to landfills. 🌍🔋♻️`
      );
    }
    navigate("/buy");
  };

  return (
    <Box minHeight="100vh" padding={4}>
      <VStack spacing={4} align="center">
        <Heading as="h1" size="xl">List Electronic</Heading>
        <Input type="file" accept="image/*" onChange={handleImageUpload} />
        {image && (
          <Image
            src={URL.createObjectURL(image)}
            alt="Uploaded device"
            maxWidth="sm"
            marginBottom={4}
          />
        )}
        <Button onClick={analyzeImage} colorScheme="blue">
          Analyze Image
        </Button>
        {deviceInfo && (
          <VStack spacing={4} width="full" maxWidth="md">
            <Heading as="h2" size="lg">Device Information:</Heading>
            <FormControl>
              <FormLabel>Name:</FormLabel>
              <Input
                name="name"
                value={deviceInfo.name}
                onChange={handleInfoChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Description:</FormLabel>
              <Textarea
                name="description"
                value={deviceInfo.description}
                onChange={handleInfoChange}
                rows={3}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Model:</FormLabel>
              <Input
                name="model"
                value={deviceInfo.model}
                onChange={handleInfoChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Quality:</FormLabel>
              <Input
                name="quality"
                value={deviceInfo.quality}
                onChange={handleInfoChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Suggested Price ($):</FormLabel>
              <Input
                name="suggested_price"
                value={deviceInfo.suggested_price}
                onChange={handleInfoChange}
              />
            </FormControl>
            <Text fontSize="xl" color="green.600">
              B3TR Listing Reward: {deviceInfo.b3tr_reward}
            </Text>
            <Button onClick={listItem} colorScheme="green">
              List Item
            </Button>
          </VStack>
        )}
        <Box width="full" maxWidth="md">
          <Heading as="h2" size="lg" marginBottom={4}>List Items:</Heading>
          <List spacing={4}>
            {items.map((item, index) => (
              <ListItem key={index} borderWidth={1} borderRadius="lg" padding={4}>
                <Heading as="h3" size="md">{item.name}</Heading>
                <Text>{item.description}</Text>
                <Text><strong>Model:</strong> {item.model}</Text>
                <Text><strong>Quality:</strong> {item.quality}</Text>
                <Text><strong>Suggested Price:</strong> ${item.suggested_price}</Text>
              </ListItem>
            ))}
          </List>
        </Box>
      </VStack>
    </Box>
  );
}
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleGenerativeAI } from "@google/generative-ai";
import ReactMarkdown from "react-markdown";
import { fileToGenerativePart } from "../utils/helpers";
import { speak } from "../utils/tts";
import {
  Box,
  VStack,
  Heading,
  Input,
  Button,
  Image,
  Text,
  Flex,
  List,
  ListItem,
} from "@chakra-ui/react";

const VITE_GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(VITE_GEMINI_API_KEY!);

interface DeviceInfo {
  name: string;
  model: string;
  repair_instructions: string;
}

export default function BrokenElectronic() {
  const navigate = useNavigate();
  const [image, setImage] = useState<File | null>(null);
  const [deviceInfo, setDeviceInfo] = useState<any>(null);
  const [conversation, setConversation] = useState<
    { user: string; bot: string }[]
  >([]);
  const [question, setQuestion] = useState<string>("");
  const [items, setItems] = useState<DeviceInfo[]>([]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  const analyzeImage = async () => {
    if (!image) return;

    console.log(VITE_GEMINI_API_KEY);

    try {
      const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
        systemInstruction:
          "You are ReviVeBot, an AI assistant designed to help users identify and troubleshoot their electronic devices. Using an image of the device, you will accurately determine the make and model, diagnose common issues, and provide step-by-step guidance for fixing the device. Your goal is to offer clear, concise, and actionable instructions to help users repair their electronics efficiently. You should be friendly, engaging and likeable, use lots of emojis. Keep answers less than 200 characters, as concise as possible like an actual conversation.",
      });
      const imagePart = await fileToGenerativePart(image);

      const result = await model.generateContent([
        "Analyze this image and provide the following information about the electronic device: name, model, and potential repair instructions. Format the response as JSON.",
        imagePart,
      ]);

      const response = result?.response?.candidates?.[0]?.content?.parts?.[0];
      const text = response?.text;
      const jsonMatch = text?.match(/```json\s*([\s\S]*?)\s*```/);
      if (jsonMatch && jsonMatch[1]) {
        const jsonString = jsonMatch[1];
        const info = JSON.parse(jsonString);
        setDeviceInfo(info);
        const botResponse = `Hello! I see you have a ${info.name} (${info.model}). How can I help you fix it today? 🛠️`;
        speak(botResponse);
        setConversation((prev) => [...prev, { user: "", bot: botResponse }]);
      } else {
        console.error("Failed to extract JSON from response");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const askQuestion = async () => {
    if (!question) return;

    try {
      setConversation((prev) => [...prev, { user: question, bot: "" }]);

      const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
        systemInstruction:
          "You are ReviVeBot, an AI assistant designed to help users identify and troubleshoot their electronic devices. Using an image of the device, you will accurately determine the make and model, diagnose common issues, and provide step-by-step guidance for fixing the device. Your goal is to offer clear, concise, and actionable instructions to help users repair their electronics efficiently. You should be friendly, engaging and likeable, use lots of emojis. Keep answers less than 200 characters, as concise as possible like an actual conversation.",
      });
      const result = await model.generateContent([
        `Given the device: ${deviceInfo.name} ${deviceInfo.model}, answer the following repair question: ${question}`,
      ]);

      const response = result.response;
      const answer = response.text();
      speak(answer);
      setConversation((prev) => [...prev, { user: "", bot: answer }]);
      setQuestion("");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const listItem = () => {
    if (deviceInfo) {
      setItems((prevItems) => [...prevItems, deviceInfo]);
      setDeviceInfo(null);
      setImage(null);
      console.log("Listing broken item:", deviceInfo);

    }
    navigate("/unused");
  };

  const itemIsFixed = () => {
    alert(
      `You have received ${Math.round(Math.random() * 10) + 5} B3TR tokens for fixing your ${deviceInfo?.name}! \n\n Thank you for preventing more devices from going to landfills. 🌍🔋♻️ \n\nYour data also helps me assist other users better! 😄🛠️`
    );
    navigate("/buy");
  };

  const startSpeechRecognition = () => {
    if ("webkitSpeechRecognition" in window) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = "en-US";

      recognition.onstart = () => {
        console.log("Speech recognition started");
      };

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setQuestion(transcript);
        console.log("Transcript:", transcript);
      };

      recognition.onerror = (event: any) => {
        console.error("Speech recognition error:", event.error);
      };

      recognition.onend = () => {
        console.log("Speech recognition ended");
      };

      recognition.start();
    } else {
      console.error("Speech recognition not supported in this browser");
    }
  };

  return (
    <Box minHeight="100vh" padding={4}>
      <VStack spacing={4} align="center">
        <Heading as="h1" size="xl" marginBottom={4}>
          Repair Broken Electronic
        </Heading>
        <Input type="file" accept="image/*" onChange={handleImageUpload} />
        {image && (
          <Image
            src={URL.createObjectURL(image)}
            alt="Uploaded device"
            maxWidth="sm"
            marginBottom={4}
          />
        )}
        <Button onClick={analyzeImage} colorScheme="blue" marginBottom={4}>
          Analyze Image
        </Button>
        {deviceInfo && (
          <Box marginBottom={4}>
            <Heading as="h2" size="lg">
              Device Information:
            </Heading>
            <Text>Name: {deviceInfo.name}</Text>
            <Text>Model: {deviceInfo.model}</Text>
          </Box>
        )}
        {conversation.length > 0 && (
          <Box marginBottom={4} maxWidth="md">
            <Heading as="h2" size="lg">
              Conversation:
            </Heading>
            {conversation.map((entry, index) => (
              <Box key={index} marginBottom={2}>
                {entry.user && (
                  <Text color="blue.600">
                    <strong>You:</strong> {entry.user}
                  </Text>
                )}
                {entry.bot && (
                  <Text color="green.600">
                    <strong>ReviVeBot:</strong>
                    <ReactMarkdown>{entry.bot}</ReactMarkdown>
                  </Text>
                )}
              </Box>
            ))}
          </Box>
        )}
        {deviceInfo && (
          <Flex marginBottom={4}>
            <Button
              onClick={startSpeechRecognition}
              colorScheme="yellow"
              marginRight={2}
            >
              🎤
            </Button>
            <Input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask a repair question"
              marginRight={2}
            />
            <Button onClick={askQuestion} colorScheme="green">
              Ask
            </Button>
          </Flex>
        )}
        {deviceInfo && (
          <Button onClick={listItem} colorScheme="red">
            List as Broken
          </Button>
        )}
        {deviceInfo && (
          <Button onClick={itemIsFixed} colorScheme="green">
            Device is Fixed!
          </Button>
        )}
        <Box marginTop={8} width="100%" maxWidth="md">
          <Heading as="h2" size="lg" marginBottom={4}>
            List Items:
          </Heading>
          <List spacing={4}>
            {items.map((item, index) => (
              <ListItem
                key={index}
                borderWidth={1}
                borderRadius="lg"
                padding={4}
              >
                <Heading as="h3" size="md">
                  {item.name}
                </Heading>
                <Text>
                  <strong>Model:</strong> {item.model}
                </Text>
                <Text>
                  <strong>Repair Instructions:</strong>
                </Text>
                <ReactMarkdown>{item.repair_instructions}</ReactMarkdown>
              </ListItem>
            ))}
          </List>
        </Box>
      </VStack>
    </Box>
  );
}

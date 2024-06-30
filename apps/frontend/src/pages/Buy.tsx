import { useState, useEffect } from "react";
import {
  Box,
  VStack,
  Heading,
  Input,
  Text,
  Select,
  Grid,
  Card,
  CardBody,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  HStack,
  Button,
} from "@chakra-ui/react";
import { useUserContext } from "../components/UserContext";
import { DeviceListing } from "../utils/deviceHelpers";

export default function Buy() {
  const { listings: mockListings } = useUserContext();
  const [listings] = useState<DeviceListing[]>(mockListings);
  const [filteredListings, setFilteredListings] =
    useState<DeviceListing[]>(mockListings);
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState<number[]>([0, 1000]);
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedQuality, setSelectedQuality] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedListing, setSelectedListing] = useState<DeviceListing | null>(
    null
  );
  const { isOpen, onOpen, onClose } = useDisclosure();

  const uniqueModels = Array.from(
    new Set(listings.map((listing) => listing.model))
  );
  const uniqueQualities = Array.from(
    new Set(listings.map((listing) => listing.quality))
  );
  const uniqueLocations = Array.from(
    new Set(listings.map((listing) => listing.location))
  );

  const buyItem = () => {
    alert(
      `You have received ${selectedListing?.b3tr_reward} B3TR tokens for buying the ${selectedListing?.name}! \n\nThank you for preventing more devices from going to landfills. 🌍🔋♻️`
    );
  };

  useEffect(() => {
    filterListings();
  }, [
    searchTerm,
    priceRange,
    selectedModel,
    selectedQuality,
    selectedLocation,
  ]);

  const filterListings = () => {
    let filtered = listings.filter(
      (listing) =>
        (listing.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          listing.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          listing.model.toLowerCase().includes(searchTerm.toLowerCase())) &&
        listing.price >= priceRange[0] &&
        listing.price <= priceRange[1] &&
        (selectedModel === "" || listing.model === selectedModel) &&
        (selectedQuality === "" || listing.quality === selectedQuality) &&
        (selectedLocation === "" || listing.location === selectedLocation)
    );
    setFilteredListings(filtered);
  };

  const handleListingClick = (listing: DeviceListing) => {
    setSelectedListing(listing);
    onOpen();
  };

  return (
    <Box minHeight="100vh" padding={4} paddingBottom={20}>
      <VStack spacing={4} align="center">
        <Heading as="h1" size="xl" marginBottom={4}>
          ReviVe Marketplace
        </Heading>

        <Box width="full" maxWidth="4xl" marginBottom={4}>
          <Input
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            marginBottom={4}
          />

          <Text marginBottom={2}>Price Range</Text>
          <RangeSlider
            aria-label={["min", "max"]}
            defaultValue={priceRange}
            min={0}
            max={1000}
            onChange={(val) => setPriceRange(val)}
            marginBottom={4}
          >
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} />
            <RangeSliderThumb index={1} />
          </RangeSlider>
          <HStack spacing={4} align="center">
            <Select
              placeholder="Select Model"
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
              marginBottom={4}
            >
              <option value="">All</option>
              {uniqueModels.map((model) => (
                <option key={model} value={model}>
                  {model}
                </option>
              ))}
            </Select>

            <Select
              placeholder="Select Quality"
              value={selectedQuality}
              onChange={(e) => setSelectedQuality(e.target.value)}
              marginBottom={4}
            >
              <option value="">All</option>
              {uniqueQualities.map((quality) => (
                <option key={quality} value={quality}>
                  {quality}
                </option>
              ))}
            </Select>

            <Select
              placeholder="Select Location"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              marginBottom={4}
            >
              <option value="">All</option>
              {uniqueLocations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </Select>
          </HStack>
        </Box>

        <Grid
          templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
          gap={6}
          width="full"
          maxWidth="4xl"
        >
          {filteredListings.map((listing) => (
            <Card
              key={listing.id}
              onClick={() => handleListingClick(listing)}
              cursor="pointer"
            >
              <Image
                src={listing.imageLinks[0]}
                alt={listing.name}
                objectFit="cover"
                height="200px"
              />
              <CardBody>
                <Heading size="md">{listing.name}</Heading>
                <Text>
                  ${listing.price} - {listing.condition}
                </Text>
                <Text>{listing.location}</Text>
                <Text color="green.600" fontWeight="bold">
                  B3TR Reward: {listing.b3tr_reward}
                </Text>
              </CardBody>
            </Card>
          ))}
        </Grid>

        <Modal isOpen={isOpen} onClose={onClose} size="xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{selectedListing?.name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {selectedListing && (
                <VStack align="start" spacing={2}>
                  <Box display="flex" overflowX="auto" width="100%">
                    {selectedListing.imageLinks.map((link, index) => (
                      <Image
                        key={index}
                        src={link}
                        alt={`${selectedListing.name} ${index + 1}`}
                        boxSize="200px"
                        objectFit="cover"
                        marginRight={2}
                      />
                    ))}
                  </Box>
                  <Text>Description: {selectedListing.description}</Text>
                  <Text>Price: ${selectedListing.price}</Text>
                  <Text>Condition: {selectedListing.condition}</Text>
                  <Text>Model: {selectedListing.model}</Text>
                  <Text>Quality: {selectedListing.quality}</Text>
                  <Text>Location: {selectedListing.location}</Text>
                  <Text fontWeight="bold" color="green.600">
                    B3TR Reward: {selectedListing.b3tr_reward}
                  </Text>
                  <HStack>
                    <Button onClick={() => buyItem()}>Buy</Button>
                  </HStack>
                </VStack>
              )}
            </ModalBody>
          </ModalContent>
        </Modal>
      </VStack>
    </Box>
  );
}

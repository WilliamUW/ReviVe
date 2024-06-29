// src/Router.jsx
import { Link, Route, Routes } from "react-router-dom";
import BottomNavbar from "./components/BottomNavbar";
import SellPage from "./pages/Sell";
import BuyPage from "./pages/Buy";
import BrokenElectronic from "./pages/Broken";
import About from "./pages/About";
import Unused from "./pages/Unused";
import Home from "./pages/Home";
import { useWallet } from "@vechain/dapp-kit-react";
import { ConnectWalletButton } from "./components";
import { Box, Heading, VStack } from "@chakra-ui/react";

const AppRouter = () => {
  const { account } = useWallet();

  return (
    <>
      {account ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sell" element={<SellPage />} />
          <Route path="/unused" element={<Unused />} />
          <Route path="/broken" element={<BrokenElectronic />} />
          <Route path="/buy" element={<BuyPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      ) : (
        <Box
          as="main"
          minHeight="100vh"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          padding={24}
        >
          <Heading as="h1" size="2xl" marginBottom={8}>
            Please connect your wallet get started!
          </Heading>
          <VStack spacing={4} align="stretch" width="256px">
            <Link to="/sell" style={{ textDecoration: "none" }}>
              <ConnectWalletButton />
            </Link>
          </VStack>
        </Box>
      )}
      <BottomNavbar />
    </>
  );
};

export default AppRouter;

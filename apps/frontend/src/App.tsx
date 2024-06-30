import { DAppKitProvider } from "@vechain/dapp-kit-react";
import { ChakraProvider } from "@chakra-ui/react";
import {
  Navbar,
  SubmissionModal,
} from "./components";
import { lightTheme } from "./theme";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import AppRouter from "./Router";
import { UserProvider } from "./components/UserContext";
import About from "./pages/About";

// RECaptcha V3 site key (https://developers.google.com/recaptcha/docs/v3)
const VITE_RECAPTCHA_V3_SITE_KEY = import.meta.env
  .VITE_RECAPTCHA_V3_SITE_KEY as string;

function App() {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={VITE_RECAPTCHA_V3_SITE_KEY}>
      <ChakraProvider theme={lightTheme}>
        <UserProvider>
          <DAppKitProvider
            usePersistence
            requireCertificate={false}
            genesis="test"
            nodeUrl="https://testnet.vechain.org/"
            logLevel={"DEBUG"}
          >
            <About />
            {/* <BottomNavbar /> */}
            <Navbar />

            <AppRouter />

            {/* MODALS  */}
            <SubmissionModal />
          </DAppKitProvider>
        </UserProvider>
      </ChakraProvider>
    </GoogleReCaptchaProvider>
  );
}

export default App;

import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const SellPage = () => (
  <>
    <h1 className="text-4xl font-bold mb-8">What electronics do you have?</h1>
    <div className="space-y-4">
      <Link
        to="/broken"
        className="block w-64 p-4 text-center bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
      >
        <Button>Broken Electronic</Button>
      </Link>
      <Link
        to="/unused"
        className="block w-64 p-4 text-center bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        <Button>Unused Electronic</Button>
      </Link>
    </div>
  </>
);
export default SellPage;

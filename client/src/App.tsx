import { ChakraProvider } from "@chakra-ui/react";
import { Dashboard } from "./pages/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;

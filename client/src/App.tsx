import { ChakraProvider } from "@chakra-ui/react";
import { Dashboard } from "./pages/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Edit } from "./pages/Edit";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;

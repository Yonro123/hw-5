import { ChakraProvider } from "@chakra-ui/react";

import RegisterForm from "./components/Register/RegisterForm/RegisterForm";

import "./App.css";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <RegisterForm />
      </div>
    </ChakraProvider>
  );
}

export default App;

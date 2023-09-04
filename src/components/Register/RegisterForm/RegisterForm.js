import { useState } from "react";
import { Flex, Button } from "@chakra-ui/react";

import InputForm from "./InputForm/InputForm";

export default function RegisterForm() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (
      !/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
        values.email
      )
    ) {
      const newValues = { ...values };
      newValues.email = "";
      setValues(newValues);
      return;
    }
    if (values.firstName && values.lastName && values.email) {
      setValid(true);
    }
  };

  return (
    <Flex
      flexDir="column"
      gap="20px"
      w="400px"
      p="20px"
      bg="white"
      boxShadow="5px 5px 10px gray"
      borderRadius="20px"
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "36px",
          marginBottom: "10px",
          fontWeight: "700",
        }}
      >
        Register
      </h2>
      <div className={`success ${submitted && valid ? "open" : ""}`}>
        Success! Thank you for registering
      </div>
      <InputForm
        values={values}
        setValues={setValues}
        objectKey="firstName"
        placeholder="First Name"
        submitted={submitted}
        errorMessage="Please enter a first name"
      />
      <InputForm
        values={values}
        setValues={setValues}
        objectKey="lastName"
        placeholder="Last Name"
        submitted={submitted}
        errorMessage="Please enter a last name"
      />
      <InputForm
        values={values}
        setValues={setValues}
        objectKey="email"
        placeholder="Email"
        submitted={submitted}
        errorMessage="Please enter a email"
      />
      <Button
        onClick={handleSubmit}
        bg="chartreuse"
        _hover={{ bg: "rgba(128, 255, 0, 0.515)" }}
      >
        Register
      </Button>
    </Flex>
  );
}

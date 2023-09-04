import { Input } from "@chakra-ui/react";

import "./InputFrom.css";

export default function InputForm({
  values,
  setValues,
  objectKey,
  placeholder,
  submitted,
  errorMessage,
}) {
  const onChange = (event) => {
    const newValues = { ...values };
    newValues[objectKey] = event.target.value;
    setValues(newValues);
  };
  return (
    <div className="inputForm">
      <Input
        value={values[objectKey]}
        placeholder={placeholder}
        variant="filled"
        onChange={onChange}
      />
      {submitted && !values[objectKey] ? <span>{errorMessage}</span> : null}
    </div>
  );
}

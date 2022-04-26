import { useState } from "react"

export default function useFields(type) {
  const [value, setValue] = useState('');
  const handleOnChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setValue(value)
  };
  const bind = {
    type,
    value,
    onChange: handleOnChange
  }
  return bind;
}

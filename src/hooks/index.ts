import React, { useState } from "react";

export const useField = (type: string, name: string) => {
  const [value, setValue] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return {
    name,
    id: name,
    type,
    value,
    onChange,
  };
};

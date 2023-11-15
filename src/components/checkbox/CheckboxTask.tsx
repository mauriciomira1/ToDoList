import React, { useState } from "react";
import { styles } from "./styles";
import Checkbox from "expo-checkbox";

const CheckboxTask = () => {
  const [isChecked, setChecked] = useState(false);

  return (
    <Checkbox
      style={styles.checkbox}
      value={isChecked}
      onValueChange={setChecked}
      color={isChecked ? "#5E60C3" : undefined}
    />
  );
};

export default CheckboxTask;

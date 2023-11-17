import React, { useState } from "react";
import { styles } from "./styles";
import Checkbox from "expo-checkbox";

interface CheckboxTaskProps {
  functionToSetTask: (state: boolean) => void;
}

const CheckboxTask = ({ functionToSetTask }: CheckboxTaskProps) => {
  const [isChecked, setChecked] = useState(false);

  const changeTask = () => {
    isChecked ? setChecked(false) : setChecked(true);
    functionToSetTask(!isChecked);
  };

  return (
    <Checkbox
      style={styles.checkbox}
      value={isChecked}
      onValueChange={changeTask}
      color={isChecked ? "#5E60C3" : undefined}
    />
  );
};

export default CheckboxTask;

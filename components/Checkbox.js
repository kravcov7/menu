import React, { ChangeEvent, useState } from "react";
import styles from "../styles/CheckBox.module.scss";

/**
 * Базовый компонент "Чек-бокс".
 */
export function CheckBox({
  isChecked = false,
  text = "",
  onChange,
  isDisabled = false,
}) {
  const [checked, setChecked] = useState(isChecked);

  function handleChange(evt) {
    if (!isDisabled) {
      setChecked(!checked);
      onChange && onChange(evt);
    }
  }

  return (
    <label className={styles.checkbox}>
      <input
        disabled={isDisabled}
        className={styles.input}
        checked={checked}
        onChange={handleChange}
        type="checkbox"
      />
      <span className={styles.text}>{text}</span>
    </label>
  );
}

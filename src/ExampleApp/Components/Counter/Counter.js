import { useCallback } from "react";
import Button from "../Button/Button";
import styles from './Counter.module.styl';

function Counter({value, onChange}) {
  var handlePlusClick = useCallback(() => onChange(value + 1), [value, onChange]);
  var handleMinusClick = useCallback(() => onChange(value - 1), [value, onChange]);
  return (
    <div className={styles.container}>
      <Button onClick={handleMinusClick}>-</Button>
      <div className={styles.value}>{value}</div>
      <Button onClick={handlePlusClick}>+</Button>
    </div>
  );
}

export default Counter;

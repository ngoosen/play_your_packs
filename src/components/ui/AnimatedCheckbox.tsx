import { useState } from "react";
import styles from "../../styles/components/ui/AnimatedCheckbox.module.scss";

interface IAnimatedCheckboxProps {
  checked: boolean;
  onToggle: CallableFunction
}

export default function AnimatedCheckbox(props: IAnimatedCheckboxProps): JSX.Element {
  const { checked, onToggle, } = props;
  const [init, setInit] = useState<boolean>(true);

  function clickHandler() {
    setInit(false);
    onToggle();
  }

  return (
    <div
      className={`${styles.container} ${checked && styles.checked} ${!checked && !init && styles.unchecked}`}
      onClick={clickHandler}
    >
      <div className={styles.main}></div>
    </div>
  );
}

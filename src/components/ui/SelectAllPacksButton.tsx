import { useState } from "react";

import styles from "../../styles/components/ui/SelectAllPacksButton.module.scss";

import Checkbox from "./Checkbox";

interface ISelectAllPacksButtonProps {
  onToggle: CallableFunction
}

export default function SelectAllPacksButton(props: ISelectAllPacksButtonProps): JSX.Element {
  const { onToggle, } = props;
  const [toggled, setToggled] = useState<boolean>(false);

  function clickHandler() {
    setToggled(latest => {
      onToggle(!latest);
      return !latest;
    });
  }

  return (
    <button className={styles.main} onClick={clickHandler}>
      <Checkbox checked={toggled} />
      <p>Sélectionner tous les packs</p>
    </button>
  );
}

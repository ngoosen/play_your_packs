import { useEffect, useState } from "react";

import styles from "../../styles/components/ui/SelectAllPacksButton.module.scss";

import Checkbox from "./Checkbox";
import { PACKS } from "../PackSelection";

interface ISelectAllPacksButtonProps {
  currentSelection: PACKS[]
  onToggle: CallableFunction
}

const selectablePacksMaxNumber = 15;

export default function SelectAllPacksButton(props: ISelectAllPacksButtonProps): JSX.Element {
  const { currentSelection, onToggle, } = props;
  const [toggled, setToggled] = useState<boolean>(false);

  useEffect(() => {
    if (currentSelection.length < selectablePacksMaxNumber) {
      setToggled(false);
    } else {
      setToggled(true);
    }
  }, [currentSelection]);

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

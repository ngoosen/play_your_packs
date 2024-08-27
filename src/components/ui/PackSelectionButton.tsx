import styles from "../../styles/components/ui/PackSelectionButton.module.scss";

import { PACKS } from "../PackSelection";

interface IPackSelectionButtonProps {
  pack: PACKS
  onClick: CallableFunction
  selected: boolean
}

export default function PackSelectionButton(props: IPackSelectionButtonProps): JSX.Element {
  const { pack, onClick, selected, } = props;

  function clickHandler() {
    onClick(pack);
  }

  return (
    <button className={styles.main} onClick={clickHandler}>
      <img src={`/img/packs/${pack}.avif`} alt="" style={{ opacity: selected ? 1 : .7, }} />
    </button>
  );
}

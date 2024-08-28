import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

import styles from "../../styles/components/ui/PackOrderSlider.module.scss";

import { PACKS } from "../PackSelection";

interface IPackOrderSliderProps {
  pack: PACKS
  onReorder: CallableFunction
}

export default function PackOrderSlider(props: IPackOrderSliderProps): JSX.Element {
  const { pack, onReorder, } = props;

  function upHandler() {
    onReorder(pack, "up");
  }

  function downHandler() {
    onReorder(pack, "down");
  }

  return (
    <div className={styles.main}>
      <p>{pack}</p>
      <div className={styles.sort_arrows}>
        <button onClick={upHandler}>
          <FontAwesomeIcon icon={faCaretUp} className={styles.arrow} />
        </button>
        <button onClick={downHandler}>
          <FontAwesomeIcon icon={faCaretDown} className={styles.arrow} />
        </button>
      </div>
    </div>
  );
}

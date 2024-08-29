import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

import styles from "../../styles/components/ui/PackOrderSlider.module.scss";

import { PACKS } from "../PackSelection";

interface IPackOrderSliderProps {
  pack: PACKS
  onReorder: CallableFunction
}

function getBackgroundColor(pack: PACKS): string {
  switch (pack) {
    case 0:
    case 1:
    case 2:
    case 5:
    case 7:
    case 8:
    case 10:
    case 11:
    case 14: return "#485ad6";
    case 3:
    case 12:
    case 13:
    case 15: return "#da448c";
    case 6:
    case 9: return "#59b047";
    default: return "";
  }
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
    <div className={styles.main} style={{ backgroundImage: `url(/img/packs/sliders/${pack}.jpg)`, backgroundColor: getBackgroundColor(pack), }}>
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

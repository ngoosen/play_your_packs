import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

import styles from "../../styles/components/ui/PackOrderSlider.module.scss";

import { PACKS } from "../PackSelection";
import getPackName from "../../lib/getPackName";

interface IPackOrderSliderProps {
  pack: PACKS
  onReorder: CallableFunction
  animate?: "up" | "down"
}

function getBackground(pack: PACKS): { color: string, shadow: string, } {
  switch (pack) {
    case 0:
    case 1:
    case 2:
    case 5:
    case 7:
    case 8:
    case 10:
    case 11:
    case 14: return { color: "#485ad6", shadow: "inset -30vw 0 100px -70px #394abb", };
    case 3:
    case 12:
    case 13:
    case 15: return { color: "#da448c", shadow: "inset -30vw 0 100px -70px #be3779", };
    case 6:
    case 9: return { color: "#59b047", shadow: "inset -30vw 0 100px -70px #459236", };
    default: return { color: "", shadow: "", };
  }
}

export default function PackOrderSlider(props: IPackOrderSliderProps): JSX.Element {
  const { pack, onReorder, animate, } = props;

  function upHandler() {
    onReorder(pack, "up");
  }

  function downHandler() {
    onReorder(pack, "down");
  }

  return (
    <div
      className={`${styles.main} ${animate === "up" && styles.animate_up} ${animate === "down" && styles.animate_down}`}
      style={{
        backgroundImage: `url(/img/packs/sliders/${pack}.jpg)`,
        backgroundColor: getBackground(pack).color,
        boxShadow: getBackground(pack).shadow,
      }}
    >
      <p className={styles.pack_title}>{getPackName(pack)}</p>
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

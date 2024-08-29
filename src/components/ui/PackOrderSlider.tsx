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

function getPackName(pack: PACKS): string {
  switch (pack) {
    case 0: return "Au travail";
    case 1: return "Vivre ensemble";
    case 2: return "Vie citadine";
    case 3: return "Chiens et chats";
    case 4: return "Saison";
    case 5: return "Heure de gloire";
    case 6: return "Iles paradisiaques";
    case 7: return "À la fac";
    case 8: return "Écologie";
    case 9: return "Escapade enneigée";
    case 10: return "Vie à la campagne";
    case 11: return "Années lycée";
    case 12: return "Grandir ensemble";
    case 13: return "Vie au ranch";
    case 14: return "À louer";
    case 15: return "Amour fou";
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

import styles from "../../styles/components/ui/PackOrderSlider.module.scss";

import { PACKS } from "../PackSelection";

interface IPackOrderSliderProps {
  pack: PACKS
}

export default function PackOrderSlider(props: IPackOrderSliderProps): JSX.Element {
  const { pack, } = props;

  return (
    <div className={styles.main}>
      <p>{pack}</p>
    </div>
  );
}

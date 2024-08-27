import styles from "../styles/components/Title.module.scss";

import Parallax from "./ui/Parallax";

export default function Title(): JSX.Element {
  return (
    <Parallax img="/img/landing_placeholder.jpg" className={styles.main}>
      <div className={styles.title}>
        <h1>Asaide's Play your packs challenge</h1>
      </div>
    </Parallax>
  );
}

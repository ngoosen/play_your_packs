import styles from "../styles/components/Title.module.scss";

import Parallax from "./ui/Parallax";

export default function Title(): JSX.Element {
  return (
    <Parallax img="/img/landing_banner.jpg" className={styles.main}>
      {/* <img src="/img/title.jpg" alt="" /> */}
      <div className={styles.title}>
        <h1>
          <span id={styles.asaide}>
            Asaide's
          </span>
          <span id={styles.play}>
            Play your packs
          </span>
          <span id={styles.challenge}>
            challenge
          </span>
        </h1>
      </div>
    </Parallax>
  );
}

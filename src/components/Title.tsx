import styles from "../styles/components/Title.module.scss";

import Parallax from "./ui/Parallax";

export default function Title(): JSX.Element {
  return (
    <Parallax img="/img/landing_banner.jpg" className={styles.main}>
      <img src="/img/title.jpg" alt="" />
    </Parallax>
  );
}

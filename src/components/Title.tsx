import styles from "../styles/components/Title.module.scss";

export default function Title(): JSX.Element {
  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <h1>Asaide's Play your packs challenge</h1>
      </div>
    </div>
  );
}

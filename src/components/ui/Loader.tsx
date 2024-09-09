import styles from "../../styles/components/ui/Loader.module.scss";

export default function Loader(): JSX.Element {
  return (
    <div className={styles.main}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

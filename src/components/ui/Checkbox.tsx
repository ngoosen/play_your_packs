import styles from "../../styles/components/ui/Checkbox.module.scss";

interface ICheckboxProps {
  checked: boolean;
}

export default function Checkbox(props: ICheckboxProps): JSX.Element {
  const { checked, } = props;

  //TODO: add animations to make it look extra nice

  return (
    <div
      className={styles.main}
      style={{
        backgroundColor: checked ? "#0096eb" : "#FFFFFF",
      }}
    >
    </div>
  );
}

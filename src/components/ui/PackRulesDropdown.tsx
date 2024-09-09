import styles from "../../styles/components/ui/PackRulesDropdown.module.scss";

import { PACKS } from "../PackSelection";

interface IPackRuleDropdownProps {
  pack: PACKS
}

export default function PackRulesDropdown(props: IPackRuleDropdownProps): JSX.Element {
  const { pack, } = props;

  return (
    <div className={styles.main}>
      <p>{pack}</p>
    </div>
  );
}

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

import styles from "../../styles/components/ui/PackRulesDropdown.module.scss";

import { PACKS } from "../PackSelection";
import getPackName from "../../lib/getPackName";
import { rules } from "../../lib/rules";

interface IPackRuleDropdownProps {
  pack: PACKS
  opened: boolean
  onToggle: CallableFunction
}

export default function PackRulesDropdown(props: IPackRuleDropdownProps): JSX.Element {
  const { pack, opened, onToggle, } = props;
  const [init, setInit] = useState<boolean>(true);

  function clickHandler() {
    setInit(false);
    onToggle(opened ? undefined : pack);
  }

  return (
    <>
      <div className={styles.main}>
        <FontAwesomeIcon icon={opened ? faCaretUp : faCaretDown} className={styles.arrow} onClick={clickHandler} />
        <h3>{getPackName(pack)}</h3>
      </div>

      <div className={`${styles.content} ${!opened && !init && styles.close} ${opened && styles.open}`}>
        <ul>
          {rules[pack].ruleList.map(rule => <li>{rule}</li>)}
          {rules[pack].remarks?.map(remark => <p>{remark}</p>)}
        </ul>
      </div>
    </>
  );
}

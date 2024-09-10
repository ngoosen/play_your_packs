import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

import styles from "../../styles/components/ui/PackRulesDropdown.module.scss";

import { PACKS } from "../PackSelection";
import getPackName from "../../lib/getPackName";
import { rules } from "../../lib/rules";

import AnimatedCheckbox from "./AnimatedCheckbox";

interface IPackRuleDropdownProps {
  pack: PACKS
  opened: boolean
  onToggle: CallableFunction
}

export default function PackRulesDropdown(props: IPackRuleDropdownProps): JSX.Element {
  const { pack, opened, onToggle, } = props;
  const [init, setInit] = useState<boolean>(true);
  const [ruleCompleted, setRuleCompleted] = useState<boolean>(false);

  function clickHandler() {
    setInit(false);
    onToggle(opened ? undefined : pack);
  }

  function completeRuleHandler() {
    setRuleCompleted(latest => !latest);
  }

  return (
    <>
      <div className={`${styles.main} ${ruleCompleted && styles.completed}`}>
        <div className={styles.pack_title}>
          <FontAwesomeIcon icon={opened ? faCaretUp : faCaretDown} className={styles.arrow} onClick={clickHandler} />
          <h3>{getPackName(pack)}</h3>
        </div>

        <div className={styles.checkbox_div}>
          <p>Pack complété</p>
          <AnimatedCheckbox checked={ruleCompleted} onToggle={completeRuleHandler} />
        </div>
      </div>

      <div className={`${styles.content} ${!opened && !init && styles.close} ${opened && styles.open}`}>
        <ul>
          {rules[pack].ruleList.map(rule => <li>{rule}</li>)}
        </ul>

        {rules[pack].remarks?.map(remark => <p>{remark}</p>)}
      </div>
    </>
  );
}

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from "../styles/components/ChallengeBreakdown.module.scss";

import { PACKS } from "./PackSelection";

import Title from "./Title";
import PackRulesDropdown from "./ui/PackRulesDropdown";

export default function ChallengeBreakdown(): JSX.Element {
  const { pack_order, } = useParams();
  const [packs, setPacks] = useState<PACKS[]>([]);

  useEffect(() => {
    if (pack_order) {
      setPacks(() => {
        const splitArray = pack_order.split("-");
        return splitArray.map(pack => parseInt(pack));
      });
    }
  }, [pack_order]);

  return (
    <div className={styles.main}>
      <Title />

      <section>
        <h2>Titre</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo impedit sit suscipit totam accusamus? A quas, quidem ea quos officia facere neque deleniti id voluptatem sed voluptas, asperiores numquam dicta?</p>

        <div className={styles.rules}>
          {packs.map(pack => <PackRulesDropdown key={`pack_rule_dropdown_${pack}`} pack={pack} />)}
        </div>
      </section>
    </div>
  );
}

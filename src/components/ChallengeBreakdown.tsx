import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

import styles from "../styles/components/ChallengeBreakdown.module.scss";

import { PACKS } from "./PackSelection";

import Title from "./Title";
import PackRulesDropdown from "./ui/PackRulesDropdown";

export default function ChallengeBreakdown(): JSX.Element {
  const { pack_order, } = useParams();

  const [packs, setPacks] = useState<PACKS[]>([]);
  const [currentlyOpenPack, setCurrentlyOpenedPack] = useState<PACKS | undefined>();

  useEffect(() => {
    if (pack_order) {
      setPacks(() => {
        const splitArray = pack_order.split("-")
          .filter(pack => pack !== "" && !isNaN(parseInt(pack)));
        return splitArray.map(pack => parseInt(pack));
      });
    }
  }, [pack_order]);

  function toggleCurrentPackHandler(pack: PACKS | undefined) {
    setCurrentlyOpenedPack(pack);
  }

  return (
    <div className={styles.main}>
      <NavLink to="/" className={styles.home_button}>
        <FontAwesomeIcon icon={faHouse} className={styles.icon} />
      </NavLink>

      <Title />

      <section>
        <h2>Titre</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo impedit sit suscipit totam accusamus? A quas, quidem ea quos officia facere neque deleniti id voluptatem sed voluptas, asperiores numquam dicta?</p>

        {packs.length === 0 && (
          <article className={styles.no_pack}>
            <p>Il semblerait que tu n'as pas sélectionné de pack !</p>
            <p><NavLink to="/" className={styles.link}>Retourne à l'accueil</NavLink> pour générer ton challenge sur base des packs auxquels tu veux jouer !</p>
          </article>
        )}

        <div className={styles.rules}>
          {packs.map(pack => (
            <PackRulesDropdown
              key={`pack_rule_dropdown_${pack}`}
              pack={pack}
              opened={currentlyOpenPack === pack}
              onToggle={toggleCurrentPackHandler}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

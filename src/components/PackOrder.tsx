import { useEffect, useState } from "react";

import styles from "../styles/components/PackOrder.module.scss";

import { PACKS } from "./PackSelection";

import PackOrderSlider from "./ui/PackOrderSlider";
import { NavLink } from "react-router-dom";

interface IPackOrderProps {
  selectedPacks: PACKS[]
}

const recommendedOrder: PACKS[] = [12, 11, 7, 9, 6, 8, 5, 13, 10, 0, 1, 3, 2, 15, 14];

export default function PackOrder(props: IPackOrderProps): JSX.Element {
  const { selectedPacks, } = props;

  const [order, setOrder] = useState<PACKS[]>([]);
  const [reordered, setReordered] = useState<boolean>(false);

  const [animatedUp, setAnimatedUp] = useState<number | undefined>(1);
  const [animatedDown, setAnimatedDown] = useState<number | undefined>(0);

  useEffect(() => {
    if (reordered) {
      setOrder(latest => {
        if (selectedPacks.length < latest.length) {
          return latest.filter(p => selectedPacks.includes(p));
        } else {
          const newPack = selectedPacks.filter(p => !latest.includes(p));

          return [...latest, newPack[0]];
        }
      });
    } else {
      setOrder(recommendedOrder.filter(p => selectedPacks.includes(p)));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPacks]);

  function reorderHandler(pack: PACKS, direction: "up" | "down") {
    setReordered(true);

    let newArray: PACKS[] = [];
    const animationDuration = 250;

    if (direction === "up") {
      const packIndex = order.indexOf(pack);

      const before = order.slice(0, packIndex);
      const after = order.slice(packIndex + 1);

      if (order[0] !== pack) {
        setAnimatedUp(pack);
        setAnimatedDown(before.slice(-1)[0]);
      }

      newArray = [...before, ...after];
      newArray.splice(packIndex - 1, 0, pack)
    } else {
      const packIndex = order.indexOf(pack);

      const before = order.slice(0, packIndex);
      const after = order.slice(packIndex + 1);

      if (order.slice(-1)[0] !== pack) {
        setAnimatedUp(after[0]);
        setAnimatedDown(pack);
      }

      newArray = [...before, ...after];
      newArray.splice(packIndex + 1, 0, pack);
    }

    setTimeout(() => {
      setAnimatedUp(undefined);
      setAnimatedDown(undefined);

      setOrder(latest => {
        if ((direction === "up" && latest[0] === pack) || (direction === "down" && latest.slice(-1)[0] === pack)) {
          return latest;
        }

        return newArray;
      });
  }, animationDuration);
  }

  return (
    <section className={styles.main}>
      <h3>Réarrange l'ordre</h3>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum amet possimus inventore tenetur iusto? Aspernatur tempore excepturi optio explicabo? Deleniti aperiam consequatur praesentium quis enim delectus dolorem debitis aut tenetur!</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum amet possimus inventore tenetur iusto? Aspernatur tempore excepturi optio explicabo? Deleniti aperiam consequatur praesentium quis enim delectus dolorem debitis aut tenetur!</p>

      <div className={styles.packs}>
        {selectedPacks.length === 0 && <p className={styles.no_selection}>Tes packs sélectionnés apparaîtront ici.</p>}

        {(selectedPacks.length > 0 && !reordered) && <p>Ordre recommandé:</p>}

        {selectedPacks.length > 0 && order.map(pack => (
          <PackOrderSlider
            key={`pack_slider_${pack}`}
            pack={pack}
            onReorder={reorderHandler}
            animate={animatedUp === pack ? "up" : (animatedDown === pack ? "down" : undefined)}
          />
        ))}
      </div>

      {order.length > 0 &&
        <div className={styles.generate_button_div}>
          <NavLink to={`/challenge/${order.join("-")}`}>
            <button>
              <p>Générer mon challenge</p>
            </button>
          </NavLink>
        </div>
      }
    </section>
  );
}

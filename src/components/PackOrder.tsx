import { useEffect, useState } from "react";
import styles from "../styles/components/PackOrder.module.scss";

import { PACKS } from "./PackSelection";

import PackOrderSlider from "./ui/PackOrderSlider";

interface IPackOrderProps {
  selectedPacks: PACKS[]
}

const recommendedOrder: PACKS[] = [12, 11, 7, 9, 6, 8, 5, 13, 10, 0, 1, 3, 2, 15, 14];

export default function PackOrder(props: IPackOrderProps): JSX.Element {
  const { selectedPacks, } = props;

  const [order, setOrder] = useState<PACKS[]>([]);
  const [reordered, setReordered] = useState<boolean>(false);

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

    setOrder(latest => {
      if (direction === "up") {
        if (latest[0] === pack) {
          return latest;
        }

        const packIndex = latest.indexOf(pack);

        const before = latest.slice(0, packIndex);
        const after = latest.slice(packIndex + 1);

        const newArray = [...before, ...after];
        newArray.splice(packIndex - 1, 0, pack)

        return newArray;
      } else {
        if (latest.slice(-1)[0] === pack) {
          return latest;
        }

        const packIndex = latest.indexOf(pack);

        const before = latest.slice(0, packIndex);
        const after = latest.slice(packIndex + 1);

        const newArray = [...before, ...after];
        newArray.splice(packIndex + 1, 0, pack);

        return newArray;
      }
    });
  }

  return (
    <section className={styles.main}>
      <h3>Réarrange l'ordre</h3>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum amet possimus inventore tenetur iusto? Aspernatur tempore excepturi optio explicabo? Deleniti aperiam consequatur praesentium quis enim delectus dolorem debitis aut tenetur!</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum amet possimus inventore tenetur iusto? Aspernatur tempore excepturi optio explicabo? Deleniti aperiam consequatur praesentium quis enim delectus dolorem debitis aut tenetur!</p>

      <div className={styles.packs}>
        {selectedPacks.length === 0 && <p className={styles.no_selection}>Tes packs sélectionnés apparaîtront ici.</p>}

        {(selectedPacks.length > 0 && !reordered) && <p>Ordre recommandé:</p>}

        {selectedPacks.length > 0 && order.map(pack => <PackOrderSlider key={`pack_slider_${pack}`} pack={pack} onReorder={reorderHandler} />)}
      </div>
    </section>
  );
}

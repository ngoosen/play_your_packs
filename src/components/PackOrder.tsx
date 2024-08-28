import styles from "../styles/components/PackOrder.module.scss";

import { PACKS } from "./PackSelection";

import PackOrderSlider from "./ui/PackOrderSlider";

interface IPackOrderProps {
  selectedPacks: PACKS[]
}

export default function PackOrder(props: IPackOrderProps): JSX.Element {
  const { selectedPacks, } = props;

  return (
    <section className={styles.main}>
      <h3>Réarrange l'ordre</h3>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum amet possimus inventore tenetur iusto? Aspernatur tempore excepturi optio explicabo? Deleniti aperiam consequatur praesentium quis enim delectus dolorem debitis aut tenetur!</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum amet possimus inventore tenetur iusto? Aspernatur tempore excepturi optio explicabo? Deleniti aperiam consequatur praesentium quis enim delectus dolorem debitis aut tenetur!</p>

      <div className={styles.packs}>
        {selectedPacks.length === 0 && <p className={styles.no_selection}>Tes packs sélectionnés apparaîtront ici.</p>}

        {selectedPacks.length > 0 && selectedPacks.map(pack => <PackOrderSlider key={`pack_slider_${pack}`} pack={pack} />)}
      </div>
    </section>
  );
}

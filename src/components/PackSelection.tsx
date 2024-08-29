import { useState } from "react";

import styles from "../styles/components/PackSelection.module.scss";

import PackOrder from "./PackOrder";
import PackSelectionButton from "./ui/PackSelectionButton";
import SelectAllPacksButton from "./ui/SelectAllPacksButton";

export enum PACKS {
  GET_TO_WORK,
  GET_TOGETHER,
  CITY_LIVING,
  CATS_AND_DOGS,
  SEASONS,
  GET_FAMOUS,
  ISLAND_LIVING,
  DISCOVER_UNIVERSITY,
  ECO_LIFESTYLE,
  SNOWY_ESCAPE,
  COTTAGE_LIVING,
  HIGH_SCHOOL_YEARS,
  GROWING_TOGETHER,
  HORSE_RANCH,
  FOR_RENT,
  LOVESTRUCK,
}

export default function PackSelection(): JSX.Element {
  const [selection, setSelection] = useState<PACKS[]>([]);

  function clickHandler(pack: PACKS) {
    setSelection(latest => {
      let returnArray: PACKS[] = [];

      if (latest.includes(pack)) {
        returnArray = latest.filter(p => p !== pack);
      } else {
        returnArray = [...latest, pack];
      }

      return returnArray;
    });
  }

  function toggleAllHandler(selectAll: boolean) {
    if (selectAll) {
      setSelection([0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
    } else {
      setSelection([]);
    }
  }

  return (
    <section className={styles.main}>
      <div>
        <h3>Sélectionne tes packs</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nam aliquam voluptatem labore ullam doloribus, harum cumque quis dolor unde facilis debitis, accusamus at eum officia sapiente quo fugiat omnis?</p>
        <SelectAllPacksButton currentSelection={selection} onToggle={toggleAllHandler} />
      </div>

      <PackSelectionButton pack={PACKS.GET_TO_WORK} onClick={clickHandler} selected={selection.includes(PACKS.GET_TO_WORK)} />
      <PackSelectionButton pack={PACKS.GET_TOGETHER} onClick={clickHandler} selected={selection.includes(PACKS.GET_TOGETHER)} />
      <PackSelectionButton pack={PACKS.CITY_LIVING} onClick={clickHandler} selected={selection.includes(PACKS.CITY_LIVING)} />
      <PackSelectionButton pack={PACKS.CATS_AND_DOGS} onClick={clickHandler} selected={selection.includes(PACKS.CATS_AND_DOGS)} />
      <PackSelectionButton pack={PACKS.GET_FAMOUS} onClick={clickHandler} selected={selection.includes(PACKS.GET_FAMOUS)} />
      <PackSelectionButton pack={PACKS.ISLAND_LIVING} onClick={clickHandler} selected={selection.includes(PACKS.ISLAND_LIVING)} />
      <PackSelectionButton pack={PACKS.DISCOVER_UNIVERSITY} onClick={clickHandler} selected={selection.includes(PACKS.DISCOVER_UNIVERSITY)} />
      <PackSelectionButton pack={PACKS.ECO_LIFESTYLE} onClick={clickHandler} selected={selection.includes(PACKS.ECO_LIFESTYLE)} />
      <PackSelectionButton pack={PACKS.SNOWY_ESCAPE} onClick={clickHandler} selected={selection.includes(PACKS.SNOWY_ESCAPE)} />
      <PackSelectionButton pack={PACKS.COTTAGE_LIVING} onClick={clickHandler} selected={selection.includes(PACKS.COTTAGE_LIVING)} />
      <PackSelectionButton pack={PACKS.HIGH_SCHOOL_YEARS} onClick={clickHandler} selected={selection.includes(PACKS.HIGH_SCHOOL_YEARS)} />
      <PackSelectionButton pack={PACKS.GROWING_TOGETHER} onClick={clickHandler} selected={selection.includes(PACKS.GROWING_TOGETHER)} />
      <PackSelectionButton pack={PACKS.HORSE_RANCH} onClick={clickHandler} selected={selection.includes(PACKS.HORSE_RANCH)} />
      <PackSelectionButton pack={PACKS.FOR_RENT} onClick={clickHandler} selected={selection.includes(PACKS.FOR_RENT)} />
      <PackSelectionButton pack={PACKS.LOVESTRUCK} onClick={clickHandler} selected={selection.includes(PACKS.LOVESTRUCK)} />

      <PackOrder selectedPacks={selection} />
    </section>
  );
}

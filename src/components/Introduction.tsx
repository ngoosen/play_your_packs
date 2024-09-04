import styles from "../styles/components/Introduction.module.scss";

export default function Introduction(): JSX.Element {
  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <h2>Le challenge qui va te faire (re)découvrir tes packs !</h2>
        <p>Si tu es comme moi, tu collectionnes les packs sur Les Sims 4 parce que tu adores construire. Ou peut-être préfères-tu créer des foyers entiers de Sims? Ou bien tu adores jouer mais tu retombes inlassablement dans les mêmes histoires par manque d'inspiration? Personnellement, après des heures à bâtir des maisons de rêve, je me suis rendue compte que je passais souvent à côté de plein de fonctionnalités super sympas du gameplay. Chaque pack est rempli de petits secrets et de détails qui rendent le jeu encore plus fun, et c’est vraiment dommage de ne pas les explorer à fond.</p>
        <p>C’est là qu’est née l’idée de ce challenge ! Divisé en plusieurs étapes, chacune dédiée à un pack spécifique, il te guide à travers des objectifs et des défis pour découvrir les subtilités cachées, les interactions uniques, et même des easter eggs méconnus. C’est une façon amusante et stimulante de redécouvrir ton jeu tout en exploitant le potentiel de chaque pack.</p>
        <p>Prêt·e à relever le défi ? Plonge dans cette aventure et redécouvre tes packs sous un nouveau jour. Ce challenge est l’occasion parfaite de sortir des sentiers battus et d’explorer toutes les subtilités des Sims 4. Let's play !</p>
      </div>
    </section>
  );
}

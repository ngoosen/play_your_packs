import styles from "../styles/components/RulesIntro.module.scss";

import Parallax from "./ui/Parallax";

export default function RulesIntro(): JSX.Element {
  return (
    <Parallax img="/img/landing_placeholder.jpg" className={styles.main}>
      <section>
        <h3>Principe</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo aspernatur eaque facere, debitis facilis est esse sapiente. Maxime dicta tempore minus sit recusandae eaque quia animi voluptatem eum temporibus. Ea vel, nam fuga nemo, error minus neque, optio maiores eveniet ut deserunt rem ratione eos dignissimos sapiente quibusdam similique perspiciatis. Voluptates, placeat provident laboriosam saepe repellat explicabo voluptate nihil cupiditate odio omnis, iste nostrum neque natus. Reprehenderit possimus vel earum eius tenetur quam alias voluptates dignissimos! Facilis nostrum, vel tenetur quisquam delectus dolorem fugiat aperiam ex pariatur animi cumque in enim deleniti. Nam, esse maxime impedit corporis asperiores facilis cumque?</p>

        <h3>Règles de base</h3>
        <ul>
          <li>Règle 1</li>
          <li>Règle 2</li>
          <li>Règle 3</li>
          <li>Règle 4</li>
          <li>Règle 5</li>
        </ul>

        <section className={styles.outro}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident animi laboriosam deleniti, assumenda dolorem magni sed hic ut id saepe laborum quidem. Quas eos dolorum consequatur error impedit laudantium veritatis quis ab suscipit modi. Soluta, ratione, adipisci doloribus quidem qui nihil quae dicta eum culpa incidunt neque? Eveniet, qui.</p>
          <p>Amusez-vous!</p>
        </section>
      </section>
    </Parallax>
  );
}

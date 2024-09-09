import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

import styles from "../../styles/components/ui/Page404.module.scss";

import Loader from "./Loader";

export default function Page404(): JSX.Element {
  const [countdown, setCountdown] = useState<number>(5);

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(latest => latest - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={styles.main}>
      <NavLink to="/" className={styles.home_button}>
        <FontAwesomeIcon icon={faHouse} className={styles.icon} />
      </NavLink>

      <h1>404: Page not found</h1>
      <p>Vous allez être redirigé·e dans {countdown} secondes</p>

      <Loader />
    </div>
  );
}

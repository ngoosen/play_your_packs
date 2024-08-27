import styles from "../../styles/components/ui/Parallax.module.scss";

interface IParallaxProps {
  img: string
  children?: JSX.Element
  className?: string;
}

export default function Parallax(props: IParallaxProps): JSX.Element {
  const { img, children, className, } = props;

  return (
    <div className={`${styles.main} ${className}`} style={{ backgroundImage: `url(${img})`, }}>
      {children}
    </div>
  );
}

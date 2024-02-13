import { FC } from "react";

import styles from "./IconButton.module.css";

interface IconButtonProps {
  icon: JSX.Element;

  onClick?: (event: unknown) => void | VoidFunction;
}

export const IconButton: FC<IconButtonProps> = ({ icon, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {icon}
    </button>
  );
};

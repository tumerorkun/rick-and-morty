import { memo, ReactNode } from "react";
import styles from "./card-grid.module.scss";

const CardGrid = memo(function CardGrid({ children }: { children: ReactNode }) {
    return <section className={styles.cardGrid}>{children}</section>;
});

export { CardGrid };

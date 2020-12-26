import { memo } from "react";
import styles from "./error.module.scss";
import { Logo } from "../";

const Error = memo(function Error({ message }: { message: string }) {
    return (
        <section className={styles.error}>
            <Logo className={styles.errorLogo} />
            <h1>Error</h1>
            <p>{message}</p>
        </section>
    );
});

export { Error };

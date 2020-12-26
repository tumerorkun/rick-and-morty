import { memo } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import styles from "./header.module.scss";
import { Logo, ChevronLeft } from "../";

const Header = memo(function Header({ backButton }: { backButton?: boolean }) {
    return (
        <header
            className={classnames(styles.header, {
                [styles.backButton]: backButton,
            })}
        >
            <nav>
                {backButton ? (
                    <strong>
                        <Link to="/">
                            <span>
                                <ChevronLeft />
                                Back
                            </span>
                        </Link>
                    </strong>
                ) : null}
                <h1>The Rick and Morty Characters</h1>
                <span>
                    <Logo />
                </span>
            </nav>
        </header>
    );
});

export { Header };

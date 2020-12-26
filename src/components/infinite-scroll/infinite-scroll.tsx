import { useCallback, useEffect, useRef, memo, ReactNode } from "react";
import classnames from "classnames";
import { Logo } from "../";
import styles from "./infinite-scroll.module.scss";

const InfiniteScroll = memo(function InfiniteScroll({
    children,
    isEnd,
    onLoadRequest,
}: {
    children: ReactNode;
    onLoadRequest: () => void;
    isEnd: boolean;
}) {
    const loader = useRef<SVGSVGElement>(null);
    const handleObserver = useCallback<IntersectionObserverCallback>(
        (entities) => entities[0].isIntersecting && onLoadRequest(),
        [onLoadRequest]
    );
    useEffect(() => {
        const observer = new IntersectionObserver(handleObserver, {
            threshold: 1.0,
        });
        loader.current && observer.observe(loader.current);
        return () => observer.disconnect();
    }, [handleObserver]);
    return (
        <section className={styles.scroll}>
            <section className={styles.scrollBody}>{children}</section>
            <article className={styles.scrollBottom}>
                <span>--- </span>
                <Logo
                    ref={loader}
                    className={classnames({ [styles.loader]: !isEnd })}
                />
                <span>--- </span>
            </article>
        </section>
    );
});

export { InfiniteScroll };

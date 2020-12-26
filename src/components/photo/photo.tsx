import { memo, useState, useCallback } from "react";
import { Logo } from "../";
import styles from "./photo.module.scss";

const Photo = memo(function Photo({
    src,
    alt,
    ...others
}: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
>) {
    const [loaded, setLoaded] = useState(false);
    const onLoad = useCallback(() => setLoaded(true), []);
    return (
        <>
            {!loaded && (
                <span className={styles.loader}>
                    <Logo />
                </span>
            )}
            <img
                src={src}
                alt={alt}
                {...others}
                {...(!loaded ? { style: { display: "none" } } : {})}
                onLoad={onLoad}
            />
        </>
    );
});

export { Photo };
